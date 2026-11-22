import React from 'react';

// Chemistry text is written in plain ASCII in narration.json and the scenes
// ("H2O(l)", "ΔH1", "OH^-"). Digits that follow a letter or ")" become
// subscripts; "^+", "^-", "^2-" become superscript charges, and "^5" a plain
// superscript ("10^5", "2^n", "2^[n+1]" for longer exponents).
const TOKEN = /((?<=[A-Za-z)])\d+|\^\d*[+\-−]|\^\d+|\^[a-z]|\^\[[^\]]+\])/;

const parts = (text: string) =>
	text
		.split(TOKEN)
		// split() with a capture group alternates text and matched tokens, so
		// plain digits in the text ("10^5") are not mistaken for subscripts.
		.map((p, i) => {
			if (i % 2 === 0) return {kind: 'text' as const, s: p};
			if (p.startsWith('^[')) return {kind: 'sup' as const, s: p.slice(2, -1)};
			if (p.startsWith('^')) return {kind: 'sup' as const, s: p.slice(1).replace('-', '−')};
			return {kind: 'sub' as const, s: p};
		})
		.filter((p) => p.s !== '');

export const chem = (text: string): React.ReactNode[] =>
	parts(text).map((p, i) => {
		if (p.kind === 'text') return p.s;
		const Tag = p.kind;
		return (
			<Tag key={i} style={{fontSize: '0.66em', lineHeight: 0}}>
				{p.s}
			</Tag>
		);
	});

export const Chem: React.FC<{children: string}> = ({children}) => <>{chem(children)}</>;

// SVG <text> has no <sub>; shift tspans instead. `size` is the text's font size.
export const svgChem = (text: string, size: number): React.ReactNode[] => {
	let shift = 0;
	return parts(text).map((p, i) => {
		const target = p.kind === 'sub' ? 0.3 : p.kind === 'sup' ? -0.42 : 0;
		const dy = (target - shift) * size;
		shift = target;
		return (
			<tspan key={i} dy={dy} fontSize={p.kind === 'text' ? size : size * 0.66}>
				{p.s}
			</tspan>
		);
	});
};

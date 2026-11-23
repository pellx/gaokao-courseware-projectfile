import React from 'react';

// Chemistry text is written in plain ASCII in narration.json and the scenes
// ("H2O(l)", "ΔH1", "OH^-"). Digits that follow a letter or ")" become
// subscripts; "^+", "^-", "^2-" become superscript charges; "^5" (no sign) is a plain superscript (3d^5, 2n^2).
const TOKEN = /((?<=[A-Za-z)])\d+|\^[\-−]\d+|\^[a-z\d]*[+\-−]|\^\d+|_\([^)]+\)|_[A-Za-z0-9]+)/;

// split() with a capture group puts the matched tokens at odd indexes; only those are
// sub/superscripts, so a bare number like "10" in "10^-3" stays normal text.
const parts = (text: string) =>
	text
		.split(TOKEN)
		.map((p, i) => {
			if (i % 2 === 0) return {kind: 'text' as const, s: p};
			if (p.startsWith('^')) return {kind: 'sup' as const, s: p.slice(1).replace('-', '−')};
			if (p.startsWith('_(')) return {kind: 'sub' as const, s: p.slice(2, -1)};
			if (p.startsWith('_')) return {kind: 'sub' as const, s: p.slice(1)};
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

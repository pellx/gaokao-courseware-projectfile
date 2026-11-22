import React from 'react';
import {C} from '../theme';
import {Appear, Callout} from './ui';

// Layouts shared by the 必修1 scenes. Everything fades in at its own `at`.

// The closing 考法 / 易错 / 解题方法 box of a scene, placed at `top`.
// 易错 is red, everything else green.
export const Tip: React.FC<{at: number; top: number; label: string; fontSize?: number; children: React.ReactNode}> = ({
	at,
	top,
	label,
	fontSize = 31,
	children,
}) => {
	const red = label === '易错';
	return (
		<Appear at={at} style={{position: 'absolute', left: 90, right: 90, top}}>
			<Callout label={label} color={red ? C.red : C.green} soft={red ? C.redSoft : C.greenSoft} style={{fontSize}}>
				{children}
			</Callout>
		</Appear>
	);
};

export type CardItem = {title: React.ReactNode; color: string; body: React.ReactNode; at: number; note?: React.ReactNode};

// A row of equal-width bordered cards with a coloured title.
export const Cards: React.FC<{
	items: CardItem[];
	top: number;
	height: number;
	left?: number;
	right?: number;
	fontSize?: number;
	titleSize?: number;
	gap?: number;
}> = ({items, top, height, left = 90, right = 90, fontSize = 30, titleSize = 38, gap = 24}) => (
	<div style={{position: 'absolute', left, right, top, display: 'flex', gap}}>
		{items.map((c, i) => (
			<Appear key={i} at={c.at} style={{flex: 1}}>
				<div style={{border: `5px solid ${c.color}`, borderRadius: 24, padding: '18px 24px', height, boxSizing: 'border-box', background: '#fff'}}>
					<div style={{fontSize: titleSize, fontWeight: 900, color: c.color}}>{c.title}</div>
					<div style={{fontSize, fontWeight: 700, marginTop: 12, lineHeight: 1.55}}>{c.body}</div>
					{c.note && <div style={{fontSize: fontSize * 0.86, fontWeight: 700, marginTop: 10, color: C.muted, lineHeight: 1.45}}>{c.note}</div>}
				</div>
			</Appear>
		))}
	</div>
);

// Vertical list of lines, each with a coloured dot.
export const Bullets: React.FC<{
	items: {at: number; color?: string; children: React.ReactNode}[];
	style?: React.CSSProperties;
	fontSize?: number;
	gap?: number;
}> = ({items, style, fontSize = 31, gap = 20}) => (
	<div style={{position: 'absolute', display: 'flex', flexDirection: 'column', gap, fontSize, fontWeight: 700, lineHeight: 1.5, ...style}}>
		{items.map((b, i) => (
			<Appear key={i} at={b.at} dx={-20} dy={0}>
				<div style={{display: 'flex', gap: 16}}>
					<span style={{flex: 'none', width: 16, height: 16, borderRadius: 8, background: b.color ?? C.orange, marginTop: fontSize * 0.55}} />
					<span>{b.children}</span>
				</div>
			</Appear>
		))}
	</div>
);

// Steps in rows of boxes joined by arrows; each row is its own line. A step can
// carry a small note under its label.
export type Step = {label: React.ReactNode; note?: React.ReactNode; color?: string; at: number};
export const Flow: React.FC<{
	rows: Step[][];
	style?: React.CSSProperties;
	fontSize?: number;
	arrows?: (string | undefined)[][];
	rowGap?: number;
}> = ({rows, style, fontSize = 32, arrows = [], rowGap = 28}) => (
	<div style={{position: 'absolute', display: 'flex', flexDirection: 'column', gap: rowGap, ...style}}>
		{rows.map((row, r) => (
			<div key={r} style={{display: 'flex', alignItems: 'center', gap: 12}}>
				{row.map((s, i) => (
					<React.Fragment key={i}>
						{i > 0 && (
							<Appear at={s.at} dy={0}>
								<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: C.muted, fontSize: Math.max(24, fontSize * 0.72), fontWeight: 800, minWidth: 40}}>
									{arrows[r]?.[i] && <span style={{whiteSpace: 'nowrap'}}>{arrows[r][i]}</span>}
									<span style={{fontSize: fontSize * 1.2, lineHeight: 1}}>→</span>
								</div>
							</Appear>
						)}
						<Appear at={s.at} dy={0} dx={-16}>
							<div
								style={{
									border: `4px solid ${s.color ?? C.line}`,
									color: s.color ?? C.text,
									borderRadius: 16,
									padding: '10px 20px',
									fontSize,
									fontWeight: 800,
									background: '#fff',
									whiteSpace: 'nowrap',
									textAlign: 'center',
									lineHeight: 1.25,
								}}
							>
								{s.label}
								{s.note && <div style={{fontSize: fontSize * 0.7, fontWeight: 700, color: C.muted}}>{s.note}</div>}
							</div>
						</Appear>
					</React.Fragment>
				))}
			</div>
		))}
	</div>
);

// Big statement panel (definition), left-bordered.
export const Def: React.FC<{at: number; style?: React.CSSProperties; color?: string; soft?: string; fontSize?: number; children: React.ReactNode}> = ({
	at,
	style,
	color = C.orange,
	soft = C.orangeSoft,
	fontSize = 34,
	children,
}) => (
	<Appear at={at} style={{position: 'absolute', ...style}}>
		<div style={{background: soft, borderLeft: `10px solid ${color}`, borderRadius: 18, padding: '20px 30px', fontSize, fontWeight: 700, lineHeight: 1.6}}>{children}</div>
	</Appear>
);

// Numbered rows (panel with a round badge), stacked vertically.
export const Rows: React.FC<{
	items: {at: number; color?: string; title?: React.ReactNode; children: React.ReactNode}[];
	style?: React.CSSProperties;
	fontSize?: number;
	gap?: number;
	badge?: (i: number) => React.ReactNode;
}> = ({items, style, fontSize = 32, gap = 18, badge = (i) => i + 1}) => (
	<div style={{position: 'absolute', display: 'flex', flexDirection: 'column', gap, ...style}}>
		{items.map((r, i) => (
			<Appear key={i} at={r.at} dx={-20} dy={0}>
				<div style={{display: 'flex', alignItems: 'center', gap: 20, background: C.panel, border: `3px solid ${C.line}`, borderRadius: 18, padding: '14px 24px', fontSize, fontWeight: 700, lineHeight: 1.5}}>
					<span style={{flex: 'none', minWidth: fontSize * 1.5, height: fontSize * 1.5, padding: '0 8px', boxSizing: 'border-box', borderRadius: fontSize * 0.75, background: r.color ?? C.orange, color: '#fff', fontWeight: 900, fontSize: fontSize * 0.85, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
						{badge(i)}
					</span>
					<span>
						{r.title && <span style={{color: r.color ?? C.orange, fontWeight: 900, marginRight: 14}}>{r.title}</span>}
						{r.children}
					</span>
				</div>
			</Appear>
		))}
	</div>
);

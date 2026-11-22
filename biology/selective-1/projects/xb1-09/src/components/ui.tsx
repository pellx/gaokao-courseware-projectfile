import React from 'react';
import {
	AbsoluteFill,
	Audio,
	Easing,
	Img,
	Sequence,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {C, FONT, clamp} from '../theme';
import type {SceneTimeline} from '../timeline';
import {chem} from './chem';

// 0 -> 1 ease-out ramp starting at `start`.
export const useRamp = (start: number, dur = 15) => {
	const frame = useCurrentFrame();
	return interpolate(frame, [start, start + dur], [0, 1], {
		...clamp,
		easing: Easing.out(Easing.cubic),
	});
};

export const usePop = (start: number) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	return spring({frame: frame - start, fps, config: {damping: 13, mass: 0.6}});
};

// Fades content in and out so scenes cross smoothly.
export const Scene: React.FC<{duration: number; children: React.ReactNode}> = ({
	duration,
	children,
}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 12, duration - 12, duration], [0, 1, 1, 0], clamp);
	return (
		<AbsoluteFill style={{fontFamily: FONT, color: C.text, opacity}}>{children}</AbsoluteFill>
	);
};

// Top-left heading: a coloured "考点N" tag followed by the title.
export const Header: React.FC<{tag?: string; tagColor?: string; children: React.ReactNode}> = ({
	tag,
	tagColor = C.red,
	children,
}) => {
	const t = useRamp(0, 18);
	return (
		<div
			style={{
				position: 'absolute',
				top: 48,
				left: 80,
				right: 80,
				display: 'flex',
				alignItems: 'center',
				gap: 24,
				opacity: t,
				transform: `translateX(${(1 - t) * -30}px)`,
			}}
		>
			{tag && (
				<div
					style={{
						background: tagColor,
						color: '#fff',
						fontSize: 34,
						fontWeight: 700,
						padding: '6px 22px',
						borderRadius: 12,
					}}
				>
					{tag}
				</div>
			)}
			<div style={{fontSize: 54, fontWeight: 800}}>{children}</div>
			<div style={{flex: 1, height: 4, background: C.line, borderRadius: 2, marginLeft: 12}} />
		</div>
	);
};

export const Appear: React.FC<{
	at: number;
	dx?: number;
	dy?: number;
	style?: React.CSSProperties;
	children: React.ReactNode;
}> = ({at, dx = 0, dy = 24, style, children}) => {
	const t = useRamp(at, 16);
	return (
		<div
			style={{
				...style,
				opacity: t,
				transform: `translate(${(1 - t) * dx}px, ${(1 - t) * dy}px)`,
			}}
		>
			{children}
		</div>
	);
};

export const Card: React.FC<{style?: React.CSSProperties; children: React.ReactNode}> = ({
	style,
	children,
}) => (
	<div
		style={{
			background: '#fff',
			border: `3px solid ${C.line}`,
			borderRadius: 24,
			boxShadow: '0 8px 24px rgba(60,40,20,0.08)',
			padding: '24px 32px',
			...style,
		}}
	>
		{children}
	</div>
);

// Labelled callout used for "考法 / 易错 / 解题方法".
export const Callout: React.FC<{
	label: string;
	color?: string;
	soft?: string;
	style?: React.CSSProperties;
	children: React.ReactNode;
}> = ({label, color = C.green, soft = C.greenSoft, style, children}) => (
	<div
		style={{
			background: soft,
			borderLeft: `10px solid ${color}`,
			borderRadius: 18,
			padding: '20px 28px',
			fontSize: 36,
			lineHeight: 1.55,
			...style,
		}}
	>
		<span
			style={{
				display: 'inline-block',
				background: color,
				color: '#fff',
				fontWeight: 700,
				fontSize: 30,
				padding: '2px 14px',
				borderRadius: 8,
				marginRight: 14,
				verticalAlign: 'middle',
			}}
		>
			{label}
		</span>
		{children}
	</div>
);

export const Photo: React.FC<{
	src: string;
	caption?: string;
	style?: React.CSSProperties;
	fit?: 'cover' | 'contain';
	// Optional zoom into part of the image: scale factor and focal point (CSS transform-origin).
	zoom?: {scale: number; origin: string};
}> = ({src, caption, style, fit = 'cover', zoom}) => (
	<div style={{position: 'relative', borderRadius: 24, overflow: 'hidden', boxShadow: '0 10px 30px rgba(60,40,20,0.18)', ...style}}>
		<Img
			src={staticFile(src)}
			style={{
				width: '100%',
				height: '100%',
				objectFit: fit,
				display: 'block',
				...(zoom && {transform: `scale(${zoom.scale})`, transformOrigin: zoom.origin}),
			}}
		/>
		{caption && (
			<div
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					bottom: 0,
					padding: '10px 18px',
					background: 'rgba(0,0,0,0.55)',
					color: '#fff',
					fontSize: 26,
				}}
			>
				{caption}
			</div>
		)}
	</div>
);

export const Hl: React.FC<{c?: string; children: React.ReactNode}> = ({c = C.red, children}) => (
	<span style={{color: c, fontWeight: 700}}>{children}</span>
);

// Renders "{word|color}" markup from narration.json as highlighted text, with
// chemical formulas subscripted.
export const markup = (text: string): React.ReactNode[] =>
	text.split(/(\{[^}]+\})/).map((part, i) => {
		const m = part.match(/^\{([^|}]+)(?:\|(\w+))?\}$/);
		if (!m) return <React.Fragment key={i}>{chem(part)}</React.Fragment>;
		return (
			<Hl key={i} c={m[2] ? C[m[2] as keyof typeof C] : undefined}>
				{chem(m[1])}
			</Hl>
		);
	});

type CaptionItem = {from: number; to: number; text: React.ReactNode};

const Captions: React.FC<{items: CaptionItem[]}> = ({items}) => {
	const frame = useCurrentFrame();
	const cur = items.find((i) => frame >= i.from && frame < i.to);
	if (!cur) return null;
	const opacity = interpolate(frame, [cur.from, cur.from + 8, cur.to - 8, cur.to], [0, 1, 1, 0], clamp);
	return (
		<div
			style={{
				position: 'absolute',
				bottom: 36,
				left: 0,
				right: 0,
				display: 'flex',
				justifyContent: 'center',
				opacity,
			}}
		>
			<div
				style={{
					maxWidth: 1680,
					fontSize: 40,
					lineHeight: 1.45,
					textAlign: 'center',
					padding: '12px 36px',
					background: 'rgba(255,255,255,0.94)',
					borderRadius: 16,
					border: `2px solid ${C.line}`,
					boxShadow: '0 4px 16px rgba(60,40,20,0.08)',
				}}
			>
				{cur.text}
			</div>
		</div>
	);
};

// Plays the scene's voice clips and shows each line as a caption while it is spoken.
export const Narration: React.FC<{t: SceneTimeline}> = ({t}) => (
	<>
		{t.lines.map((l) => (
			<Sequence key={l.id} from={l.from} durationInFrames={l.to - l.from + 10} layout="none">
				<Audio src={staticFile(`voice/${l.id}.mp3`)} />
			</Sequence>
		))}
		<Captions
			items={t.lines
				.filter((l) => l.caption)
				.map((l) => ({from: l.from, to: l.to + 6, text: markup(l.text)}))}
		/>
	</>
);

export const Defs: React.FC = () => (
	<defs>
		{(
			[
				['arrow', C.muted],
				['arrow-red', C.red],
				['arrow-orange', C.orange],
				['arrow-green', C.green],
			] as const
		).map(([id, fill]) => (
			<marker key={id} id={id} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
				<path d="M0,0 L10,5 L0,10 z" fill={fill} />
			</marker>
		))}
	</defs>
);

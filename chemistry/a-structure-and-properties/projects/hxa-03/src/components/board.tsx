import React, {useLayoutEffect, useRef, useState} from 'react';
import {continueRender, delayRender} from 'remotion';
import {C} from '../theme';
import type {SceneTimeline} from '../timeline';
import {Appear, Callout, Header, Narration, Scene} from './ui';

// 通用考点场景版面：标题 + 内容区（纵向排列，提示框紧跟在内容下方）+ 插画小剧场 + 字幕。
// 内容区从 y=165 开始，到 y≈880 为止；子元素自己用 Appear 控制出现时刻。
const CALLOUT: Record<string, [string, string]> = {
	考法: [C.orange, C.orangeSoft],
	易错: [C.red, C.redSoft],
	解题方法: [C.green, C.greenSoft],
	答题模板: [C.green, C.greenSoft],
	规律: [C.orange, C.orangeSoft],
};

// 自动缩放：量出内容高度，放大或缩小到正好填满 y=top…880（上限 maxZoom）。zoom 显式给出时不自动。
const BOTTOM = 880;
const useFit = (top: number, fixed: number | undefined, maxZoom: number) => {
	const ref = useRef<HTMLDivElement>(null);
	const [z, setZ] = useState(fixed ?? 1);
	const [handle] = useState(() => (fixed ? null : delayRender('fit board')));
	useLayoutEffect(() => {
		if (fixed || !handle) return;
		const run = () => {
			const el = ref.current;
			if (!el) return continueRender(handle);
			const avail = BOTTOM - top;
			const H = (zz: number) => {
				el.style.zoom = String(zz);
				// 量外层（未缩放）容器：不同 Chrome 版本对 zoom 元素自身的 rect 处理不一致。
				return (el.parentElement as HTMLElement).getBoundingClientRect().height;
			};
			let zz = 1;
			for (let i = 0; i < 5; i++) {
				const nz = Math.min(maxZoom, (zz * avail) / H(zz));
				if (Math.abs(nz - zz) < 0.01) break;
				zz = nz;
			}
			while (H(zz) > avail && zz > 0.6) zz -= 0.02;
			setZ(zz);
			continueRender(handle);
		};
		// 等中文字体真正加载进 document.fonts 后再量（theme.ts 用 FontFace 异步加载）。
		let tries = 0;
		const wait = () => {
			if (document.fonts.check('30px "Noto Sans SC"') || tries++ > 200) document.fonts.ready.then(() => requestAnimationFrame(run));
			else setTimeout(wait, 25);
		};
		wait();
	}, [fixed, handle, top, maxZoom]);
	return [ref, z] as const;
};

export const Board: React.FC<{
	t: SceneTimeline;
	tag: string;
	title: string;
	callout?: {label: string; at: number; text: React.ReactNode; size?: number};
	gap?: number;
	top?: number;
	overlay?: React.ReactNode;
	zoom?: number; // 固定缩放；不给则自动填满
	maxZoom?: number;
	children: React.ReactNode;
}> = ({t, tag, title, callout, gap = 22, top = 165, overlay, zoom, maxZoom = 1.4, children}) => {
	const [ref, z] = useFit(top, zoom, maxZoom);
	const [c, soft] = CALLOUT[callout?.label ?? '考法'] ?? [C.orange, C.orangeSoft];
	return (
		<Scene duration={t.duration}>
			<Header tag={tag}>{title}</Header>
			<div style={{position: 'absolute', left: 90, right: 90, top}}>
			<div ref={ref} style={{zoom: z, display: 'flex', flexDirection: 'column', gap}}>
				{children}
				{callout && (
					<Appear at={callout.at}>
						<Callout label={callout.label} color={c} soft={soft} style={{fontSize: callout.size ?? 31, padding: '16px 26px'}}>
							{callout.text}
						</Callout>
					</Appear>
				)}
			</div>
			</div>
			{overlay}
			<Narration t={t} />
		</Scene>
	);
};

export const Row: React.FC<{gap?: number; align?: React.CSSProperties['alignItems']; style?: React.CSSProperties; children: React.ReactNode}> = ({gap = 28, align = 'flex-start', style, children}) => (
	<div style={{display: 'flex', gap, alignItems: align, ...style}}>{children}</div>
);

export const Col: React.FC<{flex?: number; width?: number; gap?: number; style?: React.CSSProperties; children: React.ReactNode}> = ({flex, width, gap = 16, style, children}) => (
	<div style={{display: 'flex', flexDirection: 'column', gap, flex: width ? undefined : flex ?? 1, width, minWidth: 0, ...style}}>{children}</div>
);

// 彩色小标签 + 一行说明（规律一、规律二……）。
export const Rule: React.FC<{tag: string; color?: string; at: number; size?: number; children: React.ReactNode}> = ({tag, color = C.red, at, size = 30, children}) => (
	<Appear at={at} dx={-20} dy={0}>
		<div style={{display: 'flex', alignItems: 'center', gap: 16, background: C.panel, border: `3px solid ${C.line}`, borderRadius: 18, padding: '12px 20px', fontSize: size, fontWeight: 700, lineHeight: 1.45}}>
			<span style={{flexShrink: 0, background: color, color: '#fff', fontSize: size * 0.8, padding: '2px 12px', borderRadius: 8, whiteSpace: 'nowrap'}}>{tag}</span>
			<span>{children}</span>
		</div>
	</Appear>
);

// 带标题条的卡片。
export const Panel: React.FC<{title?: React.ReactNode; color?: string; at: number; size?: number; style?: React.CSSProperties; children: React.ReactNode}> = ({title, color = C.orange, at, size = 30, style, children}) => (
	<Appear at={at}>
		<div style={{background: '#fff', border: `3px solid ${C.line}`, borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 20px rgba(60,40,20,0.06)', ...style}}>
			{title && <div style={{background: color, color: '#fff', fontSize: size, fontWeight: 800, padding: '8px 22px'}}>{title}</div>}
			<div style={{padding: '14px 22px', fontSize: size, fontWeight: 600, lineHeight: 1.55}}>{children}</div>
		</div>
	</Appear>
);

// 大号公式 / 结论条。
export const Big: React.FC<{at: number; size?: number; color?: string; soft?: string; style?: React.CSSProperties; children: React.ReactNode}> = ({at, size = 40, color = C.line, soft = C.panel, style, children}) => (
	<Appear at={at}>
		<div style={{background: soft, border: `3px solid ${color}`, borderRadius: 18, padding: '14px 28px', textAlign: 'center', fontSize: size, fontWeight: 800, lineHeight: 1.45, ...style}}>{children}</div>
	</Appear>
);

// 逐条出现的要点。
export const Items: React.FC<{items: {at: number; node: React.ReactNode; color?: string}[]; size?: number; gap?: number}> = ({items, size = 30, gap = 10}) => (
	<div style={{display: 'flex', flexDirection: 'column', gap}}>
		{items.map((it, i) => (
			<Appear key={i} at={it.at} dx={-16} dy={0}>
				<div style={{display: 'flex', gap: 12, fontSize: size, fontWeight: 700, lineHeight: 1.45}}>
					<span style={{color: it.color ?? C.orange, flexShrink: 0}}>●</span>
					<span>{it.node}</span>
				</div>
			</Appear>
		))}
	</div>
);

// 行内彩色小标签。
export const Tag: React.FC<{c?: string; children: React.ReactNode}> = ({c = C.orange, children}) => (
	<span style={{display: 'inline-block', background: c, color: '#fff', fontSize: '0.8em', fontWeight: 800, padding: '0 10px', borderRadius: 8, margin: '0 4px', verticalAlign: 'middle', lineHeight: 1.5}}>{children}</span>
);

// 对 / 错 小方块（✓ ✗ 后接说明）。
export const Mark: React.FC<{ok: boolean; at: number; size?: number; children: React.ReactNode}> = ({ok, at, size = 30, children}) => (
	<Appear at={at} dy={0} dx={-12}>
		<div style={{display: 'flex', alignItems: 'center', gap: 14, background: ok ? C.greenSoft : C.redSoft, borderRadius: 16, padding: '10px 18px', fontSize: size, fontWeight: 700}}>
			<span style={{width: size * 1.4, height: size * 1.4, borderRadius: size, background: ok ? C.green : C.red, color: '#fff', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>{ok ? '✓' : '✗'}</span>
			<span>{children}</span>
		</div>
	</Appear>
);

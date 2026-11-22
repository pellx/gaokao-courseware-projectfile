import React from 'react';
import {Img, interpolate, staticFile, useCurrentFrame} from 'remotion';
import {EP} from '../episode';
import {C} from '../theme';
import {usePop} from './ui';

// 二次元插图（每期 3 张，信息在 episode.json 的 anime 数组里，按 key 取）。
export type AnimeInfo = {key: string; src: string; credit: string; url: string};
export const anime = (key: string): AnimeInfo => {
	const a = (EP.anime ?? []).find((x) => x.key === key);
	if (!a) throw new Error(`episode.json 里没有 anime "${key}"`);
	return a;
};

const Bubble: React.FC<{at: number; children: React.ReactNode; tail?: 'left' | 'right'; style?: React.CSSProperties}> = ({at, children, tail = 'left', style}) => {
	const s = usePop(at);
	return (
		<div style={{position: 'relative', transform: `scale(${s})`, transformOrigin: tail === 'left' ? '0% 50%' : '100% 50%', ...style}}>
			<div style={{background: C.redSoft, border: `4px solid ${C.red}`, borderRadius: 28, padding: '20px 30px', fontSize: 40, fontWeight: 900, color: C.text, whiteSpace: 'pre-line', lineHeight: 1.45}}>{children}</div>
			<div
				style={{
					position: 'absolute',
					top: '50%',
					marginTop: -18,
					[tail]: -30,
					width: 0,
					height: 0,
					borderTop: '18px solid transparent',
					borderBottom: '18px solid transparent',
					[tail === 'left' ? 'borderRight' : 'borderLeft']: `30px solid ${C.red}`,
				}}
			/>
		</div>
	);
};

// “插画小剧场”：在一句台词期间（from→to）盖住当前场景，左边大图、右边气泡；念完淡出，场景内容恢复。
// 放在场景里 <Narration> 之前，这样字幕仍在最上层。
export const AnimeBeat: React.FC<{k: string; from: number; to: number; children: React.ReactNode}> = ({k, from, to, children}) => {
	const f = useCurrentFrame();
	const a = anime(k);
	const o = interpolate(f, [from - 6, from + 6, to - 4, to + 8], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
	const pop = usePop(from);
	if (o <= 0) return null;
	return (
		<div style={{position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.96)', opacity: o}}>
			<div style={{position: 'absolute', left: 120, top: 110, width: 820, height: 740, transform: `scale(${0.85 + 0.15 * pop})`}}>
				<Img src={staticFile(`images/${a.src}`)} style={{width: '100%', height: '100%', objectFit: 'contain', filter: 'drop-shadow(0 10px 24px rgba(60,40,20,0.18))'}} />
			</div>
			<div style={{position: 'absolute', left: 120, width: 820, top: 858, textAlign: 'center', fontSize: 20, color: C.muted}}>{a.credit}</div>
			<div style={{position: 'absolute', left: 1010, right: 110, top: 0, bottom: 200, display: 'flex', alignItems: 'center'}}>
				<Bubble at={from + 10}>{children}</Bubble>
			</div>
		</div>
	);
};

// 静态贴图：放在画面空白处（如片尾），带气泡和署名。
export const AnimeSticker: React.FC<{k: string; at: number; style: React.CSSProperties; bubble?: React.ReactNode; bubbleStyle?: React.CSSProperties}> = ({k, at, style, bubble, bubbleStyle}) => {
	const a = anime(k);
	const pop = usePop(at);
	return (
		<>
			<div style={{position: 'absolute', opacity: Math.min(1, pop), transform: `scale(${0.85 + 0.15 * pop})`, ...style}}>
				<Img src={staticFile(`images/${a.src}`)} style={{width: '100%', height: '100%', objectFit: 'contain'}} />
				<div style={{position: 'absolute', left: -40, right: -40, bottom: -30, textAlign: 'center', fontSize: 18, color: C.muted}}>{a.credit}</div>
			</div>
			{bubble && (
				<div style={{position: 'absolute', ...bubbleStyle}}>
					<Bubble at={at + 12} tail="right">
						{bubble}
					</Bubble>
				</div>
			)}
		</>
	);
};

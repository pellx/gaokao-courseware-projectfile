import React from 'react';
import {Appear, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.image;
const {im1, im2, im3, im4} = t.cue;

// Field of view: a circle with the image at the lower left.
const CX = 260;
const CY = 250;
const R = 210;
const IX = 150;
const IY = 345;

const Letter: React.FC<{ch: string; label: string; color: string; flip?: boolean}> = ({ch, label, color, flip}) => (
	<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6}}>
		<div style={{width: 170, height: 170, borderRadius: 24, border: `5px solid ${color}`, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
			<span style={{fontSize: 130, fontWeight: 900, color, display: 'inline-block', transform: flip ? 'rotate(180deg)' : undefined, lineHeight: 1}}>{ch}</span>
		</div>
		<div style={{fontSize: 30, fontWeight: 800, color: C.muted}}>{label}</div>
	</div>
);

export const Image: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">显微镜成像的特点</Header>
		<Appear at={im1.from} style={{position: 'absolute', left: 1000, top: 175, display: 'flex', alignItems: 'center', gap: 30}}>
			<Letter ch="p" label="装片上的实物" color={C.text} />
			<div style={{fontSize: 30, fontWeight: 800, color: C.orange, textAlign: 'center'}}>
				旋转
				<br />
				180°
				<div style={{fontSize: 56, lineHeight: 1}}>→</div>
			</div>
			<Letter ch="p" label="视野中的物像" color={C.red} flip />
		</Appear>
		<svg width={560} height={520} viewBox="0 0 560 520" style={{position: 'absolute', left: 130, top: 160}}>
			<Defs />
			<G at={im2.from}>
				<circle cx={CX} cy={CY} r={R} fill={C.panel} stroke={C.brown} strokeWidth={6} />
				<line x1={CX - 18} y1={CY} x2={CX + 18} y2={CY} stroke={C.muted} strokeWidth={3} />
				<line x1={CX} y1={CY - 18} x2={CX} y2={CY + 18} stroke={C.muted} strokeWidth={3} />
				<circle cx={IX} cy={IY} r={30} fill={C.red} />
				<text x={IX + 10} y={IY + 70} fontSize={28} fontWeight={800} fill={C.red} textAnchor="middle">物像</text>
			</G>
			<G at={im2.from + 50}>
				<Arrow x1={IX} y1={IY} x2={CX} y2={CY} trim={[38, 10]} color={C.green} marker="arrow-green" />
				<text x={CX} y={CY + R + 50} fontSize={32} fontWeight={900} fill={C.text} textAnchor="middle">装片向<tspan fill={C.red}>左下方</tspan>移动</text>
			</G>
		</svg>
		<Def at={im3.from} style={{left: 900, right: 90, top: 470}} fontSize={32}>
			放大倍数 ＝ <Hl c={C.orange}>目镜倍数 × 物镜倍数</Hl>
			<br />
			放大的是物体的<Hl>长度或宽度</Hl>，不是面积
		</Def>
		<Tip at={im4.from} top={720} label="解题方法">
			移装片：<Hl>偏哪移哪</Hl>；由物像判断实物：把图<Hl c={C.orange}>旋转 180°</Hl>（上下、左右都颠倒）
		</Tip>
		<Narration t={t} />
	</Scene>
);

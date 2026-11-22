import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.motor;
const {mo1, mo2, mo3, mo4, mo5, mo6} = t.cue;

// Precentral gyrus from top to bottom, with the relative size of each
// body part's area.
const PARTS: [string, number, boolean][] = [
	['下肢', 0.3, false],
	['躯干', 0.25, false],
	['上肢', 0.35, false],
	['手指', 1, false],
	['眼', 0.3, true],
	['唇', 0.9, true],
	['舌', 0.7, true],
];

export const Motor: React.FC = () => {
	const frame = useCurrentFrame();
	const grow = interpolate(frame, [mo4.from + 20, mo4.from + 60], [0, 1], clamp);
	const head = frame >= mo3.from && frame < mo4.from;
	return (
		<Scene duration={t.duration}>
			<Header tag="考点一">大脑皮层第一运动区</Header>
			<Appear at={mo1.from} style={{position: 'absolute', left: 90, top: 175, fontSize: 32, fontWeight: 800}}>
				位置：<Hl>中央前回</Hl>
			</Appear>
			<div style={{position: 'absolute', left: 90, top: 245, width: 1000}}>
				<Appear at={mo2.from} style={{fontSize: 26, fontWeight: 800, color: C.muted, marginBottom: 6}}>
					▲ 顶部
				</Appear>
				{PARTS.map(([name, size, isHead], i) => {
					const w = 60 + (60 + (size * 340 - 60) * grow);
					const big = size > 0.6 && grow > 0.5;
					const color = head && isHead ? C.green : big ? C.red : C.orange;
					return (
						<Appear key={name} at={mo2.from + 8 + i * 6} dx={-20} dy={0} style={{display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8}}>
							<div style={{width: 90, fontSize: 30, fontWeight: 900, color}}>{name}</div>
							<div style={{width: w, height: 44, borderRadius: 10, background: color, opacity: 0.85}} />
						</Appear>
					);
				})}
				<Appear at={mo2.from} style={{fontSize: 26, fontWeight: 800, color: C.muted}}>
					▼ 底部
				</Appear>
			</div>
			<div style={{position: 'absolute', left: 640, top: 250, width: 560, display: 'flex', flexDirection: 'column', gap: 18, fontSize: 28, fontWeight: 700, lineHeight: 1.45}}>
				<Appear at={mo2.from + 30}>
					① 整体<Hl>倒置</Hl>：下肢在顶部，头面部在底部
				</Appear>
				<Appear at={mo3.from}>
					② 头面部内部<Hl c={C.green}>正立</Hl>：眼在口的上方
				</Appear>
				<Appear at={mo4.from}>
					③ 代表区大小取决于运动的<Hl>精细程度</Hl>，与躯体大小无关
				</Appear>
			</div>
			<Appear at={mo5.from} style={{position: 'absolute', left: 1250, right: 90, top: 170, height: 560}}>
				<Photo src="images/homunculus.png" caption="运动区“小人”：按代表区大小绘制" style={{width: '100%', height: '100%', background: '#fff'}} fit="contain" />
			</Appear>
			<Appear at={mo6.from} style={{position: 'absolute', left: 90, right: 90, top: 760}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
					除头面部外为<Hl>交叉支配</Hl>：刺激右侧运动区 → <Hl>左侧</Hl>肢体运动
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};

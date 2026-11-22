import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.concept;
const {cn2, cn3, cn4, cn5} = t.cue;

// Body temperature wobbling inside a narrow band: a picture of dynamic balance.
const WOBBLE = Array.from({length: 121}, (_, i) => 37 + 0.22 * Math.sin(i * 0.16) + 0.1 * Math.sin(i * 0.43 + 1));

const Story: React.FC<{who: string; at: number; children: React.ReactNode}> = ({who, at, children}) => (
	<Appear at={at} dx={30} dy={0}>
		<div style={{display: 'flex', gap: 18, alignItems: 'baseline', background: C.panel, border: `3px solid ${C.line}`, borderRadius: 18, padding: '14px 22px', fontSize: 31, lineHeight: 1.5, marginBottom: 16}}>
			<b style={{color: C.orange, flexShrink: 0, fontSize: 33}}>{who}</b>
			<span>{children}</span>
		</div>
	</Appear>
);

export const Concept: React.FC = () => {
	const frame = useCurrentFrame();
	const draw = interpolate(frame, [cn5.from, cn5.from + 90], [0, 1], clamp);
	const W = 620;
	const pts = WOBBLE.map((v, i) => `${110 + (i * (W - 130)) / 120},${110 - (v - 37) * 160}`).join(' ');
	return (
		<Scene duration={t.duration}>
			<Header tag="考点二">稳态的概念</Header>
			<Appear at={cn2.from - 10} style={{position: 'absolute', left: 90, top: 165, width: 300, height: 330}}>
				<Photo src="images/bernard.jpg" caption="贝尔纳（法国）" style={{width: '100%', height: '100%'}} pos="center 30%" />
			</Appear>
			<Appear at={cn3.from - 10} style={{position: 'absolute', left: 410, top: 165, width: 300, height: 330}}>
				<Photo src="images/cannon.jpg" caption="坎农（美国）" style={{width: '100%', height: '100%'}} pos="center 20%" />
			</Appear>
			<div style={{position: 'absolute', left: 760, right: 90, top: 165}}>
				<Story who="贝尔纳" at={cn2.from}>
					内环境的恒定主要依赖<Hl c={C.orange}>神经系统</Hl>的调节
				</Story>
				<Story who="坎　农" at={cn3.from}>
					<Hl c={C.orange}>神经调节和体液调节</Hl>共同作用，各器官、系统分工合作、协调统一 → 提出“<Hl>稳态</Hl>”
				</Story>
				<Appear at={cn4.from}>
					<div style={{border: `4px solid ${C.red}`, borderRadius: 20, padding: '16px 24px', fontSize: 33, lineHeight: 1.55, background: '#fff'}}>
						<b style={{color: C.red}}>稳态：</b>正常机体通过调节作用，使各个器官、系统协调活动，共同维持内环境的<Hl>相对稳定状态</Hl>
					</div>
				</Appear>
			</div>
			<Appear at={cn5.from - 5} style={{position: 'absolute', left: 90, top: 530}}>
				<div style={{fontSize: 28, fontWeight: 800}}>体温随时间的变化（示意）</div>
				<svg width={W} height={240} viewBox={`0 0 ${W} 240`}>
					<rect x={110} y={50} width={W - 130} height={120} fill={C.greenSoft} />
					<line x1={110} y1={110} x2={W - 20} y2={110} stroke={C.green} strokeWidth={2} strokeDasharray="8 8" />
					<text x={96} y={118} fontSize={26} textAnchor="end" fill={C.green} fontWeight={800}>37 ℃</text>
					<polyline points={pts} fill="none" stroke={C.red} strokeWidth={5} pathLength={1} strokeDasharray={`${draw} 1`} />
					<text x={110} y={212} fontSize={26} fill={C.muted} fontWeight={700}>在一定范围内波动 = 动态平衡</text>
				</svg>
			</Appear>
			<Appear at={cn5.from} style={{position: 'absolute', left: 760, right: 90, top: 640}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 32}}>
					稳态≠恒定不变，而是<Hl>动态平衡</Hl>：<Hl c={C.orange}>化学成分</Hl>和<Hl c={C.orange}>理化性质</Hl>都在一定范围内波动。
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};

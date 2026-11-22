import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.somatic;
const {sm1, sm2, sm3, sm4} = t.cue;

// Label positions on the 500×700 brain picture: [name, x, y, label x, label y, colour].
const MARKS: [string, number, number, number, number, string][] = [
	['大脑皮层', 270, 150, 560, 120, C.red],
	['小脑', 375, 290, 560, 260, C.brown],
	['脑干', 290, 330, 560, 360, C.orange],
	['脊髓', 297, 480, 560, 470, C.green],
];

const LEVELS: [string, string, string][] = [
	['大脑皮层', '最高级中枢：发出指令', C.red],
	['脑干、小脑', '连接上下；协调运动、维持平衡', C.orange],
	['脊髓', '低级中枢：直接支配肌肉', C.green],
];

export const Somatic: React.FC = () => {
	const frame = useCurrentFrame();
	return (
		<Scene duration={t.duration}>
			<Header tag="考点二">躯体运动的分级调节</Header>
			<Appear at={sm1.from} style={{position: 'absolute', left: 90, top: 165, width: 500, height: 700}}>
				<Photo src="images/lynch-brain.png" style={{width: '100%', height: '100%', boxShadow: 'none', background: '#fff'}} fit="contain" />
			</Appear>
			<svg width={760} height={700} style={{position: 'absolute', left: 90, top: 165}}>
				{MARKS.map(([name, x, y, lx, ly, color], i) => (
					<g key={name} opacity={frame >= sm1.from + 10 + i * 8 ? 1 : 0}>
						<circle cx={x} cy={y} r={9} fill={color} />
						<line x1={x} y1={y} x2={lx - 10} y2={ly - 10} stroke={color} strokeWidth={3} />
						<text x={lx} y={ly} fontSize={30} fontWeight={900} fill={color}>{name}</text>
					</g>
				))}
			</svg>
			<div style={{position: 'absolute', left: 900, right: 90, top: 190, display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 10}}>
				{LEVELS.map(([name, job, color], i) => (
					<React.Fragment key={name}>
						{i > 0 && (
							<Appear at={i === 2 ? sm2.from : sm3.from} dy={0} style={{textAlign: 'center', fontSize: 36, color: C.muted, lineHeight: 1}}>
								↓ 调控
							</Appear>
						)}
						<Appear at={i === 0 ? sm3.from : sm2.from + (i === 1 ? 50 : 0)} dx={-20} dy={0}>
							<div style={{border: `4px solid ${color}`, borderRadius: 18, padding: '14px 24px', background: '#fff'}}>
								<div style={{fontSize: 36, fontWeight: 900, color}}>{name}</div>
								<div style={{fontSize: 28, fontWeight: 600, color: C.muted}}>{job}</div>
							</div>
						</Appear>
					</React.Fragment>
				))}
			</div>
			<Appear at={sm4.from} style={{position: 'absolute', left: 900, right: 90, top: 690}}>
				<Callout label="考法" style={{fontSize: 28, padding: '12px 22px'}}>
					核心：<Hl>低级中枢受高级中枢调控</Hl>；见到“受大脑皮层控制”就想到分级调节
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};

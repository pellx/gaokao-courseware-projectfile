import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene, useRamp} from '../components/ui';
import {ArcPart, ReflexArc} from '../components/ReflexArc';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.judge;
const {jd1, jd2, jd3, jd4, jd5, jd6} = t.cue;

const METHODS: [string, React.ReactNode, typeof jd2][] = [
	['看神经节', <>有神经节 → <Hl c={C.orange}>传入神经</Hl></>, jd2],
	['看脊髓灰质', <>连<Hl c={C.green}>前角（宽）</Hl>→ 传出；连<Hl c={C.orange}>后角（窄）</Hl>→ 传入</>, jd3],
	['看突触', <>兴奋只能由<Hl>轴突末梢</Hl>传向下一个神经元</>, jd4],
	['切断实验', <>刺激中枢端有反应 → <Hl c={C.orange}>传入</Hl>；刺激外周端有反应 → <Hl c={C.green}>传出</Hl></>, jd5],
];

export const Judge: React.FC = () => {
	const frame = useCurrentFrame();
	const live = (cue: {from: number; to: number}) => frame >= cue.from && frame < cue.to + 20;
	const hl: Partial<Record<ArcPart, string>> = {};
	if (live(jd2)) hl.ganglion = C.orange;
	if (live(jd3)) {
		hl.afferent = C.orange;
		hl.efferent = C.green;
	}
	if (live(jd4)) hl.center = C.red;
	if (live(jd5)) hl.afferent = C.orange;
	const horns = useRamp(jd3.from, 16);
	const arrows = useRamp(jd4.from, 16);
	const cut = useRamp(jd5.from, 16);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点三">传入神经与传出神经的判断</Header>
			<Appear at={jd1.from} style={{position: 'absolute', left: 60, top: 170}}>
				<div style={{transform: 'scale(0.86)', transformOrigin: 'top left'}}>
					<ReflexArc hl={hl} horns={horns} arrows={arrows} cut={cut} />
				</div>
			</Appear>
			<div style={{position: 'absolute', left: 1110, right: 70, top: 180, display: 'flex', flexDirection: 'column', gap: 16}}>
				{METHODS.map(([name, body, cue], i) => (
					<Appear key={name} at={cue.from} dx={-20} dy={0}>
						<div style={{background: live(cue) ? C.orangeSoft : C.panel, border: `3px solid ${live(cue) ? C.orange : C.line}`, borderRadius: 16, padding: '12px 20px', fontSize: 28, lineHeight: 1.45}}>
							<div style={{fontWeight: 900, fontSize: 32, marginBottom: 2}}>
								方法{'一二三四'[i]}：{name}
							</div>
							{body}
						</div>
					</Appear>
				))}
			</div>
			<Appear at={jd6.from} style={{position: 'absolute', left: 90, width: 1000, top: 740}}>
				<Callout label="解题方法" style={{fontSize: 28, padding: '12px 24px'}}>
					先用<Hl c={C.orange}>神经节</Hl>或<Hl c={C.green}>前角、后角</Hl>定方向，再依次标出：感受器 → 传入神经 → 神经中枢 → 传出神经 → 效应器
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};

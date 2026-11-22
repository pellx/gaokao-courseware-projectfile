import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {ArcPart, ReflexArc} from '../components/ReflexArc';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.arc;
const {ac1, ac2, ac3, ac4, ac5, ac6, ac7} = t.cue;

const PARTS: [ArcPart, string, string, typeof ac2][] = [
	['receptor', '感受器', '接受刺激，产生兴奋', ac2],
	['afferent', '传入神经', '把兴奋传向神经中枢', ac3],
	['center', '神经中枢', '分析和综合信息', ac4],
	['efferent', '传出神经', '把兴奋传向效应器', ac5],
	['effector', '效应器', '作出应答', ac6],
];
const COLOR: Record<string, string> = {receptor: C.orange, afferent: C.orange, center: C.red, efferent: C.green, effector: C.green};

export const Arc: React.FC = () => {
	const frame = useCurrentFrame();
	const hl: Partial<Record<ArcPart, string>> = {};
	for (const [p, , , cue] of PARTS) {
		if (frame >= cue.from) hl[p] = COLOR[p];
	}
	if (frame >= ac7.from) {
		for (const p of Object.keys(hl) as ArcPart[]) if (p !== 'effector' && p !== 'efferent') delete hl[p];
	}
	return (
		<Scene duration={t.duration}>
			<Header tag="考点二">反射的结构基础：反射弧</Header>
			<Appear at={ac1.from} style={{position: 'absolute', left: 60, top: 170}}>
				<ReflexArc hl={hl} />
			</Appear>
			<div style={{position: 'absolute', left: 1200, right: 90, top: 190, display: 'flex', flexDirection: 'column', gap: 18}}>
				{PARTS.map(([p, name, job, cue], i) => (
					<Appear key={p} at={cue.from} dx={-20} dy={0}>
						<div style={{display: 'flex', alignItems: 'center', gap: 18, fontSize: 32}}>
							<span style={{width: 52, height: 52, borderRadius: 26, background: COLOR[p], color: '#fff', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0}}>{i + 1}</span>
							<div>
								<div style={{fontWeight: 900, color: COLOR[p], fontSize: 36}}>{name}</div>
								<div style={{color: C.muted, fontWeight: 600}}>{job}</div>
							</div>
						</div>
					</Appear>
				))}
			</div>
			<Appear at={ac7.from} style={{position: 'absolute', left: 1200, right: 90, top: 795}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
					效应器 = <Hl>传出神经末梢</Hl> + 它所支配的<Hl>肌肉或腺体</Hl>
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};

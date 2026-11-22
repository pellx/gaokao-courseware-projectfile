import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.virus;
const {vr2, vr3, vr4, vr5} = t.cue;

// Three stages of a virus infection and the branch of immunity that acts in each.
const STAGES: [string, string, string, string, number][] = [
	['① 进入细胞前', '体液免疫', '抗体与病毒结合，阻止扩散', C.orange, vr2.from],
	['② 进入细胞后', '细胞免疫', '细胞毒性T细胞使靶细胞裂解，释放病毒', C.green, vr3.from],
	['③ 释放出来后', '体液免疫', '抗体结合，或被其他免疫细胞吞噬', C.orange, vr4.from],
];

export const Virus: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">病毒入侵：两种免疫的配合</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190, display: 'flex', alignItems: 'center', gap: 16}}>
			{STAGES.map(([when, kind, what, color, from], i) => (
				<React.Fragment key={when}>
					{i > 0 && (
						<Appear at={from} dy={0} style={{fontSize: 56, color: C.muted, fontWeight: 900}}>
							→
						</Appear>
					)}
					<Appear at={from} style={{flex: 1}}>
						<div style={{border: `5px solid ${color}`, borderRadius: 24, background: '#fff', height: 360, boxSizing: 'border-box', overflow: 'hidden'}}>
							<div style={{fontSize: 32, fontWeight: 800, color: C.muted, padding: '18px 26px 0'}}>{when}</div>
							<div style={{fontSize: 52, fontWeight: 900, color, padding: '8px 26px'}}>{kind}</div>
							<div style={{fontSize: 30, fontWeight: 700, padding: '8px 26px', lineHeight: 1.5}}>{what}</div>
						</div>
					</Appear>
				</React.Fragment>
			))}
		</div>
		<Appear at={vr5.from} style={{position: 'absolute', left: 90, right: 90, top: 610}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				病原体在<Hl c={C.orange}>细胞外</Hl> → 体液免疫；在<Hl c={C.green}>细胞内</Hl> → 细胞免疫；<Hl>胞内寄生</Hl>的病毒、结核杆菌 → 两种都需要
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

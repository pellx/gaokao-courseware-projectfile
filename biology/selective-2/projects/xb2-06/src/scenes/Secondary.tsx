import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.secondary;
const {sd1, sd2, sd3, sd4} = t.cue;

const CASES = ['火灾过后的草原', '过量砍伐的森林', '弃耕的农田'];

export const Secondary: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">次生演替</Header>
		<Appear at={sd1.from} style={{position: 'absolute', left: 90, right: 90, top: 175, fontSize: 31, fontWeight: 700, lineHeight: 1.6}}>
			起点：原有植被不存在，但<Hl>土壤条件基本保留</Hl>，甚至保留了<Hl>种子或其他繁殖体</Hl>
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 90, top: 270, display: 'flex', gap: 24}}>
			{CASES.map((c, i) => (
				<Appear key={c} at={sd2.from + i * 15} style={{flex: 1}}>
					<div style={{border: `4px solid ${C.orange}`, borderRadius: 18, padding: '16px 20px', textAlign: 'center', fontSize: 32, fontWeight: 800, color: C.orange}}>{c}</div>
				</Appear>
			))}
		</div>
		<div style={{position: 'absolute', left: 90, top: 420}}>
			<Chain
				fontSize={30}
				gap={12}
				steps={[
					{label: '弃耕农田', color: C.brown, at: sd3.from},
					{label: '一年生杂草', color: C.orange, at: sd3.from + 15},
					{label: '多年生杂草', color: C.orange, at: sd3.from + 30},
					{label: '灌木', color: '#3f8f4f', at: sd3.from + 45},
					{label: '乔木（条件适宜）', color: C.green, at: sd3.from + 60},
				]}
			/>
		</div>
		<Appear at={sd4.from} style={{position: 'absolute', left: 90, right: 90, top: 580}}>
			<Callout label="解题方法" style={{fontSize: 31}}>
				看起点有没有<Hl>土壤条件和繁殖体</Hl>：有 → <Hl>次生演替</Hl>；没有 → 初生演替
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Plot, sample} from '../components/plot';
import {Bullets, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.substrate;
const {sb1, sb2, sb3} = t.cue;

const sat = (top: number) => (x: number) => top * (1 - Math.exp(-x * 6));

export const Substrate: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">底物浓度和酶浓度对反应速率的影响</Header>
		<div style={{position: 'absolute', left: 90, top: 170}}>
			<Plot
				id="sub"
				w={900}
				h={460}
				at={sb1.from}
				xLabel="底物浓度"
				yLabel="反应速率"
				curves={[
					{pts: sample(sat(0.5)), color: C.orange, at: sb1.from + 10, label: '酶量少', lx: 0.85, ly: 0.56},
					{pts: sample(sat(0.85)), color: C.red, at: sb2.from, label: '酶量多', lx: 0.85, ly: 0.91},
				]}
			/>
		</div>
		<Bullets
			style={{left: 1060, right: 90, top: 210}}
			fontSize={32}
			gap={24}
			items={[
				{at: sb1.from, color: C.orange, children: <>底物浓度↑ → 速率先↑，后受<Hl c={C.orange}>酶浓度</Hl>限制</>},
				{at: sb2.from, color: C.red, children: <>底物充足：速率与<Hl>酶浓度成正比</Hl></>},
			]}
		/>
		<Tip at={sb3.from} top={680} label="解题方法">
			拐点前：限制因素是<Hl>横坐标所示因素</Hl>；拐点后：限制因素是<Hl c={C.orange}>其他因素</Hl>（如酶的数量）
		</Tip>
		<Narration t={t} />
	</Scene>
);

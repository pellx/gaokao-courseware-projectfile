import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Bullets, Def, Tip} from '../components/lib';
import {F} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.total;
const {tt1, tt2, tt3, tt4} = t.cue;

export const Total: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">有氧呼吸的概念与总反应式</Header>
		<Def at={tt1.from} style={{left: 90, right: 90, top: 165}} fontSize={32}>
			在 <F>O2</F> 参与下，把葡萄糖等有机物<Hl>彻底氧化分解</Hl>，产生 <F>CO2</F> 和水，释放能量，生成大量 ATP
		</Def>
		<Appear at={tt2.from} style={{position: 'absolute', left: 90, right: 90, top: 320, textAlign: 'center', fontSize: 46, fontWeight: 900}}>
			<F>C6H12O6 + 6H2O + 6O2</F>
			<span style={{display: 'inline-block', margin: '0 20px', textAlign: 'center', verticalAlign: 'middle'}}>
				<span style={{display: 'block', fontSize: 28, color: C.orange, lineHeight: 1}}>酶</span>
				<span style={{display: 'block', lineHeight: 1}}>⟶</span>
			</span>
			<F>6CO2 + 12H2O</F> ＋ <Hl>能量</Hl>
		</Appear>
		<Bullets
			style={{left: 90, right: 90, top: 450}}
			fontSize={32}
			gap={18}
			items={[
				{at: tt3.from, color: C.orange, children: <>1 mol 葡萄糖释放 <Hl c={C.orange}>2870 kJ</Hl>，约 <Hl c={C.orange}>977.28 kJ</Hl> 储存在 ATP 中，其余以热能散失</>},
			]}
		/>
		<Tip at={tt4.from} top={580} label="解题方法">
			反应式<Hl>两边都有水</Hl>，箭头上注明“酶”，最后写<Hl>“能量”</Hl>而不是 ATP
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.explain;
const {el1, el2, el3, el4, el5} = t.cue;
const GAMETES = ['YR', 'Yr', 'yR', 'yr'];

export const Explain: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">对自由组合现象的解释</Header>
		<Rows
			style={{left: 90, right: 90, top: 170}}
			fontSize={32}
			gap={18}
			items={[
				{at: el1.from, color: C.orange, children: <>粒色 Y / y，粒形 R / r；P：YYRR × yyrr → F<sub>1</sub>：<Hl>YyRr</Hl></>},
				{at: el2.from, color: C.red, children: <>F<sub>1</sub> 形成配子时：每对遗传因子<Hl>彼此分离</Hl>，不同对的遗传因子<Hl>自由组合</Hl></>},
				{at: el4.from, color: C.green, children: <>受精时雌雄配子<Hl c={C.green}>随机结合</Hl>：4 × 4 = 16 种结合方式</>},
			]}
		/>
		<Appear at={el3.from} style={{position: 'absolute', left: 90, right: 90, top: 470, display: 'flex', alignItems: 'center', gap: 28}}>
			<span style={{fontSize: 34, fontWeight: 800}}>F<sub>1</sub> 的配子：</span>
			{GAMETES.map((g, i) => (
				<span key={g} style={{border: `5px solid ${[C.red, C.orange, C.green, C.brown][i]}`, color: [C.red, C.orange, C.green, C.brown][i], borderRadius: 50, padding: '10px 34px', fontSize: 44, fontWeight: 900, background: '#fff'}}>
					{g}
				</span>
			))}
			<span style={{fontSize: 40, fontWeight: 900, color: C.orange}}>= 1∶1∶1∶1</span>
		</Appear>
		<Tip at={el5.from} top={650} label="易错" fontSize={34}>
			16 是<Hl>配子的结合方式</Hl>，不是基因型种类；F<sub>2</sub> 基因型只有 <Hl>9 种</Hl>，表型 4 种
		</Tip>
		<Narration t={t} />
	</Scene>
);

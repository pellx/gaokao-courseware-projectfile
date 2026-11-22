import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {Punnett} from '../components/gene';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.explain;
const {ex1, ex2, ex3, ex4, ex5} = t.cue;
const tone = (g: string) => (g === 'DD' ? C.red : g === 'Dd' ? C.orange : C.green);

export const Explain: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">对分离现象的解释</Header>
		<Rows
			style={{left: 90, width: 1020, top: 170}}
			fontSize={30}
			gap={16}
			items={[
				{at: ex1.from, color: C.red, children: <>性状由<Hl>遗传因子</Hl>决定（显性 D，隐性 d）</>},
				{at: ex2.from, color: C.orange, children: <>体细胞中遗传因子<Hl c={C.orange}>成对存在</Hl>：DD、dd、Dd</>},
				{at: ex3.from, color: C.red, children: <>形成配子时成对的遗传因子<Hl>彼此分离</Hl>，配子中只含每对中的一个</>},
				{at: ex4.from, color: C.orange, children: <>受精时雌雄配子<Hl c={C.orange}>随机结合</Hl></>},
			]}
		/>
		<Appear at={ex3.from} style={{position: 'absolute', left: 1200, top: 170, fontSize: 34, fontWeight: 800}}>
			F<sub>1</sub> Dd → 配子 <Hl>D</Hl> ∶ <Hl c={C.green}>d</Hl> = 1∶1
		</Appear>
		<Punnett
			style={{left: 1200, top: 240}}
			at={ex4.from}
			cell={130}
			fontSize={40}
			cols={['D', 'd']}
			rows={['D', 'd']}
			cells={[['DD', 'Dd'], ['Dd', 'dd']]}
			color={tone}
			note={(g) => (g === 'dd' ? '矮茎' : '高茎')}
		/>
		<Appear at={ex4.from + 40} style={{position: 'absolute', left: 1200, top: 600, fontSize: 32, fontWeight: 800}}>
			DD∶Dd∶dd = 1∶2∶1　高∶矮 = <Hl>3∶1</Hl>
		</Appear>
		<Tip at={ex5.from} top={700} label="易错" fontSize={32}>
			雌、雄配子<Hl>数量不相等</Hl>（雄配子远多于雌配子）；相等的是 D 与 d 两种配子的<Hl>比例</Hl>（1∶1）
		</Tip>
		<Narration t={t} />
	</Scene>
);

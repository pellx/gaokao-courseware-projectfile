import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Tree} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.biotic;
const {bi1, bi2, bi3, bi4, bi5} = t.cue;

export const Biotic: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">生物因素</Header>
		<div style={{position: 'absolute', left: 90, top: 180}}>
			<Tree
				width={1100}
				height={440}
				colWidth={370}
				boxWidth={300}
				root={{
					label: '生物因素',
					color: C.text,
					at: bi1.from,
					children: [
						{label: '种群内部', color: C.orange, at: bi1.from, children: [{label: '种内竞争', note: '密度越大越激烈', color: C.orange, at: bi2.from}]},
						{
							label: '种群外部',
							color: C.red,
							at: bi1.from,
							children: [
								{label: '捕食', color: C.red, at: bi3.from},
								{label: '种间竞争', color: C.red, at: bi3.from + 10},
								{label: '寄生', note: '病原体、寄生虫', color: C.red, at: bi3.from + 20},
							],
						},
					],
				}}
			/>
		</div>
		<Appear at={bi4.from} style={{position: 'absolute', left: 1260, right: 90, top: 400, fontSize: 30, fontWeight: 700, lineHeight: 1.55}}>
			种群密度越大，病原体的致病力和传播速度<Hl>越大</Hl>
		</Appear>
		<Appear at={bi5.from} style={{position: 'absolute', left: 90, right: 90, top: 680}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31}}>
				<Hl c={C.orange}>种内竞争</Hl>是种群内部因素，<Hl>不属于种间关系</Hl>；捕食、竞争、寄生才是种间关系
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tree} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.breeding;
const {br1, br2, br3, br4} = t.cue;

export const Breeding: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">菌种的选育</Header>
		<div style={{position: 'absolute', left: 90, top: 190}}>
			<Tree
				width={1500}
				height={450}
				colWidth={460}
				boxWidth={400}
				boxHeight={110}
				fontSize={34}
				root={{
					label: '性状优良的菌种',
					color: C.red,
					at: br1.from,
					children: [
						{label: '从自然界中筛选', color: C.green, at: br1.from},
						{label: '诱变育种', note: '如：高产青霉素的青霉菌', color: C.orange, at: br2.from},
						{label: '基因工程育种', note: '如：生产乙肝疫苗的酵母菌', color: C.orange, at: br3.from},
					],
				}}
			/>
		</div>
		<Tip at={br4.from} top={700} label="解题方法">
			用射线、化学药剂处理的是<Hl c={C.orange}>诱变育种</Hl>；导入外源基因的是<Hl c={C.orange}>基因工程育种</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

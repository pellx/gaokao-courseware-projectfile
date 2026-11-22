import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.pool;
const {po1, po2, po3, po4} = t.cue;

export const Pool: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">种群与基因库</Header>
		<Rows
			style={{left: 90, right: 90, top: 185}}
			fontSize={33}
			gap={22}
			items={[
				{at: po1.from, color: C.red, title: '种群', children: <>一定区域内<Hl>同种生物全部个体</Hl>的集合；生物进化的<Hl>基本单位</Hl></>},
				{at: po2.from, color: C.orange, title: '基因库', children: <>一个种群中<Hl c={C.orange}>全部个体所含有的全部基因</Hl></>},
				{at: po3.from, color: C.green, title: '基因频率', children: <>某个基因占<Hl c={C.green}>全部等位基因数</Hl>的比值</>},
			]}
		/>
		<Tip at={po4.from} top={600} label="易错" fontSize={34}>
			基因库是<Hl>全部个体的全部基因</Hl>；个体会死亡，基因库可以在繁殖中保留和发展
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.sutton;
const {su1, su2, su3, su4, su5} = t.cue;

export const Sutton: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">萨顿的假说：基因和染色体的平行关系</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				at={su1.from}
				cols="200px 1fr 1fr"
				fontSize={29}
				rowHeight={84}
				head={['比较项目', '基因', '染色体']}
				rows={[
					{at: su2.from, cells: ['独立性', '杂交中保持完整性和独立性', '配子形成和受精中形态结构相对稳定']},
					{at: su3.from, cells: ['存在', <>体细胞中<Hl c={C.orange}>成对</Hl>，配子中只有一个</>, <>体细胞中<Hl c={C.orange}>成对</Hl>，配子中只有一条</>]},
					{at: su4.from, cells: ['来源', '一个来自父方，一个来自母方', '同源染色体一条来自父方，一条来自母方']},
					{at: su4.from + 80, cells: ['行为', <>非等位基因<Hl c={C.orange}>自由组合</Hl></>, <>非同源染色体<Hl c={C.orange}>自由组合</Hl></>]},
				]}
			/>
		</div>
		<Def at={su5.from} style={{left: 90, right: 90, top: 620}} color={C.red} soft={C.redSoft} fontSize={36}>
			推论：<Hl>基因是由染色体携带着从亲代传递给下一代的</Hl>（基因在染色体上）
		</Def>
		<Narration t={t} />
	</Scene>
);

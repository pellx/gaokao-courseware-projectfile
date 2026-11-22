import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.single;
const {si1, si2, si3, si4} = t.cue;

export const Single: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">单基因遗传病的实例归类</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Table
				at={si1.from}
				cols="300px 1fr"
				fontSize={32}
				rowHeight={86}
				head={['遗传方式', '实例']}
				rows={[
					{at: si1.from, cells: [<Hl>常染色体显性</Hl>, '多指、并指、软骨发育不全']},
					{at: si2.from, cells: [<Hl c={C.orange}>常染色体隐性</Hl>, '白化病、苯丙酮尿症、镰状细胞贫血、囊性纤维化']},
					{at: si3.from, cells: [<Hl>伴 X 显性</Hl>, '抗维生素 D 佝偻病']},
					{at: si3.from + 70, cells: [<Hl c={C.orange}>伴 X 隐性</Hl>, '红绿色盲、血友病、进行性肌营养不良']},
				]}
			/>
		</div>
		<Tip at={si4.from} top={640} label="考法" fontSize={34}>
			给出病名判断遗传方式或计算概率 —— 这些实例要<Hl>记熟</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Mark} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.equil;
const {eq1, eq2, eq3, eq4} = t.cue;

export const Equil: React.FC = () => (
	<Board
		t={t}
		tag="考点六"
		title="配位平衡与配合物的转化"
		gap={20}
		callout={{label: '解题方法', at: eq4.from, text: <>由“<Hl>谁把谁替换下来</Hl>”比较配位能力；用<Hl c={C.orange}>勒夏特列原理</Hl>解释颜色变化、沉淀溶解</>}}
	>
		<Big at={eq1.from} size={36}>配离子存在<Hl>配位平衡</Hl>：更强的配体能把原配体<Hl>替换</Hl>下来</Big>
		<Mark ok at={eq2.from} size={32}>{chem('[Cu(H2O)4]^2+')}（天蓝）+ 浓氨水 → 深蓝：配位能力 <Hl>{chem('NH3 > H2O')}</Hl></Mark>
		<Mark ok at={eq3.from} size={32}>{chem('Fe(SCN)3')}（红）+ NaF → 褪色：生成更稳定的 <Hl>{chem('[FeF6]^3-')}</Hl></Mark>
	</Board>
);

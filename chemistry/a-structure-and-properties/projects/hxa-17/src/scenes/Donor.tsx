import React from 'react';
import {Hl} from '../components/ui';
import {Board, Rule} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.donor;
const {dn1, dn2, dn3, dn4} = t.cue;

export const Donor: React.FC = () => (
	<Board
		t={t}
		tag="考点三"
		title="配位原子的判断"
		gap={20}
		callout={{label: '解题方法', at: dn4.from, text: <>找配体中<Hl>有孤电子对、电负性较小</Hl>的原子；中心原子（常为过渡金属离子）提供空轨道</>}}
	>
		<Rule tag="常见" color={C.red} at={dn1.from} size={34}>{chem('NH3')} 中的 <Hl>N</Hl>、{chem('H2O')} 中的 <Hl>O</Hl>、{chem('Cl^-')}、{chem('F^-')}</Rule>
		<Rule tag="特殊" color={C.orange} at={dn2.from} size={34}>{chem('CN^-')}、CO 中配位原子是 <Hl>C</Hl>：C 电负性小，孤电子对更易给出</Rule>
		<Rule tag="硫氰根" color={C.green} at={dn3.from} size={34}>与 {chem('Fe^3+')} 配位：一般认为是 <Hl c={C.green}>S</Hl></Rule>
	</Board>
);

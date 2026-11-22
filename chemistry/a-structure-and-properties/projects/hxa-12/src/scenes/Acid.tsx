import React from 'react';
import {Hl} from '../components/ui';
import {Chain} from '../components/kit';
import {Board, Panel} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.acid;
const {ac1, ac2, ac3, ac4, ac5} = t.cue;

export const Acid: React.FC = () => (
	<Board
		t={t}
		tag="考点三"
		title="键的极性对羧酸酸性的影响"
		callout={{label: '答题模板', at: ac5.from, text: <>吸（推）电子基团 → 羧基中 <Hl>O—H 键极性增大（减小）</Hl> → 更易（难）电离出 H<sup>+</sup> → 酸性强（弱）</>}}
	>
		<Panel title={<>看羧基中 O—H 键的极性：极性越大，越易电离 H<sup>+</sup>，酸性越强</>} color={C.brown} at={ac1.from} size={30}>
			<span>{chem('R—COOH')}：R 吸电子 → 酸性<Hl>强</Hl>；R 推电子 → 酸性<Hl c={C.orange}>弱</Hl></span>
		</Panel>
		<Panel title="吸电子基团（F、Cl）：酸性增强" color={C.red} at={ac2.from} size={30}>
			<Chain
				fontSize={28}
				gap={6}
				arrows={['>', '>', '>', '>']}
				steps={[
					{label: chem('CF3COOH'), color: C.red, at: ac3.from},
					{label: chem('CCl3COOH'), at: ac3.from + 10},
					{label: chem('CHCl2COOH'), at: ac3.from + 20},
					{label: chem('CH2ClCOOH'), at: ac3.from + 30},
					{label: chem('CH3COOH'), at: ac3.from + 40},
				]}
			/>
		</Panel>
		<Panel title="推电子基团（烃基）：烃基越长，酸性越弱" color={C.orange} at={ac4.from} size={30}>
			<Chain
				fontSize={30}
				gap={8}
				arrows={['>', '>']}
				steps={[
					{label: <>甲酸 {chem('HCOOH')}</>, color: C.orange, at: ac4.from},
					{label: <>乙酸 {chem('CH3COOH')}</>, at: ac4.from + 15},
					{label: <>丙酸 {chem('C2H5COOH')}</>, at: ac4.from + 30},
				]}
			/>
		</Panel>
	</Board>
);

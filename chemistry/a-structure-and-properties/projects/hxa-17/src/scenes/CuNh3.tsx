import React from 'react';
import {Hl} from '../components/ui';
import {Chain} from '../components/kit';
import {Big, Board} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.cunh3;
const {cu1, cu2, cu3, cu4} = t.cue;
const Sw: React.FC<{c: string; children: React.ReactNode}> = ({c, children}) => (
	<span style={{display: 'inline-flex', alignItems: 'center', gap: 10}}>
		<span style={{width: 34, height: 34, borderRadius: 8, background: c, border: '2px solid #00000022'}} />
		{children}
	</span>
);

export const CuNh3: React.FC = () => (
	<Board
		t={t}
		tag="考点四"
		title="实验 3-3：铜氨配合物"
		gap={26}
		callout={{label: '考法', at: cu4.from, text: <>{chem('Cu(OH)2 + 4NH3 = [Cu(NH3)4]^2+ + 2OH^-')}；加乙醇析晶：乙醇<Hl>极性较小</Hl>，降低溶解度</>}}
	>
		<Chain
			fontSize={30}
			gap={8}
			arrows={['氨水', '过量', '乙醇']}
			steps={[
				{label: <Sw c="#7ec8e3"><span>{chem('CuSO4')}溶液</span></Sw>, at: cu1.from},
				{label: <Sw c="#4aa3c8"><span>蓝色沉淀</span></Sw>, at: cu1.from + 30},
				{label: <Sw c="#1d4e9e">深蓝色溶液</Sw>, color: C.red, at: cu2.from},
				{label: <Sw c="#1d4e9e">深蓝色晶体</Sw>, at: cu3.from},
			]}
		/>
		<Big at={cu2.from} size={36}>深蓝色：<Hl>{chem('[Cu(NH3)4]^2+')}</Hl></Big>
		<Big at={cu3.from} size={34} color={C.green} soft={C.greenSoft}>析出 {chem('[Cu(NH3)4]SO4·H2O')}：乙醇极性小 → 配合物溶解度降低</Big>
	</Board>
);

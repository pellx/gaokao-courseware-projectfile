import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Rule} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.vdw;
const {vd1, vd2, vd3, vd4, vd5} = t.cue;

export const Vdw: React.FC = () => (
	<Board
		t={t}
		tag="考点一"
		title="范德华力"
		gap={20}
		callout={{label: '易错', at: vd5.from, text: <>范德华力只影响<Hl>物理性质</Hl>，不影响稳定性和化学性质</>}}
	>
		<Big at={vd1.from} size={36}>分子间普遍存在，比化学键<Hl>弱得多</Hl>；影响<Hl c={C.orange}>熔点、沸点</Hl></Big>
		<Rule tag="因素一" color={C.red} at={vd2.from} size={32}>组成结构相似：<Hl>相对分子质量越大</Hl>，熔沸点越高　{chem('F2 < Cl2 < Br2 < I2')}，{chem('CF4 < CCl4')}</Rule>
		<Rule tag="因素二" color={C.orange} at={vd3.from} size={32}>相对分子质量相近：<Hl c={C.orange}>极性越大</Hl>，范德华力越大　{chem('CO > N2')}（沸点）</Rule>
		<Rule tag="实例" color={C.green} at={vd4.from} size={32}>{chem('CS2')}（液）&gt; {chem('CO2')}（气）：结构相似，{chem('CS2')} 相对分子质量大</Rule>
	</Board>
);

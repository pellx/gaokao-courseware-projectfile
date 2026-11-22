import React from 'react';
import {Hl} from '../components/ui';
import {Board, Rule} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.solubility;
const {so1, so2, so2b, so3, so4, so5} = t.cue;

export const Solubility: React.FC = () => (
	<Board
		t={t}
		tag="考点六"
		title="溶解性"
		gap={18}
		callout={{label: '解题方法', at: so5.from, text: <>逐条查：<Hl>极性是否相似</Hl> → <Hl c={C.orange}>能否与水形成氢键</Hl> → <Hl c={C.green}>能否与水反应</Hl></>}}
		overlay={
			<AnimeBeat k="same" from={so2b.from} to={so2b.to}>
				<span style={{color: C.red}}>相似相溶</span>：{'\n'}性质相近，{'\n'}才容易“走到一起”
			</AnimeBeat>
		}
	>
		<Rule tag="规律一" color={C.red} at={so1.from} size={32}><Hl>相似相溶</Hl>：非极性溶质 ↔ 非极性溶剂，极性溶质 ↔ 极性溶剂</Rule>
		<Rule tag="实例" color={C.brown} at={so2.from} size={32}>{chem('I2')}（非极性）在 {chem('CCl4')} 中的溶解度 ≫ 在水中</Rule>
		<Rule tag="规律二" color={C.orange} at={so3.from} size={32}>与水形成<Hl c={C.orange}>氢键</Hl> → 溶解度增大：{chem('NH3')} 极易溶于水，{chem('PH3')} 不能</Rule>
		<Rule tag="规律三" color={C.green} at={so4.from} size={32}>与水<Hl c={C.green}>反应</Hl> → 溶解度增大（{chem('SO2')}、{chem('NH3')}）；醇的碳链越长，水溶性越小</Rule>
	</Board>
);

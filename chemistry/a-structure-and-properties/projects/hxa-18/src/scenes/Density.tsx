import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Board, Items} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {chem} from '../components/chem';
import {Frac} from './Frac';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.density;
const {dn1, dn2, dn3, dn4, dn4b, dn5} = t.cue;
const NA = (
	<span>
		N<sub style={{fontSize: '0.6em'}}>A</sub>
	</span>
);

export const Density: React.FC = () => (
	<Board
		t={t}
		tag="考点三"
		title="密度公式"
		callout={{label: '易错', at: dn5.from, text: <>N 与 M 对应<Hl>同一个“化学式”</Hl>：N 数 NaCl 的个数，M 就用 NaCl 的摩尔质量</>}}
		overlay={
			<AnimeBeat k="math" from={dn4b.from} to={dn4b.to}>
				公式多别慌：{'\n'}按“<span style={{color: C.red}}>质量 ÷ 体积</span>”{'\n'}一步步列
			</AnimeBeat>
		}
	>
		<Appear at={dn1.from}>
			<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 64, fontWeight: 900, background: C.redSoft, borderRadius: 20, padding: '14px 0'}}>
				ρ =
				<Frac n={<>N · M</>} d={<>{NA} · a<sup style={{fontSize: '0.6em'}}>3</sup></>} c={C.red} />
			</div>
		</Appear>
		<Items
			size={32}
			gap={14}
			items={[
				{at: dn2.from, node: <>N：一个晶胞中<Hl>“化学式”的个数</Hl>；M：化学式的摩尔质量；a：晶胞边长</>},
				{at: dn3.from, node: <>晶胞质量 = N·M / {NA}，体积 = a<sup>3</sup> → <Hl c={C.orange}>质量 ÷ 体积</Hl></>},
				{at: dn4.from, node: <>{chem('NaCl')}：N = 4，M = 58.5 → ρ = 4 × 58.5 / ({NA} · a<sup>3</sup>)</>},
			]}
		/>
	</Board>
);

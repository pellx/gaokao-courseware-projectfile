import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Items} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.coord;
const {co1, co1b, co2, co3, co4} = t.cue;

export const Coord: React.FC = () => (
	<Board
		t={t}
		tag="考点一"
		title="配位键"
		gap={24}
		callout={{label: '易错', at: co4.from, text: <>配位键也是 <Hl>σ 键</Hl>；形成后与其他共价键无区别：{chem('NH4^+')} 中 4 个 N—H <Hl>完全相同</Hl></>}}
		overlay={
			<AnimeBeat k="feed" from={co1b.from} to={co1b.to}>
				配位键像<span style={{color: C.red}}>喂饭</span>：{'\n'}一方递勺（孤电子对）{'\n'}一方张嘴（空轨道）
			</AnimeBeat>
		}
	>
		<Big at={co1.from} size={38}>
			一方提供<Hl>孤电子对</Hl>，一方提供<Hl c={C.orange}>空轨道</Hl>　→　配位键 A→B
		</Big>
		<Items
			size={34}
			gap={18}
			items={[
				{at: co2.from, node: <>{chem('NH3 + H^+ → NH4^+')}：N 的孤电子对给 {chem('H^+')} 的空轨道；{chem('H3O^+')} 同理</>},
				{at: co3.from, node: <>{chem('CuSO4')} 溶液天蓝色：<Hl>{chem('[Cu(H2O)4]^2+')}</Hl>（O 给孤电子对，{chem('Cu^2+')} 给空轨道）</>},
			]}
		/>
	</Board>
);

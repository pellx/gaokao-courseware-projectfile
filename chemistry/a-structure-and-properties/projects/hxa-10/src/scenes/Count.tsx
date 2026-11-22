import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Big, Board} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.count;
const {ct1, ct2, ct3, ct4, ct5, ct5b, ct6} = t.cue;
const n = (x: string) => <span>{x}</span>;

export const Count: React.FC = () => (
	<Board
		t={t}
		tag="考点二"
		title="价层电子对数的计算"
		callout={{label: '易错', at: ct6.from, text: <>离子的 a 要<Hl>加减电荷</Hl>；b 是“<Hl>8 − 价层电子数</Hl>”（O 为 2，Cl 为 1，H 为 1）</>}}
		overlay={
			<AnimeBeat k="ghost" from={ct5b.from} to={ct5b.to}>
				孤电子对像<span style={{color: C.red}}>小幽灵</span>：{'\n'}形状里看不见{'\n'}却照样<span style={{color: C.red}}>占地方</span>
			</AnimeBeat>
		}
	>
		<Big at={ct1.from} size={36}>
			价层电子对数 = <Hl>σ 键电子对数</Hl>（结合原子数）+ <Hl c={C.orange}>孤电子对数 ½(a − xb)</Hl>
		</Big>
		<Appear at={ct2.from} style={{fontSize: 28, fontWeight: 700, color: C.muted}}>
			a：中心原子价层电子数　x：结合原子数　b：结合原子最多能接受的电子数（H 为 1，其他为 8 − 价层电子数）
		</Appear>
		<Table
			head={['微粒', 'a', 'x', 'b', '孤电子对', '价层电子对']}
			cols="1.3fr 1.5fr 0.7fr 0.7fr 1.2fr 1.2fr"
			at={ct3.from}
			fontSize={32}
			rowHeight={62}
			rows={[
				{cells: [chem('SO2'), n('6'), n('2'), n('2'), <Hl>1</Hl>, n('3')], at: ct3.from},
				{cells: [chem('NH4^+'), <>5 <Hl>− 1</Hl> = 4</>, n('4'), n('1'), n('0'), n('4')], at: ct4.from},
				{cells: [chem('CO3^2-'), <>4 <Hl c={C.orange}>+ 2</Hl> = 6</>, n('3'), n('2'), n('0'), n('3')], at: ct4.from + 50},
				{cells: [chem('H3O^+'), <>6 <Hl>− 1</Hl> = 5</>, n('3'), n('1'), <Hl>1</Hl>, n('4')], at: ct5.from},
				{cells: [chem('SO4^2-'), <>6 <Hl c={C.orange}>+ 2</Hl> = 8</>, n('4'), n('2'), n('0'), n('4')], at: ct5.from + 40},
			]}
		/>
	</Board>
);

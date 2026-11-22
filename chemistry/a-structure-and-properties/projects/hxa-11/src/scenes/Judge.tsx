import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Big, Board} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.judge;
const {jd1, jd2, jd3, jd4} = t.cue;
const n = (x: string) => <span>{x}</span>;
const h = (k: number) => (k === 2 ? <Hl>sp</Hl> : k === 3 ? <Hl c={C.orange}>sp<sup>2</sup></Hl> : <Hl c={C.green}>sp<sup>3</sup></Hl>);

export const Judge: React.FC = () => (
	<Board
		t={t}
		tag="考点三"
		title="判断杂化方式"
		callout={{label: '解题方法', at: jd4.from, text: <>杂化轨道数 = <Hl>σ 键数 + 孤电子对数</Hl> = 价层电子对数</>}}
	>
		<Big at={jd1.from} size={38}>先算中心原子的<Hl>价层电子对数</Hl></Big>
		<Big at={jd2.from} size={38} color={C.orange} soft={C.orangeSoft}>2 对 → {h(2)}　　3 对 → {h(3)}　　4 对 → {h(4)}</Big>
		<Table
			head={['微粒', '价层电子对数', '杂化方式']}
			cols="1fr 1fr 1fr"
			at={jd3.from}
			fontSize={32}
			rowHeight={60}
			rows={[
				{cells: [chem('SO2'), n('3'), h(3)], at: jd3.from},
				{cells: [chem('SO4^2-'), n('4'), h(4)], at: jd3.from + 20},
				{cells: [chem('NO3^-'), n('3'), h(3)], at: jd3.from + 40},
				{cells: [chem('NH4^+'), n('4'), h(4)], at: jd3.from + 60},
			]}
		/>
	</Board>
);

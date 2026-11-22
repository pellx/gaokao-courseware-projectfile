import React from 'react';
import {Hl} from '../components/ui';
import {Table as Tb} from '../components/kit';
import {Board} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.table;
const {tb1, tb2, tb3, tb4} = t.cue;
const n = (x: string) => <span>{x}</span>;

export const Table: React.FC = () => (
	<Board
		t={t}
		tag="考点四"
		title="类型对照表"
		callout={{label: '解题方法', at: tb4.from, text: <>两步查表：电子对数 → <Hl>VSEPR 模型</Hl>；孤电子对数 → <Hl c={C.orange}>分子形状</Hl></>}}
	>
		<Tb
			head={['电子对数', 'VSEPR 模型', '孤电子对', '分子空间结构', '实例']}
			cols="1fr 1.4fr 1fr 1.4fr 2.6fr"
			at={tb1.from}
			fontSize={31}
			rowHeight={64}
			rows={[
				{cells: [n('2'), '直线形', n('0'), <Hl>直线形</Hl>, <>{chem('CO2')}、{chem('BeCl2')}</>], at: tb1.from},
				{cells: [n('3'), '平面三角形', n('0'), <Hl>平面三角形</Hl>, <>{chem('BF3')}、{chem('SO3')}、{chem('CO3^2-')}</>], at: tb2.from},
				{cells: [n('3'), '平面三角形', n('1'), <Hl c={C.orange}>V 形</Hl>, chem('SO2')], at: tb2.from + 40},
				{cells: [n('4'), '四面体形', n('0'), <Hl>正四面体形</Hl>, <>{chem('CH4')}、{chem('NH4^+')}、{chem('SO4^2-')}</>], at: tb3.from},
				{cells: [n('4'), '四面体形', n('1'), <Hl c={C.orange}>三角锥形</Hl>, <>{chem('NH3')}、{chem('H3O^+')}</>], at: tb3.from + 40},
				{cells: [n('4'), '四面体形', n('2'), <Hl c={C.green}>V 形</Hl>, chem('H2O')], at: tb3.from + 80},
			]}
		/>
	</Board>
);

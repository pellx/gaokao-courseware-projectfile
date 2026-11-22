import React from 'react';
import {Hl} from '../components/ui';
import {Board, Mark} from '../components/board';
import {T} from '../timeline';

const t = T.trap;
const {tp1, tp2, tp3, tp4, tp5} = t.cue;

export const Trap: React.FC = () => (
	<Board
		t={t}
		tag="考点八"
		title="易错辨析"
		gap={18}
		callout={{label: '答题模板', at: tp5.from, text: <>均摊求 N → 写出 M → 换算 a 的单位 → <Hl>ρ = NM / (N<sub>A</sub>·a<sup>3</sup>)</Hl>，每步写在卷面上</>}}
	>
		<Mark ok={false} at={tp1.from}>均摊系数用错：<Hl>棱 1/4、面 1/2</Hl>，别颠倒</Mark>
		<Mark ok={false} at={tp2.from}>N 与 M 不对应：N 数原子，M 却用化学式</Mark>
		<Mark ok={false} at={tp3.from}>棱长与对角线混淆：最近距离错用成边长 a</Mark>
		<Mark ok={false} at={tp4.from}>单位漏指数：pm → cm 是 10<sup>−10</sup>，立方后 <Hl>10<sup>−30</sup></Hl></Mark>
	</Board>
);

import React from 'react';
import {Hl} from '../components/ui';
import {Board, Rule} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.hyb;
const {hy1, hy2, hy3, hy4} = t.cue;

export const Hyb: React.FC = () => (
	<Board
		t={t}
		tag="考点四"
		title="杂化方式、空间结构与 σ、π 键计数"
		gap={20}
		callout={{label: '易错', at: hy4.from, text: <>有机物中<Hl>逐个碳</Hl>判断杂化；1 mol 物质的 σ 键数写成“数值 × N<sub>A</sub>”</>}}
	>
		<Rule tag="杂化" color={C.red} at={hy1.from} size={34}>价层电子对数 2 / 3 / 4 → <Hl>sp / sp<sup>2</sup> / sp<sup>3</sup></Hl></Rule>
		<Rule tag="空间结构" color={C.orange} at={hy2.from} size={34}>电子对数定 VSEPR 模型 → <Hl c={C.orange}>去掉孤电子对</Hl></Rule>
		<Rule tag="计数" color={C.green} at={hy3.from} size={34}>单 1σ；双 1σ1π；三 1σ2π；<Hl c={C.green}>配位键算 σ</Hl></Rule>
	</Board>
);

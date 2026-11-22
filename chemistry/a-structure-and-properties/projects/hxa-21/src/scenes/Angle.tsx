import React from 'react';
import {Hl} from '../components/ui';
import {Chain} from '../components/kit';
import {Board, Rule} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.angle;
const {an1, an2, an3, an4} = t.cue;

export const Angle: React.FC = () => (
	<Board
		t={t}
		tag="考点五"
		title="键角大小的规范解释"
		gap={20}
		callout={{label: '答题模板', at: an4.from, text: <>杂化方式 → 孤电子对数 → <Hl>排斥力比较</Hl> → 结论；“排斥力”是得分点</>}}
	>
		<Chain fontSize={36} gap={12} steps={[{label: '① 杂化', color: C.red, at: an1.from}, {label: '② 孤电子对', color: C.orange, at: an2.from}, {label: '③ 电负性', color: C.green, at: an3.from}]} />
		<Rule tag="①" color={C.red} at={an1.from} size={30}>杂化不同：<Hl>sp &gt; sp<sup>2</sup> &gt; sp<sup>3</sup></Hl></Rule>
		<Rule tag="②" color={C.orange} at={an2.from} size={30}>孤对–成键对排斥 &gt; 成键对–成键对排斥 → <Hl c={C.orange}>孤对越多键角越小</Hl></Rule>
		<Rule tag="③" color={C.green} at={an3.from} size={30}>中心原子电负性大 → 键角<Hl c={C.green}>大</Hl>；配位原子电负性大 → 键角<Hl>小</Hl></Rule>
	</Board>
);

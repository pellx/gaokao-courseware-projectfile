import React from 'react';
import {Hl} from '../components/ui';
import {Board, Rule} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.coord;
const {co1, co2, co3, co4} = t.cue;

export const Coord: React.FC = () => (
	<Board
		t={t}
		tag="考点七"
		title="配位设问"
		gap={20}
		callout={{label: '易错', at: co4.from, text: <>配位数数<Hl>配位原子</Hl>不数配体；内界离子<Hl>不电离</Hl></>}}
	>
		<Rule tag="配位原子" color={C.red} at={co1.from} size={34}>有孤电子对、<Hl>电负性较小</Hl>的原子</Rule>
		<Rule tag="成键" color={C.orange} at={co2.from} size={34}>中心离子给<Hl c={C.orange}>空轨道</Hl>，配体给孤电子对 → 配位键</Rule>
		<Rule tag="实验" color={C.green} at={co3.from} size={34}>用<Hl c={C.green}>配位平衡</Hl>解释颜色变化、沉淀溶解</Rule>
	</Board>
);

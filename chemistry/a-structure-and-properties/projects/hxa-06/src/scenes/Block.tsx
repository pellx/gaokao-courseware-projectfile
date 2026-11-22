import React from 'react';
import {Hl} from '../components/ui';
import {Board, Col, Row, Rule} from '../components/board';
import {ec, PTable} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.block;
const {bl1, bl2, bl3, bl4, bl5, bl6} = t.cue;
const range = (a: number, b: number) => Array.from({length: b - a + 1}, (_, i) => a + i);
const S = [1, 3, 4, 11, 12, 19, 20, 37, 38, 55, 56, 87, 88];
const P = [2, ...range(5, 10), ...range(13, 18), ...range(31, 36), ...range(49, 54), ...range(81, 86), ...range(113, 118)];
const D = [...range(21, 28), ...range(39, 46), ...range(72, 78), ...range(104, 110)];
const DS = [29, 30, 47, 48, 79, 80, 111, 112];
const F = [57, 89];

export const Block: React.FC = () => (
	<Board
		t={t}
		tag="考点四"
		title="s、p、d、ds、f 五个区"
		callout={{label: '易错', at: bl6.from, text: <>Cu、Zn 在 <Hl>ds 区</Hl>不在 d 区；s 区有氢，“s 区全是金属”<Hl>错</Hl></>}}
	>
		<Row gap={26}>
			<PTable
				at={bl1.from}
				cell={50}
				marks={[
					{zs: S, color: C.red, at: bl2.from},
					{zs: P, color: C.orange, at: bl3.from},
					{zs: D, color: C.green, at: bl4.from},
					{zs: DS, color: C.brown, at: bl4.from + 30},
					{zs: F, color: C.gold, at: bl5.from},
				]}
			/>
			<Col gap={10}>
				<Rule tag="s 区" color={C.red} at={bl2.from} size={26}>ⅠA、ⅡA：{ec('ns1')}～{ec('ns2')}</Rule>
				<Rule tag="p 区" color={C.orange} at={bl3.from} size={26}>ⅢA～0 族：{ec('ns2 np1')}～{ec('ns2 np6')}（He 也在 p 区）</Rule>
				<Rule tag="d 区" color={C.green} at={bl4.from} size={26}>ⅢB～Ⅷ：(n−1)d<sup>1～9</sup>ns<sup>1～2</sup></Rule>
				<Rule tag="ds 区" color={C.brown} at={bl4.from + 30} size={26}>ⅠB、ⅡB：(n−1)d<sup>10</sup>ns<sup>1～2</sup></Rule>
				<Rule tag="f 区" color={C.gold} at={bl5.from} size={26}>镧系、锕系；<Hl>d、ds、f 区全是金属</Hl></Rule>
			</Col>
		</Row>
	</Board>
);

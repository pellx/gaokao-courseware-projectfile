import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chart} from './Chart';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.result;
const {rs1, rs2, rs3, rs4} = t.cue;

export const Result: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">实验结果的分析</Header>
		<Appear at={rs1.from} style={{position: 'absolute', left: 70, top: 175}}>
			<Chart
				xLabel="浓度"
				yLabel="生根数"
				ticks={[[0, '0'], [0.45, '最适浓度'], [0.82, 'c']]}
				bands={[[0.82, 1, '抑制', C.red, rs3.from]]}
				lines={[
					['生根数', C.green, [[0, 0.3], [0.15, 0.5], [0.3, 0.75], [0.45, 0.85], [0.6, 0.75], [0.75, 0.45], [0.82, 0.3], [1, 0.12]], rs1.from, [0.62, 0.9]],
					['蒸馏水对照', C.orange, [[0, 0.3], [1, 0.3]], rs3.from, [0.2, 0.22], true],
				]}
			/>
		</Appear>
		<div style={{position: 'absolute', left: 950, right: 90, top: 200, display: 'flex', flexDirection: 'column', gap: 22, fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
			<Appear at={rs2.from}>最高点 → <Hl>最适浓度</Hl>；两侧有<Hl c={C.orange}>效果相同</Hl>的两个浓度</Appear>
			<Appear at={rs3.from}>
				高于对照 → <Hl c={C.green}>促进</Hl>；低于对照（c点以后）→ <Hl>抑制</Hl>
			</Appear>
		</div>
		<Appear at={rs4.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				判断促进还是抑制，要和<Hl>空白对照</Hl>比较，不能只看曲线上升还是下降
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

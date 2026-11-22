import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {Plot} from '../components/plot';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.curve;
const {cv1, cv2, cv3, cv4} = t.cue;
// y: 4n = 1, 2n = 0.5, n = 0.25. x: 间期 0–0.25, 减Ⅰ 0.25–0.6, 减Ⅱ 0.6–1.
const DNA: [number, number][] = [[0, 0.5], [0.06, 0.5], [0.2, 1], [0.6, 1], [0.6, 0.5], [0.95, 0.5], [0.95, 0.25], [1, 0.25]];
const CHR: [number, number][] = [[0, 0.5], [0.6, 0.5], [0.6, 0.25], [0.78, 0.25], [0.78, 0.5], [0.95, 0.5], [0.95, 0.25], [1, 0.25]];

export const Curve: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">染色体数与核 DNA 数的变化</Header>
		<div style={{position: 'absolute', left: 80, top: 160}}>
			<Plot
				id="meiosis"
				w={1000}
				h={540}
				at={cv1.from}
				xLabel="时期"
				yLabel="数量"
				yTicks={[[1, '4n'], [0.5, '2n'], [0.25, 'n']]}
				xTicks={[[0.12, '间期'], [0.42, '减数分裂Ⅰ'], [0.8, '减数分裂Ⅱ']]}
				curves={[
					{pts: DNA, color: C.red, at: cv1.from, dur: 120, label: '核 DNA', lx: 0.4, ly: 1.08},
					{pts: CHR, color: C.green, at: cv2.from, dur: 120, dash: true, label: '染色体', lx: 0.4, ly: 0.6},
				]}
				vrefs={[{x: 0.25, at: cv1.from}, {x: 0.6, at: cv1.from}]}
			/>
		</div>
		<Rows
			style={{left: 1140, right: 90, top: 190}}
			fontSize={29}
			gap={18}
			items={[
				{at: cv1.from, color: C.red, title: '间期', children: <>DNA 复制：2n → <Hl>4n</Hl>，染色体不变</>},
				{at: cv2.from, color: C.red, title: '减Ⅰ结束', children: <>染色体 2n → <Hl>n</Hl>，DNA 4n → 2n</>},
				{at: cv3.from, color: C.orange, title: '后期Ⅱ', children: <>染色体<Hl c={C.orange}>暂时恢复 2n</Hl></>},
				{at: cv3.from + 60, color: C.green, title: '减Ⅱ结束', children: <>染色体、DNA 都是 <Hl c={C.green}>n</Hl></>},
			]}
		/>
		<Tip at={cv4.from} top={730} label="解题方法" fontSize={32}>
			<Hl>斜线上升</Hl>＝DNA 复制；<Hl>竖直下降</Hl>＝细胞一分为二；染色体在后期Ⅱ<Hl>先升后降</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

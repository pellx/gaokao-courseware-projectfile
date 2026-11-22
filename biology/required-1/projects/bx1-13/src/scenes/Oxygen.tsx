import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Plot, sample} from '../components/plot';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.oxygen;
const {ox1, ox2, ox3, ox4} = t.cue;

const Title: React.FC<{at: number; x: number; children: React.ReactNode}> = ({at, x, children}) => (
	<Appear at={at} dy={0} style={{position: 'absolute', left: x, top: 160, fontSize: 32, fontWeight: 900}}>
		{children}
	</Appear>
);

export const Oxygen: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">O<sub>2</sub> 浓度对运输速率的影响</Header>
		<Title at={ox1.from} x={120}>自由扩散 / 协助扩散</Title>
		<div style={{position: 'absolute', left: 90, top: 210}}>
			<Plot id="passive" w={800} h={400} at={ox1.from} xLabel="氧气浓度" yLabel="运输速率" curves={[{pts: sample(() => 0.5), color: C.orange, at: ox1.from + 10, label: '与氧气浓度无关', lx: 0.55, ly: 0.62}]} />
		</div>
		<Title at={ox2.from} x={1030}>主动运输</Title>
		<div style={{position: 'absolute', left: 1000, top: 210}}>
			<Plot
				id="active"
				w={800}
				h={400}
				at={ox2.from}
				xLabel="氧气浓度"
				yLabel="运输速率"
				dots={[{x: 0, y: 0.2, color: C.red, at: ox2.from + 20, label: '无氧呼吸供能', dx: 110, dy: 8}]}
				curves={[{pts: sample((x) => 0.2 + 0.6 * (1 - Math.exp(-x * 5))), color: C.red, at: ox3.from, label: '受载体数量限制', lx: 0.65, ly: 0.92}]}
			/>
		</div>
		<Tip at={ox4.from} top={680} label="易错">
			起点<Hl>不在原点</Hl>（无氧呼吸供能）；哺乳动物<Hl>成熟红细胞</Hl>只进行无氧呼吸，速率与 O<sub>2</sub> 无关
		</Tip>
		<Narration t={t} />
	</Scene>
);

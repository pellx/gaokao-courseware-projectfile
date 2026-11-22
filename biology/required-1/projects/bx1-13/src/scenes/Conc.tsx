import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Plot, sample} from '../components/plot';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.conc;
const {cc1, cc2, cc3} = t.cue;

const Title: React.FC<{at: number; x: number; children: React.ReactNode}> = ({at, x, children}) => (
	<Appear at={at} dy={0} style={{position: 'absolute', left: x, top: 160, fontSize: 32, fontWeight: 900}}>
		{children}
	</Appear>
);

export const Conc: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">物质浓度对运输速率的影响</Header>
		<Title at={cc1.from} x={120}>自由扩散</Title>
		<div style={{position: 'absolute', left: 90, top: 210}}>
			<Plot id="free" w={800} h={400} at={cc1.from} xLabel="物质浓度" yLabel="运输速率" curves={[{pts: sample((x) => x * 0.9), color: C.orange, at: cc1.from + 10, label: '过原点的直线', lx: 0.62, ly: 0.72}]} />
		</div>
		<Title at={cc2.from} x={1030}>协助扩散 / 主动运输</Title>
		<div style={{position: 'absolute', left: 1000, top: 210}}>
			<Plot
				id="carrier"
				w={800}
				h={400}
				at={cc2.from}
				xLabel="物质浓度"
				yLabel="运输速率"
				hrefs={[{y: 0.75, label: '', color: C.red, at: cc2.from + 50}]}
				curves={[{pts: sample((x) => 0.75 * (1 - Math.exp(-x * 5))), color: C.red, at: cc2.from + 10, label: '受转运蛋白数量限制', lx: 0.6, ly: 0.86}]}
			/>
		</div>
		<Tip at={cc3.from} top={680} label="解题方法">
			直线 → <Hl>自由扩散</Hl>；有平台 → 受<Hl>转运蛋白数量</Hl>限制（主动运输还可能受能量限制）
		</Tip>
		<Narration t={t} />
	</Scene>
);

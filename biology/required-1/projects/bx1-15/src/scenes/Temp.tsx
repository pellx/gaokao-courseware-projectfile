import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Plot, sample} from '../components/plot';
import {Bullets, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.temp;
const {tm1, tm2, tm3} = t.cue;

// Slow rise to the optimum at x=0.55, steep fall to zero by x≈0.85.
const f = (x: number) => (x < 0.55 ? 0.05 + 0.85 * Math.pow(x / 0.55, 1.6) : Math.max(0, 0.9 * (1 - Math.pow((x - 0.55) / 0.3, 2))));

export const Temp: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">温度对酶活性的影响</Header>
		<div style={{position: 'absolute', left: 90, top: 170}}>
			<Plot
				id="temp"
				w={900}
				h={460}
				at={tm1.from}
				xLabel="温度"
				yLabel="酶活性"
				vrefs={[{x: 0.55, label: '最适温度', color: C.red, at: tm1.from + 40}]}
				hrefs={[{y: 0.5, label: '', color: C.orange, at: tm3.from}]}
				curves={[{pts: sample(f), color: C.red, at: tm1.from + 10}]}
				dots={[
					{x: 0.37, y: 0.5, color: C.green, at: tm3.from, label: '可恢复', dx: -60, dy: -10},
					{x: 0.75, y: 0.5, color: C.red, at: tm3.from, label: '部分失活', dx: 80, dy: -10},
				]}
			/>
		</div>
		<Bullets
			style={{left: 1060, right: 90, top: 210}}
			fontSize={32}
			gap={24}
			items={[
				{at: tm1.from, color: C.red, children: <>超过最适温度，活性<Hl>降低</Hl></>},
				{at: tm2.from, color: C.green, children: <>低温：活性低，<Hl c={C.green}>未失活</Hl></>},
				{at: tm2.from + 40, color: C.red, children: <>高温：<Hl>变性失活</Hl>，曲线降到零</>},
			]}
		/>
		<Tip at={tm3.from} top={680} label="解题方法">
			同一活性对应两个温度：<Hl>高温一侧已部分失活</Hl>，降回最适温度也不能恢复到最高；低温一侧可以恢复
		</Tip>
		<Narration t={t} />
	</Scene>
);

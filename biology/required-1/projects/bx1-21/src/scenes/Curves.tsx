import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Plot, sample} from '../components/plot';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.curves;
const {cv1, cv2, cv3, cv4} = t.cue;

// Summer day: two peaks with a midday dip; zero before dawn and after dusk.
const noon = (x: number) => (x < 0.12 || x > 0.88 ? 0.02 : 0.02 + 0.8 * Math.sin(((x - 0.12) / 0.76) * Math.PI) - 0.32 * Math.exp(-(((x - 0.5) / 0.08) ** 2)));
// Sealed chamber CO2: rises to a peak at x=0.25, falls to a minimum at x=0.75, rises again.
const sealed = (x: number) => 0.55 + 0.3 * Math.sin(((x - 0.25) / 0.5) * Math.PI + Math.PI / 2) - 0.05 * x;

const Title: React.FC<{at: number; x: number; children: React.ReactNode}> = ({at, x, children}) => (
	<Appear at={at} dy={0} style={{position: 'absolute', left: x, top: 155, fontSize: 31, fontWeight: 900}}>
		{children}
	</Appear>
);

export const Curves: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">“午休”现象与密闭容器一昼夜曲线</Header>
		<Title at={cv1.from} x={120}>夏季晴天光合速率</Title>
		<div style={{position: 'absolute', left: 90, top: 200}}>
			<Plot
				id="noon"
				w={820}
				h={430}
				at={cv1.from}
				xLabel="时间"
				yLabel="光合速率"
				xTicks={[[0.5, '12 时']]}
				curves={[{pts: sample(noon), color: C.orange, at: cv1.from + 10, label: '“午休”：气孔部分关闭', lx: 0.5, ly: 0.75}]}
			/>
		</div>
		<Title at={cv2.from} x={1030}>密闭容器中 CO<sub>2</sub> 浓度（一昼夜）</Title>
		<div style={{position: 'absolute', left: 1000, top: 200}}>
			<Plot
				id="sealed"
				w={830}
				h={430}
				at={cv2.from}
				xLabel="时间"
				yLabel="二氧化碳浓度"
				dots={[
					{x: 0.25, y: sealed(0.25), color: C.red, at: cv2.from + 40, label: '光合＝呼吸', dy: -24},
					{x: 0.75, y: sealed(0.75), color: C.red, at: cv2.from + 60, label: '光合＝呼吸', dy: 40},
				]}
				curves={[{pts: sample(sealed), color: C.red, at: cv2.from + 10}]}
			/>
		</div>
		<Tip at={cv4.from} top={680} label="解题方法">
			一昼夜<Hl>终点 CO<sub>2</sub> 浓度低于起点</Hl> → 有机物有积累，植物能生长
		</Tip>
		<Narration t={t} />
	</Scene>
);

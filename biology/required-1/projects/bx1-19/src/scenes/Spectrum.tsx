import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Plot, sample} from '../components/plot';
import {Bullets, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.spectrum;
const {sc1, sc2, sc3, sc4} = t.cue;

const g = (m: number, w: number, h: number) => (x: number) => h * Math.exp(-(((x - m) / w) ** 2));
const chl = (x: number) => 0.05 + g(0.14, 0.07, 0.8)(x) + g(0.86, 0.05, 0.65)(x);
const car = (x: number) => 0.04 + g(0.22, 0.1, 0.7)(x);

export const Spectrum: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">光合色素的吸收光谱</Header>
		<div style={{position: 'absolute', left: 90, top: 170}}>
			<Plot
				id="spec"
				w={900}
				h={460}
				at={sc1.from}
				xLabel="波长"
				yLabel="吸收光能的百分比"
				xTicks={[[0.15, '蓝紫光'], [0.5, '绿光'], [0.86, '红光']]}
				curves={[
					{pts: sample(chl), color: C.green, at: sc1.from + 10, label: '叶绿素', lx: 0.6, ly: 0.75},
					{pts: sample(car), color: C.orange, at: sc2.from, label: '类胡萝卜素', lx: 0.42, ly: 0.55},
				]}
			/>
		</div>
		<Bullets
			style={{left: 1060, right: 90, top: 210}}
			fontSize={32}
			gap={24}
			items={[
				{at: sc1.from, color: C.green, children: <>叶绿素：主要吸收<Hl>蓝紫光和红光</Hl></>},
				{at: sc2.from, color: C.orange, children: <>类胡萝卜素：主要吸收<Hl c={C.orange}>蓝紫光</Hl></>},
				{at: sc3.from, color: C.green, children: <>绿光吸收最少，被反射 → 叶片呈绿色</>},
			]}
		/>
		<Tip at={sc4.from} top={680} label="考法">
			温室补光选<Hl>红光或蓝紫光</Hl>；类胡萝卜素<Hl>不吸收红光</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Plot, sample} from '../components/plot';
import {Bullets, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.nitrite;
const {ni1, ni2, ni3, ni4, ni5} = t.cue;

// Relative amounts over the fermentation, 0–1 in both axes.
const bacteria = (x: number) => (0.78 / (1 + Math.exp(-16 * (x - 0.22)))) * (1 - 0.3 * Math.max(0, x - 0.55) / 0.45);
const acid = (x: number) => 0.92 / (1 + Math.exp(-9 * (x - 0.45))) - 0.016;
const nitrite = (x: number) => (x < 0.18 ? 0.06 + 0.5 * Math.exp(-(((x - 0.18) / 0.08) ** 2)) : 0.08 + 0.48 * Math.exp(-(((x - 0.18) / 0.2) ** 2)));

export const Nitrite: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">泡菜发酵中的含量变化</Header>
		<div style={{position: 'absolute', left: 90, top: 175}}>
			<Plot
				id="ni"
				w={1060}
				h={520}
				xLabel="发酵时间"
				yLabel="相对含量"
				at={ni1.from}
				curves={[
					{pts: sample(bacteria), color: C.green, at: ni1.from, dur: 50, label: '乳酸菌数量', lx: 0.58, ly: 0.9},
					{pts: sample(acid), color: C.orange, at: ni2.from, dur: 50, label: '乳酸', lx: 0.9, ly: 0.98},
					{pts: sample(nitrite), color: C.red, at: ni3.from, dur: 50, label: '亚硝酸盐', lx: 0.2, ly: 0.68},
				]}
				vrefs={[{x: 0.82, label: '适宜食用', color: C.green, at: ni4.from}]}
			/>
		</div>
		<Bullets
			style={{left: 1210, right: 90, top: 190}}
			fontSize={29}
			gap={18}
			items={[
				{at: ni1.from, color: C.green, children: <><Hl c={C.green}>乳酸菌</Hl>：先增加，后期受乳酸抑制</>},
				{at: ni2.from, color: C.orange, children: <><Hl c={C.orange}>乳酸</Hl>：不断增加，后趋于稳定</>},
				{at: ni3.from, color: C.red, children: <><Hl>亚硝酸盐</Hl>：先增后减（初期杂菌还原硝酸盐）</>},
				{at: ni4.from, color: C.red, children: <>亚硝酸盐可转变为<Hl>亚硝胺</Hl>（致癌）</>},
				{at: ni4.from + 20, color: C.green, children: <>亚硝酸盐含量<Hl c={C.green}>降低后</Hl>再食用</>},
			]}
		/>
		<Tip at={ni5.from} top={735} label="易错">
			亚硝酸盐最高时不是乳酸菌最多的时候；<Hl>腌制时间过短</Hl>的泡菜亚硝酸盐含量高，最不安全
		</Tip>
		<Narration t={t} />
	</Scene>
);

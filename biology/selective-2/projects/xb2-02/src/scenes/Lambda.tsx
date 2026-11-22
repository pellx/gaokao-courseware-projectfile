import React from 'react';
import {Appear, Callout, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {Plot, sample} from '../components/plot';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.lambda;
const {lb1, lb2, lb3, lb4, lb5} = t.cue;

// λ over time, plotted as λ / 2 so that λ = 1 sits at y = 0.5.
const lam = (x: number) => 1 + 0.75 * Math.cos(2.4 * Math.PI * x);
const A = 0.5 / 2.4;
const B = 1.5 / 2.4;

export const Lambda: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">λ 曲线的判读</Header>
		<div style={{position: 'absolute', left: 90, top: 180}}>
			<Plot
				id="lb"
				w={980}
				h={480}
				xLabel="时间"
				yLabel="λ"
				at={lb1.from}
				curves={[{pts: sample((x) => lam(x) / 2), color: C.orange, at: lb1.from, dur: 50}]}
				hrefs={[{y: 0.5, label: '1', color: C.text, at: lb2.from}]}
				vrefs={[
					{x: A, color: C.green, at: lb4.from},
					{x: B, color: C.red, at: lb4.from},
				]}
				dots={[
					{x: 0.1, y: lam(0.1) / 2, color: C.green, at: lb3.from, label: 'λ↓ 但 >1：仍增加', dx: 150, dy: -6},
					{x: A, y: 0.5, color: C.green, at: lb4.from, label: '数量最多', dx: -80, dy: 48},
					{x: B, y: 0.5, color: C.red, at: lb4.from, label: '数量最少', dx: -80, dy: -22},
				]}
			/>
		</div>
		<div style={{position: 'absolute', left: 1140, right: 90, top: 200}}>
			<Appear at={lb2.from}>
				<Card style={{fontSize: 32, fontWeight: 800, lineHeight: 1.8}}>
					<div><Hl c={C.green}>λ &gt; 1</Hl>：增加</div>
					<div><Hl c={C.orange}>λ = 1</Hl>：不变</div>
					<div><Hl>λ &lt; 1</Hl>：减少</div>
				</Card>
			</Appear>
			<Appear at={lb4.from} style={{marginTop: 24, fontSize: 27, fontWeight: 700, lineHeight: 1.5}}>
				最多：λ 由 &gt;1 降到 1<br />最少：λ 由 &lt;1 升到 1
			</Appear>
		</div>
		<Appear at={lb5.from} style={{position: 'absolute', left: 90, right: 90, top: 715}}>
			<Callout label="解题方法" style={{fontSize: 31}}>
				看 <Hl>λ 和 1 比大小</Hl>，不看 λ 升还是降
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

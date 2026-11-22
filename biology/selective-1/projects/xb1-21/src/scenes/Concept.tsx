import React from 'react';
import {Appear, Callout, Card, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.concept;
const {cp1, cp2, cp3, cp4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Concept: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">植物生长调节剂的概念与优点</Header>
		<Appear at={cp1.from} style={{position: 'absolute', left: 90, width: 1060, top: 185}}>
			<Card style={{fontSize: 33, lineHeight: 1.7}}>
				<Hl>人工合成</Hl>的，对植物生长、发育有<Hl>调节作用</Hl>的化学物质
			</Card>
		</Appear>
		<Appear at={cp1.from} style={{position: 'absolute', right: 90, top: 185, width: 560, height: 360}}>
			<Photo src="images/cuttings.jpg" caption="扦插的插条在苗床中生根" style={{width: '100%', height: '100%'}} />
		</Appear>
		<div style={{position: 'absolute', left: 90, width: 1060, top: 360, display: 'flex', gap: 18}}>
			{['原料广泛', '容易合成', '效果稳定'].map((s, i) => (
				<Appear key={s} at={at(cp2.from, cp2.to, 0.25 + i * 0.22)} style={{flex: 1}}>
					<div style={{border: `4px solid ${C.green}`, borderRadius: 18, padding: '16px 0', textAlign: 'center', fontSize: 34, fontWeight: 900, color: C.green, background: C.greenSoft}}>{s}</div>
				</Appear>
			))}
		</div>
		<Appear at={cp3.from} style={{position: 'absolute', left: 90, width: 1060, top: 480, fontSize: 30, fontWeight: 700}}>
			效果稳定：植物体内往往<Hl c={C.orange}>缺乏分解它的酶</Hl>，作用时间更长
		</Appear>
		<Appear at={cp4.from} style={{position: 'absolute', left: 90, right: 90, top: 620}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				调节剂<Hl>不属于植物激素</Hl>：植物体内产生 → 激素；人工合成 → 调节剂
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

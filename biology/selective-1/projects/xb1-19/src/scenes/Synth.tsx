import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.synth;
const {sy1, sy2, sy3} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Synth: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">生长素的合成</Header>
		<Appear at={sy1.from} style={{position: 'absolute', right: 90, top: 175, width: 620, height: 420}}>
			<Photo src="images/seedlings.jpg" caption="幼苗：芽和幼叶是主要合成部位" style={{width: '100%', height: '100%'}} pos="55% center" />
		</Appear>
		<div style={{position: 'absolute', left: 90, width: 1050, top: 190, display: 'flex', flexDirection: 'column', gap: 20}}>
			{['芽', '幼嫩的叶', '发育中的种子'].map((s, i) => (
				<Appear key={s} at={at(sy1.from, sy1.to, 0.4 + i * 0.18)} dx={-30} dy={0}>
					<div style={{display: 'inline-block', border: `5px solid ${C.green}`, borderRadius: 18, padding: '14px 36px', fontSize: 40, fontWeight: 900, color: C.green, background: C.greenSoft}}>{s}</div>
				</Appear>
			))}
		</div>
		<div style={{position: 'absolute', left: 90, top: 540}}>
			<Chain
				fontSize={34}
				gap={14}
				arrows={['一系列反应']}
				steps={[
					{label: '色氨酸', color: C.orange, at: sy2.from},
					{label: '生长素（IAA）', color: C.red, at: at(sy2.from, sy2.to, 0.5)},
				]}
			/>
		</div>
		<Appear at={sy3.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30, padding: '12px 24px'}}>
				生长素<Hl>不是蛋白质</Hl>；合成部位抓住“<Hl c={C.orange}>幼嫩</Hl>”“<Hl c={C.orange}>发育中</Hl>”
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

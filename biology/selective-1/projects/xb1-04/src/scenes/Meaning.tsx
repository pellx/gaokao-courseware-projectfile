import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.meaning;
const {mn1, mn2, mn3} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Meaning: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">条件反射的意义</Header>
		<div style={{position: 'absolute', left: 90, top: 200}}>
			<Chain
				fontSize={40}
				arrows={['学习和训练']}
				steps={[
					{label: '非条件反射', color: C.orange, at: mn1.from},
					{label: '条件反射', color: C.green, at: at(mn1.from, mn1.to, 0.5)},
				]}
			/>
		</div>
		<div style={{position: 'absolute', left: 90, right: 90, top: 360, display: 'flex', gap: 40}}>
			{['预见性', '灵活性', '适应性'].map((w, i) => (
				<Appear key={w} at={at(mn2.from, mn2.to, 0.15 + i * 0.12)} style={{flex: 1}}>
					<div style={{border: `5px solid ${C.green}`, background: C.greenSoft, borderRadius: 24, padding: '34px 0', textAlign: 'center', fontSize: 64, fontWeight: 900, color: C.green}}>
						更强的{w}
					</div>
				</Appear>
			))}
		</div>
		<Appear at={at(mn2.from, mn2.to, 0.6)} style={{position: 'absolute', left: 90, right: 90, top: 560, fontSize: 36, fontWeight: 700, textAlign: 'center'}}>
			大大提高动物<Hl c={C.green}>应对复杂环境变化</Hl>的能力
		</Appear>
		<Appear at={mn3.from} style={{position: 'absolute', left: 90, right: 90, top: 670}}>
			<Callout label="考法" style={{fontSize: 32}}>
				答题要点：使机体能识别<Hl c={C.orange}>刺激物的性质</Hl>，预先作出反应，提高<Hl c={C.green}>适应复杂环境变化</Hl>的能力
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

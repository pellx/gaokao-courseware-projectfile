import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.compare;
const {cp1, cp2, cp3, cp4, cp5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const o = (s: string) => <span style={{color: C.orange, fontWeight: 800}}>{s}</span>;
const g = (s: string) => <span style={{color: C.green, fontWeight: 800}}>{s}</span>;

export const Compare: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">两种调节的比较</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 180}}>
			<Table
				head={['比较项目', '神经调节', '体液调节']}
				cols="1fr 1.5fr 1.5fr"
				at={cp1.from}
				fontSize={34}
				rowHeight={84}
				rows={[
					{cells: ['作用途径', o('反射弧'), g('体液运输')], at: cp2.from},
					{cells: ['反应速度', o('迅速'), g('较缓慢')], at: cp3.from},
					{cells: ['作用范围', o('准确、比较局限'), g('较广泛')], at: cp4.from},
					{cells: ['作用时间', o('短暂'), g('比较长')], at: at(cp4.from, cp4.to, 0.6)},
				]}
			/>
		</div>
		<Appear at={cp5.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="考法" style={{fontSize: 30}}>
				“反应快、时间短” → <Hl c={C.orange}>神经调节</Hl>；“反应慢、范围广、时间长” → <Hl c={C.green}>体液调节</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

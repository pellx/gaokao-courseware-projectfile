import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.nature;
const {nt1, nt2, nt3, nt4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Nature: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">抗体的本质与分布</Header>
		<Appear at={nt1.from} style={{position: 'absolute', left: 90, top: 180, fontSize: 36, fontWeight: 900}}>
			抗体 = <Hl>蛋白质</Hl>（免疫球蛋白），属于<Hl c={C.orange}>分泌蛋白</Hl>
		</Appear>
		<div style={{position: 'absolute', left: 90, top: 270}}>
			<Chain
				fontSize={32}
				gap={12}
				arrows={['', '', '胞吐']}
				steps={[
					{label: '核糖体（合成）', color: C.orange, at: nt2.from},
					{label: '内质网', color: C.orange, at: at(nt2.from, nt2.to, 0.25)},
					{label: '高尔基体', color: C.orange, at: at(nt2.from, nt2.to, 0.35)},
					{label: '细胞外', color: C.green, at: at(nt2.from, nt2.to, 0.6)},
				]}
			/>
		</div>
		<Appear at={at(nt2.from, nt2.to, 0.8)} style={{position: 'absolute', left: 90, top: 380, fontSize: 30, fontWeight: 800, color: C.muted}}>
			全过程由<Hl c={C.red}>线粒体</Hl>供能
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 90, top: 460, display: 'flex', gap: 24}}>
			{['血清（主要）', '组织液', '外分泌液（如乳汁）'].map((s, i) => (
				<Appear key={s} at={at(nt3.from, nt3.to, 0.1 + i * 0.25)} style={{flex: 1}}>
					<div style={{border: `4px solid ${C.green}`, borderRadius: 18, padding: '16px 0', textAlign: 'center', fontSize: 32, fontWeight: 900, color: C.green, background: i ? '#fff' : C.greenSoft}}>{s}</div>
				</Appear>
			))}
		</div>
		<Appear at={nt4.from} style={{position: 'absolute', left: 90, right: 90, top: 620}}>
			<Callout label="考法" style={{fontSize: 30}}>
				浆细胞<Hl>内质网、高尔基体发达</Hl>；抗体在<Hl>细胞外</Hl>起作用 → 细胞内的病原体要靠<Hl c={C.green}>细胞免疫</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

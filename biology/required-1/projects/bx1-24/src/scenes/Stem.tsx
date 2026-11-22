import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tree} from '../components/kit';
import {Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.stem;
const {st1, st2, st3, st4} = t.cue;

export const Stem: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">干细胞</Header>
		<Def at={st1.from} style={{left: 90, right: 90, top: 160}} fontSize={32}>
			动物和人体内少数具有<Hl>分裂和分化能力</Hl>的细胞
		</Def>
		<div style={{position: 'absolute', left: 90, top: 270}}>
			<Tree
				width={1500}
				height={340}
				colWidth={420}
				boxWidth={360}
				boxHeight={80}
				fontSize={32}
				root={{
					label: '造血干细胞',
					note: '骨髓中',
					at: st3.from,
					color: C.orange,
					children: [
						{label: '红细胞', at: st3.from + 40, color: C.red},
						{label: '白细胞', at: st3.from + 50},
						{label: '血小板', at: st3.from + 60},
					],
				}}
			/>
		</div>
		<Def at={st2.from} style={{left: 1000, right: 90, top: 300}} fontSize={30} color={C.green} soft={C.greenSoft}>
			<Hl c={C.green}>胚胎干细胞</Hl>：可分化成各种组织和器官
		</Def>
		<Def at={st3.from + 80} style={{left: 1000, right: 90, top: 470}} fontSize={30}>
			造血干细胞移植：治疗<Hl c={C.orange}>白血病</Hl>
		</Def>
		<Tip at={st4.from} top={660} label="易错">
			造血干细胞分化出<Hl>各种血细胞</Hl>，没有发育成完整个体，<Hl c={C.orange}>不体现全能性</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

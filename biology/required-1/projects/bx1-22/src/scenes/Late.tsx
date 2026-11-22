import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Tip} from '../components/lib';
import {MitosisCell} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.late;
const {lt1, lt2, lt3} = t.cue;

const Note: React.FC<{x: number; title: string; lines: string[]}> = ({x, title, lines}) => (
	<g>
		<text x={x} y={320} fontSize={34} fontWeight={900} fill={C.red} textAnchor="middle">{title}</text>
		{lines.map((s, i) => (
			<text key={i} x={x} y={365 + i * 38} fontSize={27} fontWeight={800} fill={C.text} textAnchor="middle">{s}</text>
		))}
	</g>
);

export const Late: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">后期和末期（高等植物细胞）</Header>
		<svg width={1740} height={480} viewBox="0 0 1740 480" style={{position: 'absolute', left: 90, top: 160}}>
			<G at={lt1.from}>
				<MitosisCell cx={430} cy={150} stage="ana" w={340} h={250} />
				<Note x={430} title="后期" lines={['着丝粒分裂，单体分开', '染色体数目加倍，移向两极']} />
			</G>
			<G at={lt2.from}>
				<MitosisCell cx={1300} cy={150} stage="telo" w={340} h={250} />
				<Note x={1300} title="末期" lines={['核膜、核仁重现，纺锤体消失', '细胞板 → 新的细胞壁']} />
			</G>
		</svg>
		<Tip at={lt3.from} top={690} label="口诀">
			<Hl>膜仁消失显两体，形定数晰赤道齐，点裂数增均两极，两消两现重开始</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Tip} from '../components/lib';
import {MitosisCell} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.early;
const {ea1, ea2, ea3} = t.cue;

const Note: React.FC<{x: number; title: string; lines: string[]}> = ({x, title, lines}) => (
	<g>
		<text x={x} y={320} fontSize={34} fontWeight={900} fill={C.red} textAnchor="middle">{title}</text>
		{lines.map((s, i) => (
			<text key={i} x={x} y={365 + i * 38} fontSize={27} fontWeight={800} fill={C.text} textAnchor="middle">{s}</text>
		))}
	</g>
);

export const Early: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">前期和中期（高等植物细胞）</Header>
		<svg width={1740} height={480} viewBox="0 0 1740 480" style={{position: 'absolute', left: 90, top: 160}}>
			<G at={ea1.from}>
				<MitosisCell cx={430} cy={150} stage="pro" w={340} h={250} />
				<Note x={430} title="前期" lines={['出现染色体、纺锤体', '核膜、核仁消失']} />
			</G>
			<G at={ea2.from}>
				<MitosisCell cx={1300} cy={150} stage="meta" w={340} h={250} />
				<line x1={1300} y1={20} x2={1300} y2={280} stroke={C.green} strokeWidth={3} strokeDasharray="8 6" />
				<Note x={1300} title="中期" lines={['着丝粒排列在赤道板上', '形态稳定、数目清晰']} />
			</G>
		</svg>
		<Tip at={ea3.from} top={690} label="易错">
			<Hl>赤道板是假想的平面</Hl>，不是真实结构；末期出现的<Hl c={C.green}>细胞板</Hl>才是真实结构
		</Tip>
		<Narration t={t} />
	</Scene>
);

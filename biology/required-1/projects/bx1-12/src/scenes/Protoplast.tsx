import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Tip} from '../components/lib';
import {PlantCell} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.protoplast;
const {pp1, pp2, pp3, pp4} = t.cue;

export const Protoplast: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">原生质层相当于一层半透膜</Header>
		<svg width={760} height={470} viewBox="0 0 760 470" style={{position: 'absolute', left: 90, top: 165}}>
			<G at={pp1.from}>
				<PlantCell x={60} y={30} w={520} h={380} />
				<text x={320} y={230} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">液泡（细胞液）</text>
			</G>
			<G at={pp2.from}>
				<PlantCell x={60} y={30} w={520} h={380} hlLayer />
				<text x={320} y={230} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">液泡（细胞液）</text>
				<text x={600} y={100} fontSize={28} fontWeight={900} fill={C.green}>原生质层</text>
				<line x1={596} y1={92} x2={555} y2={70} stroke={C.green} strokeWidth={3} />
			</G>
			<G at={pp3.from}>
				<text x={320} y={455} fontSize={28} fontWeight={900} fill={C.brown} textAnchor="middle">细胞壁（全透性）</text>
			</G>
		</svg>
		<Bullets
			style={{left: 900, right: 90, top: 200}}
			fontSize={32}
			gap={24}
			items={[
				{at: pp1.from, color: C.orange, children: <>成熟植物细胞有<Hl c={C.orange}>中央大液泡</Hl></>},
				{at: pp2.from, color: C.green, children: <><Hl c={C.green}>原生质层</Hl> ＝ 细胞膜 ＋ 液泡膜 ＋ 两层膜之间的细胞质</>},
				{at: pp3.from, color: C.brown, children: <>细胞壁<Hl c={C.brown}>全透性</Hl>，伸缩性比原生质层<Hl>小</Hl></>},
			]}
		/>
		<Tip at={pp4.from} top={690} label="易错">
			原生质层<Hl>不含细胞液</Hl>，也不含细胞壁；起半透膜作用的是原生质层
		</Tip>
		<Narration t={t} />
	</Scene>
);

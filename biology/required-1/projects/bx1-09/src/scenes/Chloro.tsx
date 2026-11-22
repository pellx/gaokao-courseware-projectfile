import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Tip} from '../components/lib';
import {Chloro as Drawing} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.chloro;
const {cl1, cl2, cl3, cl4} = t.cue;

export const Chloro: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">叶绿体：光合作用的场所</Header>
		<svg width={800} height={420} viewBox="0 0 800 420" style={{position: 'absolute', left: 90, top: 170}}>
			<G at={cl1.from}>
				<Drawing cx={380} cy={200} rx={300} ry={150} />
			</G>
			<G at={cl2.from}>
				<text x={40} y={40} fontSize={28} fontWeight={800} fill={C.green}>双层膜</text>
				<line x1={110} y1={50} x2={160} y2={92} stroke={C.green} strokeWidth={3} />
				<text x={380} y={400} fontSize={28} fontWeight={800} fill={C.green} textAnchor="middle">基粒：类囊体堆叠而成</text>
				<text x={660} y={40} fontSize={28} fontWeight={800} fill={C.muted}>基质</text>
				<line x1={670} y1={50} x2={630} y2={150} stroke={C.muted} strokeWidth={3} />
			</G>
		</svg>
		<Bullets
			style={{left: 940, right: 90, top: 200}}
			fontSize={33}
			gap={24}
			items={[
				{at: cl1.from, color: C.green, children: <><Hl c={C.green}>光合作用的场所</Hl>（“养料制造车间”“能量转换站”）</>},
				{at: cl2.from, color: C.orange, children: <><Hl c={C.orange}>双层膜</Hl>；基粒由类囊体堆叠而成</>},
				{at: cl3.from, color: C.red, children: <>类囊体薄膜上有<Hl>光合色素</Hl>；含少量 DNA 和 RNA</>},
			]}
		/>
		<Tip at={cl4.from} top={660} label="易错">
			<Hl>植物细胞不一定有叶绿体</Hl>（根尖细胞）；能光合作用不一定有叶绿体（蓝细菌）
		</Tip>
		<Narration t={t} />
	</Scene>
);

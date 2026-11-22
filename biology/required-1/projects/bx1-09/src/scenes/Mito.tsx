import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Tip} from '../components/lib';
import {Mito as Drawing} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.mito;
const {mt1, mt2, mt3, mt4} = t.cue;

export const Mito: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">线粒体：有氧呼吸的主要场所</Header>
		<svg width={800} height={420} viewBox="0 0 800 420" style={{position: 'absolute', left: 90, top: 170}}>
			<G at={mt1.from}>
				<Drawing cx={380} cy={200} rx={300} ry={150} />
			</G>
			<G at={mt2.from}>
				<text x={60} y={40} fontSize={28} fontWeight={800} fill={C.orange}>外膜</text>
				<line x1={110} y1={50} x2={170} y2={92} stroke={C.orange} strokeWidth={3} />
				<text x={650} y={40} fontSize={28} fontWeight={800} fill={C.red}>内膜</text>
				<line x1={660} y1={50} x2={620} y2={110} stroke={C.red} strokeWidth={3} />
				<text x={380} y={400} fontSize={28} fontWeight={800} fill={C.red} textAnchor="middle">嵴：内膜向内折叠</text>
			</G>
		</svg>
		<Bullets
			style={{left: 940, right: 90, top: 200}}
			fontSize={33}
			gap={24}
			items={[
				{at: mt1.from, color: C.red, children: <><Hl>有氧呼吸的主要场所</Hl>（“动力车间”）</>},
				{at: mt2.from, color: C.orange, children: <><Hl c={C.orange}>双层膜</Hl>，内膜折叠成嵴，增大膜面积</>},
				{at: mt3.from, color: C.green, children: <>含少量 <Hl c={C.green}>DNA 和 RNA</Hl>，能合成部分蛋白质</>},
			]}
		/>
		<Tip at={mt4.from} top={660} label="易错">
			代谢旺盛的细胞（如心肌细胞）线粒体多；<Hl>线粒体不能直接分解葡萄糖</Hl>，进入的是丙酮酸
		</Tip>
		<Narration t={t} />
	</Scene>
);

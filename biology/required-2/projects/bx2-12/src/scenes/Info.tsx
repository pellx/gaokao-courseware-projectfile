import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Tip} from '../components/lib';
import {Duplex} from '../components/dna';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.info;
const {if1, if2, if3, if4} = t.cue;

export const Info: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">遗传信息蕴藏在碱基排列顺序中</Header>
		<svg width={1740} height={200} viewBox="0 0 1740 200" style={{position: 'absolute', left: 90, top: 170}}>
			<G at={if1.from}>
				<Duplex x={60} y={20} top="ATGCCGTAAGCT" bottom="TACGGCATTCGA" fontSize={30} />
				<Duplex x={680} y={20} top="ATGCAGTCAGCT" bottom="TACGTCAGTCGA" fontSize={30} hl={[4, 8]} />
				<text x={1300} y={70} fontSize={28} fontWeight={900} fill={C.orange}>排列顺序不同</text>
				<text x={1300} y={115} fontSize={28} fontWeight={900} fill={C.orange}>→ 遗传信息不同</text>
			</G>
		</svg>
		<Def at={if2.from} style={{left: 90, right: 90, top: 400}} fontSize={33}>
			排列顺序<Hl c={C.orange}>千变万化</Hl> → DNA 的<Hl c={C.orange}>多样性</Hl>；特定的排列顺序 → 每个 DNA 的<Hl c={C.orange}>特异性</Hl>
		</Def>
		<Def at={if3.from} style={{left: 90, right: 90, top: 510}} fontSize={33} color={C.green} soft={C.greenSoft}>
			DNA 的多样性和特异性是<Hl c={C.green}>生物体多样性和特异性</Hl>的物质基础
		</Def>
		<Tip at={if4.from} top={640} label="易错" fontSize={33}>
			遗传信息在<Hl>碱基排列顺序</Hl>中；脱氧核糖和磷酸交替排列是<Hl>固定的</Hl>，不储存信息
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.system;
const {sy1, sy2, sy3, sy4, sy5} = t.cue;

export const System: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">细胞的生物膜系统</Header>
		<Def at={sy1.from} style={{left: 90, right: 90, top: 165}} fontSize={34} color={C.red} soft={C.redSoft}>
			<Hl>细胞膜 ＋ 核膜 ＋ 细胞器膜</Hl> ＝ 生物膜系统（成分和结构相似，结构和功能紧密联系）
		</Def>
		<Rows
			style={{left: 90, right: 90, top: 300}}
			fontSize={30}
			gap={14}
			items={[
				{at: sy3.from, color: C.orange, children: <>使细胞具有相对稳定的内部环境；在物质运输、能量转化、信息传递中起决定性作用</>},
				{at: sy4.from, color: C.orange, children: <>广阔的膜面积为<Hl c={C.orange}>多种酶</Hl>提供附着位点</>},
				{at: sy4.from + 60, color: C.orange, children: <>把细胞器<Hl c={C.orange}>分隔开</Hl>，使多种化学反应同时进行而互不干扰</>},
			]}
		/>
		<Tip at={sy5.from} top={640} label="易错">
			生物膜系统指<Hl>细胞内</Hl>的膜（小肠黏膜、视网膜不是）；原核细胞<Hl>没有生物膜系统</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

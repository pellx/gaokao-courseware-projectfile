import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ligase;
const {li1, li2, li3, li4} = t.cue;

export const Ligase: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">DNA 连接酶</Header>
		<Def at={li1.from} fontSize={32} style={{left: 90, right: 90, top: 170}}>
			作用：将两个 DNA 片段之间的<Hl>磷酸二酯键</Hl>连接起来（“分子缝合针”）
		</Def>
		<div style={{position: 'absolute', left: 90, right: 90, top: 310}}>
			<Table
				head={['比较项目', 'E. coli DNA 连接酶', 'T4 DNA 连接酶']}
				cols="1fr 1.5fr 1.5fr"
				at={li2.from}
				fontSize={31}
				rowHeight={80}
				rows={[
					{cells: ['来源', '大肠杆菌', <>T4 噬菌体</>], at: li2.from},
					{cells: ['连接黏性末端', <Hl c={C.green}>能</Hl>, <Hl c={C.green}>能</Hl>], at: li2.from + 25},
					{cells: ['连接平末端', <Hl>不能</Hl>, <><Hl c={C.green}>能</Hl>（效率较低）</>], at: li3.from},
				]}
			/>
		</div>
		<Tip at={li4.from} top={650} label="易错">
			DNA 连接酶连接的是<Hl>两个 DNA 片段</Hl>；把单个脱氧核苷酸连到链上的是 <Hl>DNA 聚合酶</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

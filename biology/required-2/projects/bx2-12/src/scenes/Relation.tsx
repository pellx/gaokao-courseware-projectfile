import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.relation;
const {re1, re2, re3, re4} = t.cue;

export const Relation: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">脱氧核苷酸、基因、DNA、染色体的关系</Header>
		<Flow
			style={{left: 90, top: 185}}
			fontSize={40}
			arrows={[[undefined, '组成', '许多个', '主要载体']]}
			rows={[
				[
					{label: '脱氧核苷酸', note: '基本单位', at: re1.from, color: C.orange},
					{label: '基因', note: '有遗传效应的片段', at: re1.from + 40, color: C.red},
					{label: 'DNA', at: re2.from, color: C.brown},
					{label: '染色体', at: re3.from, color: C.green},
				],
			]}
		/>
		<Rows
			style={{left: 90, right: 90, top: 360}}
			fontSize={32}
			gap={18}
			items={[
				{at: re1.from, color: C.orange, children: <>每个基因含有成百上千个脱氧核苷酸</>},
				{at: re2.from, color: C.brown, children: <>每个 DNA 上有<Hl c={C.orange}>许多个基因</Hl></>},
				{at: re3.from, color: C.green, children: <>一条染色体上通常有 <Hl>1 个 DNA</Hl>，复制后有 <Hl>2 个 DNA</Hl>；基因在染色体上呈线性排列</>},
			]}
		/>
		<Tip at={re4.from} top={660} label="易错" fontSize={33}>
			染色体是 DNA 的<Hl>主要</Hl>载体（线粒体、叶绿体中的 DNA 不在染色体上）；原核细胞<Hl>没有染色体</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

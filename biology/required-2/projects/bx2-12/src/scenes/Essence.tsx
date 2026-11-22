import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.essence;
const {es1, es2, es3, es4} = t.cue;

export const Essence: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">基因的本质</Header>
		<Cards
			top={185}
			height={240}
			fontSize={36}
			titleSize={44}
			items={[
				{title: 'DNA 生物', color: C.red, at: es1.from, body: <>基因通常是<Hl>有遗传效应的 DNA 片段</Hl></>, note: '细胞生物、DNA 病毒'},
				{title: 'RNA 病毒', color: C.orange, at: es2.from, body: <>基因是有遗传效应的 <Hl c={C.orange}>RNA 片段</Hl></>, note: '如烟草花叶病毒、HIV'},
			]}
		/>
		<Def at={es3.from} style={{left: 90, right: 90, top: 460}} fontSize={34} color={C.green} soft={C.greenSoft}>
			基因是控制生物性状的<Hl c={C.green}>基本单位</Hl>，是遗传物质的<Hl c={C.green}>结构和功能单位</Hl>
		</Def>
		<Tip at={es4.from} top={600} label="易错" fontSize={34}>
			关键词是“<Hl>有遗传效应</Hl>”；“所有生物的基因都是 DNA 片段”✗
		</Tip>
		<Narration t={t} />
	</Scene>
);

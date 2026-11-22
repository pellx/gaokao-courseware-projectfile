import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Compare} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.genetic;
const {gm1, gm2, gm3} = t.cue;

export const Genetic: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">生物的遗传物质</Header>
		<Compare
			top={175}
			height={260}
			fontSize={33}
			cols={[
				{title: '细胞生物', color: C.red, at: gm1.from, lines: [{children: '真核生物、原核生物'}, {children: <>遗传物质：<Hl>DNA</Hl></>}]},
				{title: 'DNA 病毒', color: C.orange, at: gm2.from, lines: [{children: <>如 T<sub>2</sub> 噬菌体</>}, {children: <>遗传物质：<Hl c={C.orange}>DNA</Hl></>}]},
				{title: 'RNA 病毒', color: C.brown, at: gm2.from + 60, lines: [{children: 'HIV、烟草花叶病毒、新冠病毒'}, {children: <>遗传物质：<Hl c={C.brown}>RNA</Hl></>}]},
			]}
		/>
		<Tip at={gm3.from} top={490} label="易错">
			“细胞质中的遗传物质是 RNA”是错的：细胞生物的遗传物质<Hl>只有 DNA</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

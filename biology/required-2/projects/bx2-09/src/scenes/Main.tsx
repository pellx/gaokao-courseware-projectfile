import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.main;
const {mn1, mn3, mn4} = t.cue;

export const Main: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">DNA 是主要的遗传物质</Header>
		<Cards
			top={175}
			height={170}
			fontSize={32}
			titleSize={36}
			items={[
				{title: '烟草花叶病毒的蛋白质', color: C.orange, at: mn1.from, body: '感染烟草 → 不出现病斑'},
				{title: '烟草花叶病毒的 RNA', color: C.red, at: mn1.from + 60, body: <>感染烟草 → <Hl>出现病斑</Hl>（遗传物质是 <Hl>RNA</Hl>）</>},
			]}
		/>
		<div style={{position: 'absolute', left: 90, right: 90, top: 380}}>
			<Table
				at={mn3.from}
				cols="1fr 1fr 1fr"
				fontSize={32}
				rowHeight={70}
				head={['生物', '所含核酸', '遗传物质']}
				rows={[
					{at: mn3.from, cells: ['细胞生物（真核、原核）', 'DNA 和 RNA', <Hl>DNA</Hl>]},
					{at: mn3.from + 30, cells: ['DNA 病毒', 'DNA', <Hl>DNA</Hl>]},
					{at: mn3.from + 60, cells: ['RNA 病毒', 'RNA', <Hl c={C.orange}>RNA</Hl>]},
				]}
			/>
		</div>
		<Tip at={mn4.from} top={690} label="易错" fontSize={32}>
			“主要”是对<Hl>所有生物</Hl>而言；某一种生物的遗传物质<Hl>只有一种</Hl>，细胞生物的遗传物质就是 DNA
		</Tip>
		<Narration t={t} />
	</Scene>
);

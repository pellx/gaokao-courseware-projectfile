import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.hershey;
const {hs1, hs2, hs3, hs4} = t.cue;
void hs3;

export const Hershey: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">噬菌体侵染细菌的实验</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				at={hs1.from}
				cols="300px 1fr 1fr"
				fontSize={31}
				rowHeight={78}
				head={['标记', '离心后放射性', '子代噬菌体']}
				rows={[
					{at: hs1.from, cells: ['^[35]S 标记蛋白质', <Hl c={C.orange}>主要在上清液</Hl>, '不含 ^[35]S']},
					{at: hs1.from + 60, cells: ['^[32]P 标记 DNA', <Hl>主要在沉淀物</Hl>, '部分含 ^[32]P']},
				]}
			/>
		</div>
		<Def at={hs2.from} style={{left: 90, right: 90, top: 420}} fontSize={30}>
			<Hl c={C.orange}>搅拌</Hl>：使吸附在细菌上的噬菌体外壳与细菌分离；<Hl c={C.orange}>离心</Hl>：较轻的噬菌体在上清液，细菌在沉淀物
		</Def>
		<Def at={hs4.from} style={{left: 90, right: 90, top: 560}} color={C.red} soft={C.redSoft} fontSize={34}>
			结论：<Hl>DNA 是噬菌体的遗传物质</Hl>
		</Def>
		<Tip at={hs4.from + 60} top={690} label="易错" fontSize={32}>
			不能用 C、H、O、N 标记（两种物质都含有）；<sup>35</sup>S、<sup>32</sup>P <Hl>分别标记、分开实验</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

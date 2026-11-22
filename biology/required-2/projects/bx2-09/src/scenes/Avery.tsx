import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.avery;
const {av1, av2, av3, av4} = t.cue;

export const Avery: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">艾弗里的体外转化实验</Header>
		<div style={{position: 'absolute', left: 240, right: 240, top: 175}}>
			<Table
				at={av1.from}
				cols="1fr 1fr 1fr"
				fontSize={32}
				rowHeight={72}
				head={['S 型菌提取物', '＋ R 型活菌培养', '结果']}
				rows={[
					{at: av2.from, cells: ['不处理', '混合培养', 'R 型 ＋ S 型']},
					{at: av2.from + 25, cells: ['＋ 蛋白酶', '混合培养', 'R 型 ＋ S 型']},
					{at: av2.from + 50, cells: ['＋ RNA 酶', '混合培养', 'R 型 ＋ S 型']},
					{at: av2.from + 75, cells: ['＋ 酯酶', '混合培养', 'R 型 ＋ S 型']},
					{at: av3.from, key: true, cells: [<Hl>＋ DNA 酶</Hl>, '混合培养', <Hl>只有 R 型</Hl>]},
				]}
			/>
		</div>
		<Def at={av4.from} style={{left: 90, right: 90, top: 640}} color={C.red} soft={C.redSoft} fontSize={36}>
			结论：<Hl>DNA 才是使 R 型细菌产生稳定遗传变化的物质</Hl>
		</Def>
		<Narration t={t} />
	</Scene>
);

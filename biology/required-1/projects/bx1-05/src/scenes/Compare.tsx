import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.compare;
const {cm1, cm2, cm3, cm4} = t.cue;

export const Compare: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">糖类与脂肪的比较</Header>
		<Appear at={cm1.from} style={{position: 'absolute', left: 90, right: 90, top: 165}}>
			<Table
				at={cm1.from}
				cols="340px 1fr 1fr"
				fontSize={32}
				rowHeight={68}
				head={['比较项目', '糖类', '脂肪']}
				rows={[
					{at: cm1.from, cells: ['元素组成', 'C、H、O', 'C、H、O']},
					{at: cm1.from + 40, cells: ['H 的含量', '少', <Hl>多</Hl>]},
					{at: cm1.from + 70, cells: ['O 的含量', <Hl c={C.orange}>多</Hl>, '少']},
					{at: cm2.from, cells: ['等质量氧化分解耗氧', '少', <Hl>多</Hl>]},
					{at: cm2.from + 40, cells: ['释放能量 / 产生水', '少', <Hl>多</Hl>]},
					{at: cm3.from, cells: ['功能', <Hl c={C.orange}>主要的能源物质</Hl>, <Hl>良好的储能物质</Hl>]},
				]}
			/>
		</Appear>
		<Tip at={cm4.from} top={690} label="解题方法">
			抓住<Hl>“脂肪含 H 多、含 O 少”</Hl>：耗氧多、放能多 → 油料种子萌发时需氧更多，宜浅播
		</Tip>
		<Narration t={t} />
	</Scene>
);

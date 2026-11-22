import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.rediscover;
const {rd1, rd2, rd3, rd4} = t.cue;

export const Rediscover: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">孟德尔遗传规律的再发现</Header>
		<Flow
			style={{left: 90, top: 170}}
			fontSize={34}
			rows={[
				[
					{label: '1866 年', note: '孟德尔发表论文', at: rd1.from},
					{label: '1900 年', note: '三位科学家重新发现', at: rd1.from + 60, color: C.orange},
					{label: '1909 年 约翰逊', note: '提出“基因”、表型、基因型', at: rd2.from, color: C.red},
				],
			]}
		/>
		<div style={{position: 'absolute', left: 90, right: 90, top: 330}}>
			<Table
				at={rd3.from}
				cols="240px 1fr"
				fontSize={31}
				rowHeight={76}
				head={['概念', '含义']}
				rows={[
					{at: rd3.from, cells: ['表型', '生物个体表现出来的性状（如高茎）']},
					{at: rd3.from + 40, cells: ['基因型', '与表型有关的基因组成（如 DD、Dd）']},
					{at: rd3.from + 80, cells: ['等位基因', <>控制<Hl>相对性状</Hl>的基因（如 D 和 d）</>]},
				]}
			/>
		</div>
		<Tip at={rd4.from} top={680} label="易错" fontSize={32}>
			表型 ＝ <Hl>基因型 ＋ 环境</Hl>，基因型相同表型不一定相同；D 和 D 是<Hl>相同基因</Hl>，不是等位基因
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.method;
const {me1, me2, me3, me4, me5} = t.cue;

export const Method: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">答题方法：辩证分析</Header>
		<Cards
			top={185}
			height={300}
			titleSize={40}
			fontSize={32}
			gap={20}
			items={[
				{title: '① 态度', color: C.orange, at: me1.from, body: '如“支持在严格监管下推广”'},
				{title: '② 好处', color: C.green, at: me2.from, body: '提高产量、减少农药使用、改善品质'},
				{title: '③ 风险', color: C.red, at: me3.from, body: '从食物安全、生物安全、环境安全中选一两点'},
				{title: '④ 措施', color: C.brown, at: me4.from, body: '安全评价、标识管理、设置隔离带、目的基因导入叶绿体'},
			]}
		/>
		<Tip at={me5.from} top={560} label="解题方法">
			论述题四步走：<Hl>态度 → 好处 → 风险 → 措施</Hl>，有理有据，不跑偏
		</Tip>
		<Narration t={t} />
	</Scene>
);

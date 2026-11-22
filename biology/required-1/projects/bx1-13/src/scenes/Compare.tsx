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
		<Header tag="考点三">三种跨膜运输方式的比较</Header>
		<Appear at={cm1.from} style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				at={cm1.from}
				cols="260px 1fr 1fr 1fr"
				fontSize={32}
				rowHeight={84}
				head={['方式', '运输方向', '转运蛋白', '能量']}
				rows={[
					{at: cm1.from, cells: ['自由扩散', '高 → 低', '不需要', '不消耗']},
					{at: cm2.from, cells: ['协助扩散', '高 → 低', <Hl c={C.orange}>需要</Hl>, '不消耗']},
					{at: cm3.from, cells: ['主动运输', <Hl>低 → 高</Hl>, <Hl>需要（载体蛋白）</Hl>, <Hl>消耗</Hl>]},
				]}
			/>
		</Appear>
		<Tip at={cm4.from} top={560} label="解题方法">
			三问：<Hl>方向如何？要不要转运蛋白？耗不耗能？</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

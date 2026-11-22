import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib';
import {F} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.disk;
const {dk1, dk2, dk3, dk4} = t.cue;

export const Disk: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">探究光照强度对光合作用强度的影响</Header>
		<Flow
			style={{left: 90, top: 190}}
			fontSize={33}
			rowGap={40}
			rows={[
				[
					{label: '打出圆形小叶片', at: dk1.from},
					{label: '抽出叶内气体', note: '叶片沉到水底', color: C.red, at: dk1.from + 40},
					{label: <>放入富含 <F>CO2</F> 的清水</>, color: C.orange, at: dk2.from},
				],
				[
					{label: '不同强度光照', note: '调节光源距离', color: C.orange, at: dk2.from + 40},
					{label: <>光合作用产生 <F>O2</F></>, at: dk3.from},
					{label: '叶片上浮', note: '浮起越多越快 → 光合越强', color: C.green, at: dk3.from + 30},
				],
			]}
		/>
		<Tip at={dk4.from} top={560} label="解题方法">
			自变量：<Hl>光照强度</Hl>；因变量：<Hl c={C.orange}>叶片上浮的数量或时间</Hl>；抽气是为了排除原有气体的干扰
		</Tip>
		<Narration t={t} />
	</Scene>
);

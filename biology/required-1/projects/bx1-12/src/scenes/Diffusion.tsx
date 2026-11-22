import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.diffusion;
const {df1, df2, df3, df4} = t.cue;

export const Diffusion: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">被动运输：自由扩散与协助扩散</Header>
		<Appear at={df1.from} style={{position: 'absolute', left: 90, top: 155, fontSize: 31, fontWeight: 700, color: C.muted}}>
			被动运输：顺浓度梯度，<Hl>不消耗细胞内化学反应释放的能量</Hl>
		</Appear>
		<Appear at={df2.from} style={{position: 'absolute', left: 90, right: 90, top: 225}}>
			<Table
				at={df2.from}
				cols="260px 1fr 1fr"
				fontSize={32}
				rowHeight={80}
				head={['比较项目', '自由扩散', '协助扩散']}
				rows={[
					{at: df2.from, cells: ['运输方向', '高浓度 → 低浓度', '高浓度 → 低浓度']},
					{at: df3.from, cells: ['转运蛋白', <Hl>不需要</Hl>, <Hl>需要</Hl>]},
					{at: df3.from + 30, cells: ['能量', '不消耗', '不消耗']},
					{at: df3.from + 60, cells: ['实例', 'O2、CO2、甘油、乙醇、苯', '葡萄糖进入红细胞；水（水通道蛋白）']},
				]}
			/>
		</Appear>
		<Tip at={df4.from} top={650} label="解题方法">
			都是<Hl>顺浓度梯度、不耗能</Hl>；区别只看<Hl>是否需要转运蛋白</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

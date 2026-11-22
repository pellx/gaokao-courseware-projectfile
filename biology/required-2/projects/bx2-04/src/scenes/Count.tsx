import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.count;
const {co1, co2, co3, co4} = t.cue;

export const Count: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">种类与比例的计算</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Table
				at={co1.from}
				cols="300px 1fr 1fr"
				fontSize={32}
				rowHeight={90}
				head={['所求', '方法', '例']}
				rows={[
					{at: co1.from, cells: ['配子种类', <>2<sup>n</sup>（n ＝ 杂合基因对数）</>, <>AaBbCc：<Hl>8 种</Hl></>]},
					{at: co2.from, cells: ['某配子比例', '各对配子比例相乘', <>ABC ＝ <Hl c={C.orange}>1/8</Hl></>]},
					{at: co3.from, cells: ['子代基因型种类', '各对种类相乘', <>3 × 3 × 2 ＝ <Hl>18 种</Hl></>]},
					{at: co3.from + 60, cells: ['子代表型种类', '各对种类相乘', <>2 × 2 × 2 ＝ <Hl>8 种</Hl></>]},
				]}
			/>
			<div style={{fontSize: 26, color: C.muted, fontWeight: 700, marginTop: 10}}>后两行：AaBbCc × AaBbcc</div>
		</div>
		<Tip at={co4.from} top={680} label="易错" fontSize={34}>
			2<sup>n</sup> 的 n 只数<Hl>杂合</Hl>的对数；纯合的一对只产生一种配子：AaBbcc 只有 <Hl>4 种</Hl>配子
		</Tip>
		<Narration t={t} />
	</Scene>
);

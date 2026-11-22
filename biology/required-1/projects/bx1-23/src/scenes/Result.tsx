import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.result;
const {rs1, rs2, rs3} = t.cue;

export const Result: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">实验结果分析</Header>
		<Cards
			top={175}
			height={240}
			fontSize={33}
			titleSize={40}
			items={[
				{title: '间期细胞最多', color: C.orange, at: rs1.from, body: <>间期在细胞周期中<Hl c={C.orange}>占时最长</Hl></>},
				{title: '看不到连续分裂', color: C.red, at: rs2.from, body: <>解离后细胞<Hl>已死亡</Hl>，只能找处于不同时期的细胞</>},
			]}
		/>
		<Def at={rs3.from} style={{left: 90, right: 90, top: 460}} fontSize={33}>
			某时期细胞数 ÷ 细胞总数 ＝ 该时期时长 ÷ 细胞周期时长
		</Def>
		<Tip at={rs3.from + 40} top={590} label="解题方法">
			用<Hl>细胞数目的比例</Hl>估算各时期的<Hl>时长</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

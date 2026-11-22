import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tree} from '../components/kit';
import {Bullets, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.compound;
const {cp1, cp2, cp3, cp4} = t.cue;

export const Compound: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">细胞中的化合物</Header>
		<div style={{position: 'absolute', left: 90, top: 170}}>
			<Tree
				width={1000}
				height={500}
				colWidth={350}
				boxWidth={280}
				boxHeight={70}
				fontSize={34}
				root={{
					label: '化合物',
					at: cp1.from,
					children: [
						{label: '无机化合物', at: cp1.from, color: C.orange, children: [{label: '水', at: cp1.from, color: C.red}, {label: '无机盐', at: cp1.from}]},
						{
							label: '有机化合物',
							at: cp1.from + 60,
							color: C.orange,
							children: [
								{label: '糖类', at: cp1.from + 60},
								{label: '脂质', at: cp1.from + 60},
								{label: '蛋白质', at: cp1.from + 60, color: C.red},
								{label: '核酸', at: cp1.from + 60},
							],
						},
					],
				}}
			/>
		</div>
		<Bullets
			style={{left: 1160, right: 90, top: 260}}
			fontSize={36}
			gap={30}
			items={[
				{at: cp2.from, color: C.red, children: <>含量最多的化合物：<Hl>水</Hl></>},
				{at: cp3.from, color: C.red, children: <>含量最多的有机物：<Hl>蛋白质</Hl></>},
				{at: cp3.from + 60, color: C.orange, children: <>占干重最多的化合物：<Hl c={C.orange}>蛋白质</Hl></>},
			]}
		/>
		<Tip at={cp4.from} top={710} label="易错">
			问“化合物”答<Hl>水</Hl>，问“有机物”答<Hl>蛋白质</Hl>；问“元素”先分清鲜重还是干重
		</Tip>
		<Narration t={t} />
	</Scene>
);

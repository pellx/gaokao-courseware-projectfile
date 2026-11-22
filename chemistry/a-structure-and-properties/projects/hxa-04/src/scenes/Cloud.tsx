import React from 'react';
import {Hl} from '../components/ui';
import {G} from '../components/kit';
import {Board, Col, Items, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.cloud;
const {cl1, cl1b, cl2, cl3, cl3b, cl4, cl5} = t.cue;

// 1s 电子云：确定的伪随机点，越靠近核越密。
const rnd = (i: number) => {
	const x = Math.sin(i * 12.9898) * 43758.5453;
	return x - Math.floor(x);
};
const DOTS = Array.from({length: 900}, (_, i) => {
	const r = Math.pow(rnd(i), 1.8) * 190;
	const a = rnd(i + 999) * Math.PI * 2;
	return [220 + r * Math.cos(a), 220 + r * Math.sin(a)];
});

const CloudPic: React.FC = () => (
	<svg width={440} height={440} viewBox="0 0 440 440">
		<G at={cl2.from}>
			{DOTS.map(([x, y], i) => (
				<circle key={i} cx={x} cy={y} r={2.6} fill={C.text} opacity={0.75} />
			))}
		</G>
		<G at={cl4.from}>
			<circle cx={220} cy={220} r={150} fill="none" stroke={C.red} strokeWidth={5} strokeDasharray="12 8" />
			<text x={220} y={425} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle">轮廓：约 90% 概率</text>
		</G>
		<circle cx={220} cy={220} r={7} fill={C.red} />
	</svg>
);

export const Cloud: React.FC = () => (
	<Board
		t={t}
		tag="考点四"
		title="电子云"
		callout={{label: '易错', at: cl5.from, text: <>点越密 = 电子出现的<Hl>概率越大</Hl>，不是电子越多；电子云<Hl>不是</Hl>运动轨迹</>}}
		overlay={
			<AnimeBeat k="clones" from={cl3b.from} to={cl3b.to}>
				许多身影 = <span style={{color: C.red}}>同一个人</span>{'\n'}待过的不同位置{'\n'}越常去的地方越密
			</AnimeBeat>
		}
	>
		<Row gap={40} align="center">
			<CloudPic />
			<Col>
				<Items
					size={32}
					gap={16}
					items={[
						{at: cl1.from, node: <>电子运动<Hl>没有确定轨迹</Hl>，只能说出现的概率</>},
						{at: cl1b.from, node: <>模型演变：道尔顿 → 汤姆孙 → 卢瑟福 → 玻尔 → <Hl>电子云</Hl></>},
						{at: cl2.from, node: <>小黑点疏密表示<Hl>概率密度</Hl> → 电子云</>},
						{at: cl3.from, node: <>一个小黑点<Hl>≠ 一个电子</Hl></>},
						{at: cl4.from, node: <>圈出约 90% 的区域 → <Hl c={C.orange}>电子云轮廓图</Hl>（原子轨道）</>},
					]}
				/>
			</Col>
		</Row>
	</Board>
);

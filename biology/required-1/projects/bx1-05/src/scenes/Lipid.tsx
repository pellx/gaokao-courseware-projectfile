import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Tree} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.lipid;
const {lp1, lp2, lp3, lp4, lp5} = t.cue;

const TOP = 160;
const H = 470;
const STEP = H / 5;
const FUNCS: {at: number; text: React.ReactNode}[] = [
	{at: lp2.from, text: <>细胞内<Hl>良好的储能物质</Hl>；保温、缓冲和减压</>},
	{at: lp3.from, text: <>构成<Hl>细胞膜</Hl>和多种细胞器膜的重要成分</>},
	{at: lp4.from, text: <>构成<Hl c={C.orange}>动物细胞膜</Hl>；参与血液中脂质的运输</>},
	{at: lp4.from + 40, text: <>促进生殖器官的发育和生殖细胞的形成</>},
	{at: lp4.from + 80, text: <>促进肠道对<Hl c={C.orange}>钙和磷</Hl>的吸收</>},
];

export const Lipid: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">脂质的种类与功能</Header>
		<div style={{position: 'absolute', left: 90, top: TOP}}>
			<Tree
				width={800}
				height={H}
				colWidth={270}
				boxWidth={220}
				boxHeight={72}
				fontSize={33}
				root={{
					label: '脂质',
					at: lp1.from,
					color: C.brown,
					children: [
						{label: '脂肪', at: lp2.from, color: C.red},
						{label: '磷脂', at: lp3.from, color: C.red},
						{
							label: '固醇',
							at: lp4.from,
							color: C.orange,
							children: [
								{label: '胆固醇', at: lp4.from},
								{label: '性激素', at: lp4.from + 40},
								{label: '维生素D', at: lp4.from + 80},
							],
						},
					],
				}}
			/>
		</div>
		{FUNCS.map((f, i) => (
			<Appear key={i} at={f.at} dx={-20} dy={0} style={{position: 'absolute', left: 900, top: TOP + STEP * (i + 0.5) - 24, fontSize: 31, fontWeight: 700}}>
				{f.text}
			</Appear>
		))}
		<Tip at={lp5.from} top={680} label="易错">
			<Hl>性激素属于固醇</Hl>，不是蛋白质；所有细胞都含磷脂（都有细胞膜）
		</Tip>
		<Narration t={t} />
	</Scene>
);

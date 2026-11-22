import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.calc1;
const {ca1, ca2, ca3, ca4, ca5} = t.cue;

export const Calc1: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">计算：肽键数与相对分子质量</Header>
		<Rows
			style={{left: 90, right: 90, top: 170}}
			fontSize={33}
			gap={18}
			items={[
				{at: ca1.from, color: C.red, title: '链状', children: <>肽键数 ＝ 脱去水分子数 ＝ <Hl>n − m</Hl>（n 个氨基酸，m 条肽链）</>},
				{at: ca2.from, color: C.orange, title: '环状', children: <>肽键数 ＝ 脱去水分子数 ＝ <Hl c={C.orange}>n</Hl></>},
				{at: ca3.from, color: C.green, title: '分子量', children: <>蛋白质相对分子质量 ＝ <Hl>n × a − (n − m) × 18</Hl>（a 为氨基酸平均相对分子质量）</>},
			]}
		/>
		<Def at={ca4.from} style={{left: 90, right: 90, top: 470}} fontSize={34}>
			例：n ＝ 100，m ＝ 2，a ＝ 128 → 100 × 128 − <Hl>98</Hl> × 18 ＝ <Hl>11036</Hl>
		</Def>
		<Tip at={ca5.from} top={610} label="易错">
			减的是<Hl>脱去的水分子数</Hl>（98），不是氨基酸数；每形成一个<Hl c={C.orange}>二硫键</Hl>再减 2
		</Tip>
		<Narration t={t} />
	</Scene>
);

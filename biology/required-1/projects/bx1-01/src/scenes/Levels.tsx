import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Bullets, Flow, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.levels;
const {lv1, lv2, lv3, lv4, lv5} = t.cue;

const LEVELS = ['细胞', '组织', '器官', '系统', '个体', '种群', '群落', '生态系统', '生物圈'];
const color = (s: string) => (s === '细胞' || s === '生物圈' ? C.red : s === '系统' ? C.orange : undefined);
const step = (s: string, i: number) => ({label: s, color: color(s), at: lv1.from + i * 14});

export const Levels: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">生命系统的结构层次</Header>
		<Flow style={{left: 90, top: 180}} fontSize={46} rowGap={26} rows={[LEVELS.slice(0, 5).map(step), LEVELS.slice(5).map((s, i) => step(s, i + 5))]} />
		<Bullets
			style={{left: 90, right: 90, top: 430}}
			fontSize={38}
			gap={28}
			items={[
				{at: lv2.from, color: C.red, children: <>最基本：<Hl>细胞</Hl>；最大：<Hl>生物圈</Hl></>},
				{at: lv3.from, color: C.orange, children: <><Hl c={C.orange}>植物没有“系统”层次</Hl>；单细胞生物的一个细胞＝细胞层次＋个体层次</>},
				{at: lv4.from, children: <>种群：一定区域<Hl c={C.orange}>同种</Hl>生物的所有个体；群落：<Hl c={C.orange}>所有生物</Hl>；生态系统：群落＋无机环境</>},
			]}
		/>
		<Tip at={lv5.from} top={710} label="解题方法">
			抓关键词：<Hl>同种</Hl>→种群，<Hl>所有生物</Hl>→群落，再加无机环境→生态系统；“池塘里所有的鱼”两者都不是
		</Tip>
		<Narration t={t} />
	</Scene>
);

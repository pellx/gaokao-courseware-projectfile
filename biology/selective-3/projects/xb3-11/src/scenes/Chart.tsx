import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.chart;
const {ch1, ch2, ch3, ch4, ch5} = t.cue;

const ROW = [70, 230, 390];
const ET = {x: 1340, y: 230};

export const Chart: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">胚胎工程流程图判读</Header>
		<svg width={1740} height={480} viewBox="0 0 1740 480" style={{position: 'absolute', left: 90, top: 170}}>
			<Defs />
			<G at={ch1.from}>
				<Box x={170} y={ROW[0]} w={320} h={90} label="卵母细胞 + 精子" color={C.orange} fontSize={30} />
				<Arrow x1={330} y1={ROW[0]} x2={540} y2={ROW[0]} />
				<Box x={720} y={ROW[0]} w={340} h={90} label="体外受精" sub="→ 试管动物（有性）" color={C.orange} fontSize={30} />
				<Arrow x1={890} y1={ROW[0]} x2={ET.x - 160} y2={ET.y - 40} />
			</G>
			<G at={ch2.from}>
				<Box x={170} y={ROW[1]} w={320} h={90} label="去核卵母 + 体细胞" color={C.brown} fontSize={30} />
				<Arrow x1={330} y1={ROW[1]} x2={540} y2={ROW[1]} />
				<Box x={720} y={ROW[1]} w={340} h={90} label="核移植" sub="→ 克隆动物（无性）" color={C.brown} fontSize={30} />
				<Arrow x1={890} y1={ROW[1]} x2={ET.x - 160} y2={ET.y} />
			</G>
			<G at={ch3.from}>
				<Box x={170} y={ROW[2]} w={320} h={90} label="早期胚胎" color={C.green} fontSize={30} />
				<Arrow x1={330} y1={ROW[2]} x2={540} y2={ROW[2]} />
				<Box x={720} y={ROW[2]} w={340} h={90} label="胚胎分割" sub="→ 同卵多胎（无性）" color={C.green} fontSize={30} />
				<Arrow x1={890} y1={ROW[2]} x2={ET.x - 160} y2={ET.y + 40} />
			</G>
			<G at={ch4.from}>
				<Box x={ET.x} y={ET.y} w={300} h={130} label="胚胎移植" sub="受体孕育" color={C.red} fill={C.redSoft} fontSize={40} />
				<Arrow x1={ET.x + 150} y1={ET.y} x2={1700} y2={ET.y} color={C.red} marker="arrow-red" />
				<text x={1620} y={ET.y - 24} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">后代</text>
			</G>
		</svg>
		<Tip at={ch5.from} top={690} label="解题方法">
			先看<Hl c={C.orange}>起点材料</Hl>判断技术，终点都是<Hl>胚胎移植</Hl>；激素处理步骤想到<Hl c={C.orange}>同期发情</Hl>和<Hl c={C.orange}>超数排卵</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.relation;
const {rl1, rl2, rl3, rl4, rl5} = t.cue;

const D = {x: 870, y: 330};
const BIRTH = {x: 560, y: 190};
const DEATH = {x: 1180, y: 190};
const IN = {x: 560, y: 470};
const OUT = {x: 1180, y: 470};
const AGE = {x: 870, y: 60};
const SEX = {x: 170, y: 190};

export const Relation: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">各数量特征之间的关系</Header>
		<svg width={1740} height={540} viewBox="0 0 1740 540" style={{position: 'absolute', left: 90, top: 160}}>
			<Defs />
			<G at={rl1.from}>
				<Box x={D.x} y={D.y} w={280} h={100} label="种群密度" color={C.red} fill={C.redSoft} fontSize={40} />
			</G>
			<G at={rl2.from}>
				<Box x={BIRTH.x} y={BIRTH.y} w={200} label="出生率" color={C.green} />
				<Box x={IN.x} y={IN.y} w={200} label="迁入率" color={C.green} />
				<Box x={DEATH.x} y={DEATH.y} w={200} label="死亡率" color={C.red} />
				<Box x={OUT.x} y={OUT.y} w={200} label="迁出率" color={C.red} />
				<Arrow x1={BIRTH.x + 60} y1={BIRTH.y + 40} x2={D.x - 110} y2={D.y - 50} color={C.green} marker="arrow-green" />
				<Arrow x1={IN.x + 60} y1={IN.y - 40} x2={D.x - 110} y2={D.y + 50} color={C.green} marker="arrow-green" />
				<Arrow x1={DEATH.x - 60} y1={DEATH.y + 40} x2={D.x + 110} y2={D.y - 50} color={C.red} marker="arrow-red" />
				<Arrow x1={OUT.x - 60} y1={OUT.y - 40} x2={D.x + 110} y2={D.y + 50} color={C.red} marker="arrow-red" />
				<text x={D.x} y={D.y + 110} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle">直接决定</text>
			</G>
			<G at={rl3.from}>
				<Box x={AGE.x} y={AGE.y} w={240} label="年龄结构" color={C.orange} fill={C.orangeSoft} />
				<Arrow x1={AGE.x - 120} y1={AGE.y + 20} x2={BIRTH.x + 30} y2={BIRTH.y - 42} color={C.orange} marker="arrow-orange" />
				<Arrow x1={AGE.x + 120} y1={AGE.y + 20} x2={DEATH.x - 30} y2={DEATH.y - 42} color={C.orange} marker="arrow-orange" />
				<text x={AGE.x + 150} y={AGE.y - 2} fontSize={24} fontWeight={800} fill={C.orange}>预测变化趋势</text>
			</G>
			<G at={rl4.from}>
				<Box x={SEX.x} y={SEX.y} w={240} label="性别比例" color={C.orange} fill={C.orangeSoft} />
				<Arrow x1={SEX.x + 120} y1={SEX.y} x2={BIRTH.x - 102} y2={BIRTH.y} color={C.orange} marker="arrow-orange" />
			</G>
		</svg>
		<Appear at={rl5.from} style={{position: 'absolute', left: 90, right: 90, top: 720}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				先找指向种群密度的四个“率”；同时指向两个率的是<Hl c={C.orange}>年龄结构</Hl>，只指向出生率的是<Hl c={C.orange}>性别比例</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

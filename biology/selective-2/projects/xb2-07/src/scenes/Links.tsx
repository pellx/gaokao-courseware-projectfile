import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.links;
const {lk1, lk2, lk3, lk4} = t.cue;

const ABIO = {x: 870, y: 70};
const PRO = {x: 330, y: 330};
const CON = {x: 870, y: 330};
const DEC = {x: 1410, y: 330};

export const Links: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">各组成成分之间的关系</Header>
		<svg width={1740} height={500} viewBox="0 0 1740 500" style={{position: 'absolute', left: 90, top: 170}}>
			<Defs />
			<G at={lk1.from}>
				<Box x={ABIO.x} y={ABIO.y} w={460} h={90} label="非生物的物质和能量" color={C.orange} fill={C.orangeSoft} fontSize={34} />
				<Box x={PRO.x} y={PRO.y} w={240} h={90} label="生产者" color={C.green} fill={C.greenSoft} fontSize={36} />
				<Arrow x1={ABIO.x - 240} y1={ABIO.y + 30} x2={PRO.x + 40} y2={PRO.y - 50} color={C.green} marker="arrow-green" />
				<text x={430} y={170} fontSize={26} fontWeight={800} fill={C.green} textAnchor="middle">光合作用</text>
			</G>
			<G at={lk2.from}>
				<Box x={CON.x} y={CON.y} w={240} h={90} label="消费者" color={C.red} fill={C.redSoft} fontSize={36} />
				<Arrow x1={PRO.x + 125} y1={PRO.y} x2={CON.x - 125} y2={CON.y} color={C.red} marker="arrow-red" />
				<text x={600} y={315} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle">捕食</text>
			</G>
			<G at={lk3.from}>
				<Box x={DEC.x} y={DEC.y} w={240} h={90} label="分解者" color={C.brown} fill="#f5ebe0" fontSize={36} />
				<Arrow x1={CON.x + 125} y1={CON.y} x2={DEC.x - 125} y2={DEC.y} color={C.brown} />
				<path d={`M${PRO.x},${PRO.y + 50} V${PRO.y + 120} H${DEC.x} V${DEC.y + 58}`} fill="none" stroke={C.brown} strokeWidth={6} markerEnd="url(#arrow)" />
				<text x={1140} y={315} fontSize={24} fontWeight={800} fill={C.brown} textAnchor="middle">遗体、排遗物</text>
				<text x={870} y={485} fontSize={24} fontWeight={800} fill={C.brown} textAnchor="middle">遗体、残枝败叶</text>
				<Arrow x1={DEC.x - 40} y1={DEC.y - 50} x2={ABIO.x + 240} y2={ABIO.y + 30} color={C.orange} marker="arrow-orange" />
				<text x={1320} y={170} fontSize={26} fontWeight={800} fill={C.orange} textAnchor="middle">分解为无机物</text>
			</G>
		</svg>
		<Appear at={lk4.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="考法" style={{fontSize: 30}}>
				<Hl>生产者和分解者</Hl>是联系生物群落和非生物环境的两大“桥梁”；消费者能<Hl c={C.orange}>加快物质循环</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

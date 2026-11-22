import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';
import {chem} from '../components/chem';

// SVG text with CO2 subscripted (Unicode subscripts render badly).
export const co2 = (pre: string, post = '') => [
	<tspan key="a">{pre}CO</tspan>,
	<tspan key="b" dy={8} fontSize="0.7em">2</tspan>,
	<tspan key="c" dy={-8}>{post}</tspan>,
];

const t = T.carbon;
const {cb1, cb2, cb3, cb4, cb5} = t.cue;

const AIR = {x: 760, y: 60};
const PRO = {x: 220, y: 300};
const CON = {x: 760, y: 300};
const DEC = {x: 1300, y: 300};
const FOS = {x: 1500, y: 60};

export const Carbon: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">碳循环的过程</Header>
		<svg width={1740} height={470} viewBox="0 0 1740 470" style={{position: 'absolute', left: 90, top: 165}}>
			<Defs />
			<G at={cb1.from}>
				<Box x={AIR.x} y={AIR.y} w={380} h={90} label={co2('大气中的 ', ' 库')} color={C.orange} fill={C.orangeSoft} fontSize={34} />
			</G>
			<G at={cb2.from}>
				<Box x={PRO.x} y={PRO.y} w={230} h={86} label="生产者" color={C.green} fill={C.greenSoft} fontSize={36} />
				<Box x={CON.x} y={CON.y} w={230} h={86} label="消费者" color={C.red} fontSize={36} />
				<Box x={DEC.x} y={DEC.y} w={230} h={86} label="分解者" color={C.brown} fontSize={36} />
				<Arrow x1={PRO.x + 120} y1={PRO.y} x2={CON.x - 120} y2={CON.y} color={C.text} />
				<Arrow x1={CON.x + 120} y1={CON.y} x2={DEC.x - 120} y2={DEC.y} color={C.text} />
				<path d={`M${PRO.x},${PRO.y + 45} V${PRO.y + 120} H${DEC.x} V${DEC.y + 52}`} fill="none" stroke={C.text} strokeWidth={5} markerEnd="url(#arrow)" />
				<text x={760} y={455} fontSize={26} fontWeight={900} fill={C.red} textAnchor="middle">群落内部：含碳有机物</text>
			</G>
			<G at={cb3.from}>
				<Arrow x1={AIR.x - 200} y1={AIR.y + 10} x2={PRO.x + 40} y2={PRO.y - 50} color={C.green} marker="arrow-green" offset={-14} />
				<text x={490} y={205} fontSize={26} fontWeight={800} fill={C.green} textAnchor="middle">光合作用</text>
			</G>
			<G at={cb4.from}>
				<Arrow x1={PRO.x + 40} y1={PRO.y - 50} x2={AIR.x - 200} y2={AIR.y + 10} color={C.orange} marker="arrow-orange" offset={-14} />
				<text x={290} y={130} fontSize={24} fontWeight={800} fill={C.orange} textAnchor="middle">呼吸作用</text>
				<Arrow x1={CON.x} y1={CON.y - 48} x2={AIR.x} y2={AIR.y + 50} color={C.orange} marker="arrow-orange" />
				<text x={CON.x + 70} y={190} fontSize={24} fontWeight={800} fill={C.orange} textAnchor="middle">呼吸作用</text>
				<Arrow x1={DEC.x - 40} y1={DEC.y - 48} x2={AIR.x + 200} y2={AIR.y + 30} color={C.orange} marker="arrow-orange" />
				<text x={1230} y={160} fontSize={24} fontWeight={800} fill={C.orange} textAnchor="middle">分解作用</text>
				<Box x={FOS.x} y={FOS.y} w={230} h={80} label="化石燃料" color={C.text} fontSize={32} />
				<Arrow x1={FOS.x - 120} y1={FOS.y} x2={AIR.x + 195} y2={AIR.y} color={C.red} marker="arrow-red" />
				<text x={1200} y={40} fontSize={24} fontWeight={800} fill={C.red} textAnchor="middle">燃烧</text>
			</G>
		</svg>
		<Appear at={cb2.from} style={{position: 'absolute', left: 90, top: 175, fontSize: 26, fontWeight: 900, color: C.red}}>
			{chem('群落 ↔ 非生物环境：CO2')}
		</Appear>
		<Appear at={cb5.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31}}>
				群落内部碳以<Hl>含碳有机物</Hl>形式沿食物链传递，不是以 CO<sub style={{fontSize: '0.6em'}}>2</sub> 形式
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

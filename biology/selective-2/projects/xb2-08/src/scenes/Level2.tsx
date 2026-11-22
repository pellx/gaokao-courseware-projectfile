import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.level2;
const {l21, l22, l23, l24} = t.cue;

export const Level2: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">能量流经第二营养级</Header>
		<svg width={1740} height={500} viewBox="0 0 1740 500" style={{position: 'absolute', left: 90, top: 170}}>
			<Defs />
			<G at={l21.from}>
				<Box x={160} y={230} w={290} h={100} label="初级消费者" sub="摄入量" color={C.orange} fill={C.orangeSoft} fontSize={34} />
			</G>
			<G at={l22.from}>
				<Box x={560} y={230} w={230} h={100} label="同化量" color={C.green} fill={C.greenSoft} fontSize={36} />
				<Arrow x1={310} y1={230} x2={440} y2={230} color={C.green} marker="arrow-green" />
				<Box x={560} y={405} w={300} h={80} label="粪便 → 分解者" color={C.brown} fontSize={30} />
				<Arrow x1={240} y1={285} x2={400} y2={390} color={C.brown} />
			</G>
			<G at={l23.from}>
				<Box x={1000} y={80} w={340} h={86} label="呼吸作用散失" sub="热能" color={C.red} fill={C.redSoft} fontSize={32} />
				<Arrow x1={680} y1={200} x2={820} y2={110} color={C.red} marker="arrow-red" />
				<Box x={1020} y={300} w={400} h={86} label="用于生长、发育和繁殖" color={C.green} fontSize={32} />
				<Arrow x1={680} y1={255} x2={810} y2={290} color={C.green} marker="arrow-green" />
				<Box x={1540} y={200} w={300} h={80} label="次级消费者摄入" color={C.orange} fontSize={28} />
				<Arrow x1={1225} y1={285} x2={1380} y2={220} color={C.orange} marker="arrow-orange" />
				<Box x={1540} y={420} w={300} h={80} label="遗体残骸 → 分解者" color={C.brown} fontSize={28} />
				<Arrow x1={1225} y1={320} x2={1380} y2={405} color={C.brown} />
			</G>
			<G at={l24.from}>
				<text x={560} y={478} fontSize={25} fontWeight={900} fill={C.red} textAnchor="middle">属于上一营养级（生产者）同化</text>
			</G>
		</svg>
		<Appear at={l22.from} style={{position: 'absolute', left: 90, top: 190, fontSize: 34, fontWeight: 900, color: C.red}}>
			摄入量 = 同化量 + 粪便量
		</Appear>
		<Appear at={l24.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				粪便中的能量<Hl>不属于</Hl>本营养级的同化量，属于<Hl>上一营养级</Hl>同化的能量
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

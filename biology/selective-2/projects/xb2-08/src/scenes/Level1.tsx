import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.level1;
const {l11, l12, l13, l14, l15} = t.cue;

export const Level1: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">能量流经第一营养级</Header>
		<svg width={1740} height={500} viewBox="0 0 1740 500" style={{position: 'absolute', left: 90, top: 170}}>
			<Defs />
			<G at={l11.from}>
				<circle cx={90} cy={230} r={48} fill={C.gold} />
				<text x={90} y={320} fontSize={30} fontWeight={900} fill={C.gold} textAnchor="middle">太阳能</text>
				<Arrow x1={150} y1={230} x2={300} y2={230} color={C.gold} marker="arrow-orange" />
				<text x={225} y={210} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">光合作用</text>
				<Box x={440} y={230} w={260} h={100} label="生产者固定" sub="（同化量）" color={C.green} fill={C.greenSoft} fontSize={34} />
			</G>
			<G at={l12.from}>
				<Box x={860} y={70} w={340} h={86} label="呼吸作用散失" sub="热能" color={C.red} fill={C.redSoft} fontSize={32} />
				<Arrow x1={570} y1={200} x2={690} y2={100} color={C.red} marker="arrow-red" />
			</G>
			<G at={l13.from}>
				<Box x={880} y={300} w={400} h={86} label="用于生长、发育和繁殖" color={C.green} fontSize={32} />
				<Arrow x1={570} y1={255} x2={680} y2={290} color={C.green} marker="arrow-green" />
			</G>
			<G at={l14.from}>
				<Box x={1470} y={190} w={360} h={86} label="初级消费者摄入" color={C.orange} fill={C.orangeSoft} fontSize={32} />
				<Arrow x1={1080} y1={285} x2={1290} y2={210} color={C.orange} marker="arrow-orange" />
				<Box x={1470} y={420} w={360} h={86} label="分解者" sub="残枝败叶" color={C.brown} fontSize={32} />
				<Arrow x1={1080} y1={320} x2={1290} y2={405} color={C.brown} />
			</G>
		</svg>
		<Appear at={l15.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				每个营养级都拆成：<Hl c={C.green}>固定或同化</Hl> → <Hl>呼吸散失</Hl> + <Hl c={C.green}>用于生长、发育和繁殖</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

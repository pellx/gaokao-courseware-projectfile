import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.process;
const {pc1, pc2, pc3, pc4} = t.cue;

export const Process: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">信息传递的过程</Header>
		<svg width={1740} height={470} viewBox="0 0 1740 470" style={{position: 'absolute', left: 90, top: 170}}>
			<Defs />
			<G at={pc1.from}>
				<Box x={260} y={70} w={300} h={100} label="信息源" sub="信息产生的部位" color={C.orange} fill={C.orangeSoft} fontSize={36} />
				<Box x={870} y={70} w={300} h={100} label="信道" sub="空气、水等媒介" color={C.orange} fill={C.orangeSoft} fontSize={36} />
				<Box x={1480} y={70} w={300} h={100} label="信息受体" sub="接收的生物或部位" color={C.orange} fill={C.orangeSoft} fontSize={36} />
				<Arrow x1={420} y1={70} x2={710} y2={70} color={C.orange} marker="arrow-orange" />
				<Arrow x1={1030} y1={70} x2={1320} y2={70} color={C.orange} marker="arrow-orange" />
			</G>
			<G at={pc3.from}>
				<Box x={360} y={300} w={240} h={90} label="捕食者" color={C.red} fontSize={36} />
				<Box x={860} y={300} w={260} h={90} label="被捕食者" color={C.green} fontSize={36} />
				<Arrow x1={490} y1={300} x2={720} y2={300} color={C.red} marker="arrow-red" offset={-14} />
				<Arrow x1={720} y1={300} x2={490} y2={300} color={C.green} marker="arrow-green" offset={-14} />
				<text x={605} y={390} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">往往双向</text>
			</G>
			<G at={pc4.from}>
				<Box x={1250} y={300} w={200} h={90} label="光照" color={C.gold} fontSize={36} />
				<Box x={1580} y={300} w={200} h={90} label="植物" color={C.green} fontSize={36} />
				<Arrow x1={1355} y1={300} x2={1475} y2={300} color={C.gold} marker="arrow-orange" />
				<text x={1415} y={390} fontSize={28} fontWeight={900} fill={C.orange} textAnchor="middle">单向</text>
			</G>
		</svg>
		<Appear at={pc2.from} style={{position: 'absolute', left: 90, top: 340, fontSize: 28, fontWeight: 800, color: C.muted}}>
			三要素缺一不可
		</Appear>
		<Appear at={pc4.from} style={{position: 'absolute', left: 90, right: 90, top: 680}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				非生物环境可作<Hl c={C.orange}>信息源</Hl>，但不能接收信息 → 生物与非生物环境之间的信息传递是<Hl>单向</Hl>的
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Appear, Callout, Card, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ratio;
const {ra1, ra2, ra3, ra4} = t.cue;

export const Ratio: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">按比例分配的计算</Header>
		<svg width={700} height={470} viewBox="0 0 700 470" style={{position: 'absolute', left: 80, top: 175}}>
			<Defs />
			<G at={ra1.from}>
				<Box x={330} y={60} w={160} h={76} label="鹰" color={C.red} fontSize={36} />
				<Box x={140} y={250} w={160} h={76} label="兔" color={C.orange} fontSize={36} />
				<Box x={520} y={200} w={160} h={76} label="蛇" color={C.orange} fontSize={36} />
				<Box x={520} y={330} w={160} h={70} label="鼠" color={C.orange} fontSize={34} />
				<Box x={330} y={430} w={160} h={70} label="草" color={C.green} fontSize={34} />
				<Arrow x1={300} y1={395} x2={175} y2={295} color={C.muted} />
				<Arrow x1={370} y1={395} x2={480} y2={370} color={C.muted} />
				<Arrow x1={520} y1={295} x2={520} y2={245} color={C.muted} />
				<Arrow x1={170} y1={210} x2={290} y2={102} color={C.orange} marker="arrow-orange" />
				<Arrow x1={490} y1={160} x2={375} y2={102} color={C.orange} marker="arrow-orange" />
			</G>
			<G at={ra2.from}>
				<text x={170} y={150} fontSize={32} fontWeight={900} fill={C.orange} textAnchor="middle">1/2</text>
				<text x={480} y={120} fontSize={32} fontWeight={900} fill={C.orange} textAnchor="middle">1/2</text>
			</G>
		</svg>
		<div style={{position: 'absolute', left: 820, right: 90, top: 190, display: 'flex', flexDirection: 'column', gap: 22}}>
			<Appear at={ra2.from} style={{fontSize: 30, fontWeight: 800}}>
				鹰增重 2 kg，传递效率按 10%，需要多少草？
			</Appear>
			<Appear at={ra3.from}>
				<Card style={{fontSize: 30, fontWeight: 700, lineHeight: 1.7}}>
					来自兔 1 kg：1 ÷ 10% ÷ 10% = 100 kg
					<br />来自蛇 1 kg：1 ÷ 10% ÷ 10% ÷ 10% = 1000 kg
					<br />合计：<Hl>1100 kg</Hl>
				</Card>
			</Appear>
		</div>
		<Appear at={ra4.from} style={{position: 'absolute', left: 90, right: 90, top: 690}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				<Hl>分链计算再相加</Hl>；“食物来源比例”从高往低<Hl c={C.orange}>逆推</Hl>，“能量分配比例”从低往高<Hl c={C.orange}>顺推</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

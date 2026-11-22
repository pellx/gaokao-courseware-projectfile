import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.chain;
const {ch1, ch2, ch3, ch4} = t.cue;

const ORGS: [string, string][] = [
	['草', C.green],
	['蝗虫', C.orange],
	['青蛙', C.orange],
	['蛇', C.red],
	['鹰', C.red],
];
const LEVEL = ['第一营养级', '第二营养级', '第三营养级', '第四营养级', '第五营养级'];
const ROLE = ['生产者', '初级消费者', '次级消费者', '三级消费者', '四级消费者'];
const X = (i: number) => 150 + i * 360;

export const Chain: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">食物链</Header>
		<Appear at={ch1.from} style={{position: 'absolute', left: 90, right: 90, top: 170, fontSize: 31, fontWeight: 700}}>
			食物链：生态系统中各种生物因<Hl c={C.orange}>食物关系</Hl>形成的一种联系
		</Appear>
		<svg width={1740} height={330} viewBox="0 0 1740 330" style={{position: 'absolute', left: 90, top: 240}}>
			<Defs />
			{ORGS.map(([name, color], i) => (
				<G key={name} at={ch2.from + i * 12}>
					<Box x={X(i)} y={60} w={200} h={90} label={name} color={color} fontSize={40} />
					{i > 0 && <Arrow x1={X(i - 1) + 105} y1={60} x2={X(i) - 105} y2={60} color={C.muted} />}
				</G>
			))}
			<G at={ch2.from + 20}>
				<text x={X(0)} y={145} fontSize={24} fontWeight={900} fill={C.red} textAnchor="middle">起点：生产者</text>
				<text x={X(4)} y={145} fontSize={24} fontWeight={900} fill={C.red} textAnchor="middle">最高营养级</text>
			</G>
			<G at={ch3.from}>
				{LEVEL.map((l, i) => (
					<text key={l} x={X(i)} y={215} fontSize={28} fontWeight={900} fill={C.green} textAnchor="middle">{l}</text>
				))}
				{ROLE.map((r, i) => (
					<text key={r} x={X(i)} y={265} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="middle">{r}</text>
				))}
				<text x={870} y={318} fontSize={28} fontWeight={900} fill={C.orange} textAnchor="middle">消费者级别 = 营养级数 − 1</text>
			</G>
		</svg>
		<Appear at={ch4.from} style={{position: 'absolute', left: 90, right: 90, top: 620}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31}}>
				食物链<Hl>只有生产者和消费者</Hl>，不含分解者和非生物的物质和能量；一般不超过五个营养级
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

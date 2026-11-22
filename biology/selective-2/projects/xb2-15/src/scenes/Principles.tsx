import React from 'react';
import {Appear, Defs} from '../components/ui';
import {Arrow, Box, Chain, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';
import {Hl, Principle} from './Principle';

const S = T.self.cue;
const PLANTS: [string, number][] = [
	['芦苇', 90],
	['香蒲', 210],
	['荷花', 330],
	['浮萍', 450],
	['苦草', 570],
];
export const Self: React.FC = () => (
	<Principle
		t={T.self}
		tag="考点二"
		title="自生原理"
		color={C.green}
		lines={[
			[<>由<Hl c={C.green}>生物组分</Hl>产生的自组织、自我调节、自我更新和维持</>, S.sf1.from],
			[<><Hl>有效选择生物组分并合理布设</Hl>：多种净化能力强的水生植物，考虑生态位差异</>, S.sf2.from],
			[<>创造条件，使生物组分形成<Hl c={C.green}>互利共存关系</Hl></>, S.sf3.from],
		]}
		art={
			<svg width={680} height={400} viewBox="0 0 680 400">
				<G at={S.sf2.from}>
					<rect x={10} y={230} width={660} height={140} rx={20} fill={C.orangeSoft} stroke={C.orange} strokeWidth={4} />
					{PLANTS.map(([n, x], i) => (
						<g key={n}>
							<rect x={x - 6} y={120 + (i % 2) * 40} width={12} height={150 - (i % 2) * 40} fill={C.green} />
							<ellipse cx={x} cy={115 + (i % 2) * 40} rx={36} ry={26} fill="#5bb26f" />
							<text x={x} y={330} fontSize={26} fontWeight={800} fill={C.text} textAnchor="middle">{n}</text>
						</g>
					))}
					<text x={340} y={50} fontSize={28} fontWeight={900} fill={C.green} textAnchor="middle">湿地：多种植物合理布设</text>
				</G>
			</svg>
		}
		kwAt={S.sf4.from}
		keywords={<><Hl>生物多样性</Hl>、多种生物、合理布设、互利共存 → 自生原理</>}
	/>
);

const Y = T.cycle.cue;
export const Cycle: React.FC = () => (
	<Principle
		t={T.cycle}
		tag="考点三"
		title="循环原理"
		color={C.orange}
		lines={[
			[<>促进物质<Hl c={C.orange}>迁移与转化</Hl>，转化率较高</>, Y.cy1.from],
			[<>前一环节的<Hl>废物</Hl>尽可能被后一环节<Hl c={C.green}>利用</Hl></>, Y.cy2.from],
			[<>典型：<Hl c={C.green}>无废弃物农业</Hl></>, Y.cy3.from],
		]}
		art={
			<svg width={680} height={420} viewBox="0 0 680 420">
				<Defs />
				<G at={Y.cy3.from}>
					<Box x={340} y={50} w={200} h={76} label="农作物" color={C.green} fontSize={32} />
					<Box x={580} y={210} w={180} h={76} label="家畜" color={C.orange} fontSize={32} />
					<Box x={340} y={370} w={200} h={76} label="沼气池" color={C.brown} fontSize={32} />
					<Box x={100} y={210} w={180} h={76} label="农田" color={C.green} fontSize={32} />
					<Arrow x1={440} y1={80} x2={540} y2={165} color={C.muted} />
					<text x={560} y={110} fontSize={22} fontWeight={800} fill={C.muted}>秸秆</text>
					<Arrow x1={540} y1={255} x2={440} y2={340} color={C.muted} />
					<text x={560} y={320} fontSize={22} fontWeight={800} fill={C.muted}>粪便</text>
					<Arrow x1={240} y1={340} x2={140} y2={255} color={C.muted} />
					<text x={40} y={320} fontSize={22} fontWeight={800} fill={C.muted}>沼渣沼液</text>
					<Arrow x1={140} y1={165} x2={240} y2={80} color={C.muted} />
					<text x={60} y={110} fontSize={22} fontWeight={800} fill={C.muted}>肥田</text>
				</G>
			</svg>
		}
		kwAt={Y.cy4.from}
		keywords={<><Hl c={C.orange}>物质循环、废物利用、无废弃物、多级利用</Hl> → 循环原理</>}
	/>
);

const H = T.harmony.cue;
export const Harmony: React.FC = () => (
	<Principle
		t={T.harmony}
		tag="考点四"
		title="协调原理"
		color={C.red}
		lines={[
			[<>处理好<Hl>生物与环境、生物与生物</Hl>的协调与适应</>, H.hm1.from],
			[<>考虑<Hl>适应性</Hl>：西北干旱地区种耐旱灌木和草，不大量种需水多的乔木</>, H.hm2.from],
			[<>考虑<Hl>环境容纳量</Hl>：放牧不超过载畜量，否则草场退化</>, H.hm3.from],
		]}
		art={
			<div style={{display: 'flex', flexDirection: 'column', gap: 26, marginTop: 20}}>
				<Appear at={H.hm2.from}>
					<Chain fontSize={28} gap={10} steps={[{label: '干旱地区', color: C.orange, at: H.hm2.from}, {label: '种耐旱灌木、草', color: C.green, at: H.hm2.from + 20}]} />
				</Appear>
				<Appear at={H.hm3.from}>
					<Chain fontSize={28} gap={10} steps={[{label: '超载放牧', color: C.red, at: H.hm3.from}, {label: '草场退化', color: C.red, at: H.hm3.from + 20}]} />
				</Appear>
			</div>
		}
		kwAt={H.hm4.from}
		keywords={<><Hl>适应性、环境容纳量、适地适种、合理载畜量</Hl> → 协调原理</>}
	/>
);

const W = T.whole.cue;
export const Whole: React.FC = () => (
	<Principle
		t={T.whole}
		tag="考点五"
		title="整体原理"
		color={C.brown}
		lines={[
			[<>树立<Hl c={C.brown}>整体观</Hl></>, W.wh1.from],
			[<>遵从自然生态系统的规律，各组分有<Hl c={C.orange}>适当比例</Hl>、有序结构</>, W.wh2.from],
			[<>社会—经济—自然复合系统：<Hl>兼顾生态、经济和社会效益</Hl></>, W.wh3.from],
		]}
		art={
			<svg width={680} height={430} viewBox="0 0 680 430">
				<G at={W.wh3.from}>
					<circle cx={250} cy={160} r={120} fill={C.green} opacity={0.25} stroke={C.green} strokeWidth={4} />
					<circle cx={430} cy={160} r={120} fill={C.orange} opacity={0.25} stroke={C.orange} strokeWidth={4} />
					<circle cx={340} cy={290} r={120} fill={C.red} opacity={0.2} stroke={C.red} strokeWidth={4} />
					<text x={200} y={130} fontSize={34} fontWeight={900} fill={C.green} textAnchor="middle">自然</text>
					<text x={480} y={130} fontSize={34} fontWeight={900} fill={C.orange} textAnchor="middle">经济</text>
					<text x={340} y={350} fontSize={34} fontWeight={900} fill={C.red} textAnchor="middle">社会</text>
				</G>
			</svg>
		}
		kwAt={W.wh4.from}
		keywords={<><Hl>整体、兼顾、社会—经济—自然、考虑农民收入和生活</Hl> → 整体原理</>}
	/>
);

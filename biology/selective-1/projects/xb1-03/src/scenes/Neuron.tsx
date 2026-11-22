import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Appear, Defs, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.neuron;
const {nr1, nr2, nr3, nr4, nr5, nr6} = t.cue;

const DENDRITES = [
	'M190,250 L120,170 L80,120', 'M120,170 L140,100', 'M175,235 L90,230 L40,200', 'M90,230 L50,260',
	'M190,310 L120,380 L70,420', 'M120,380 L130,450', 'M230,215 L220,130 L250,80', 'M220,130 L180,90',
];
const SOMA = {x: 240, y: 280};
const MYELIN = [360, 470, 580, 690, 800];
const TERMINALS = ['M960,280 L1030,220', 'M960,280 L1050,270', 'M960,280 L1040,330', 'M960,280 L1010,370'];

export const Neuron: React.FC = () => {
	const frame = useCurrentFrame();
	const live = (cue: {from: number; to: number}) => frame >= cue.from && frame < cue.to + 20;
	const dW = live(nr2) ? 12 : 7;
	const aColor = live(nr4) ? C.red : C.brown;
	const tColor = live(nr5) ? C.orange : C.brown;
	return (
		<Scene duration={t.duration}>
			<Header tag="考点五">神经元的结构</Header>
			<svg width={1120} height={520} viewBox="0 0 1120 520" style={{position: 'absolute', left: 90, top: 170}}>
				<Defs />
				<G at={nr1.from}>
					{DENDRITES.map((d) => (
						<path key={d} d={d} fill="none" stroke={live(nr2) ? C.green : C.brown} strokeWidth={dW} strokeLinecap="round" strokeLinejoin="round" />
					))}
					<line x1={300} y1={280} x2={960} y2={280} stroke={aColor} strokeWidth={10} />
					{MYELIN.map((x) => (
						<rect key={x} x={x} y={258} width={90} height={44} rx={22} fill="#f3e2c3" stroke={C.brown} strokeWidth={3} />
					))}
					{TERMINALS.map((d) => (
						<path key={d} d={d} fill="none" stroke={tColor} strokeWidth={7} strokeLinecap="round" />
					))}
					{[[1030, 220], [1050, 270], [1040, 330], [1010, 370]].map(([x, y]) => (
						<circle key={x} cx={x} cy={y} r={12} fill={tColor} />
					))}
					<circle cx={SOMA.x} cy={SOMA.y} r={72} fill="#f6d7b0" stroke={C.brown} strokeWidth={6} />
					<circle cx={SOMA.x} cy={SOMA.y} r={26} fill={C.brown} opacity={0.7} />
					<text x={SOMA.x} y={400} fontSize={34} fontWeight={900} fill={C.orange} textAnchor="middle">细胞体</text>
					<text x={70} y={80} fontSize={34} fontWeight={900} fill={C.green}>树突</text>
					<text x={620} y={235} fontSize={34} fontWeight={900} fill={C.red} textAnchor="middle">轴突</text>
					<text x={625} y={345} fontSize={26} fontWeight={700} fill={C.brown} textAnchor="middle">髓鞘</text>
					<text x={1030} y={430} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">神经末梢</text>
				</G>
				<G at={nr6.from}>
					<line x1={60} y1={490} x2={1060} y2={490} stroke={C.red} strokeWidth={6} markerEnd="url(#arrow-red)" />
					<text x={560} y={475} fontSize={30} fontWeight={800} fill={C.red} textAnchor="middle">信息传递方向：树突 → 细胞体 → 轴突</text>
				</G>
			</svg>
			<Appear at={nr3.from} style={{position: 'absolute', left: 1290, right: 90, top: 170, height: 620}}>
				<Photo src="images/purkinje.jpg" caption="卡哈尔手绘的小脑浦肯野细胞" style={{width: '100%', height: '100%'}} fit="contain" />
			</Appear>
			<Appear at={nr2.from} style={{position: 'absolute', left: 90, top: 700, width: 1150, fontSize: 30, lineHeight: 1.6}}>
				<Hl c={C.green}>树突</Hl>：短而粗、数量多，接受信息传向细胞体
				<Appear at={nr4.from} dy={0}>
					<Hl>轴突</Hl>：长而较细，将信息传向其他神经元、肌肉或腺体
				</Appear>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};

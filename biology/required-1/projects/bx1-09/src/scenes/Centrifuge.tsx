import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.centrifuge;
const {cf1, cf2, cf3} = t.cue;

// A centrifuge tube with sediment particles of a given size at the bottom.
const Tube: React.FC<{x: number; r: number; label: string; speed: string}> = ({x, r, label, speed}) => (
	<g>
		<path d={`M${x - 55},40 L${x - 55},300 Q${x},360 ${x + 55},300 L${x + 55},40`} fill="#fffaf3" stroke={C.brown} strokeWidth={5} />
		{Array.from({length: 5}, (_, i) => (
			<circle key={i} cx={x - 34 + (i % 3) * 34} cy={318 - Math.floor(i / 3) * (r * 2 + 4) - (i % 3 === 1 ? 10 : 0)} r={r} fill={C.orange} />
		))}
		<text x={x} y={20} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">{speed}</text>
		<text x={x} y={400} fontSize={28} fontWeight={800} fill={C.muted} textAnchor="middle">{label}</text>
	</g>
);

export const Centrifuge: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">分离细胞器的方法：差速离心法</Header>
		<svg width={1740} height={420} viewBox="0 0 1740 420" style={{position: 'absolute', left: 90, top: 160}}>
			<Defs />
			<G at={cf1.from}>
				<rect x={20} y={130} width={300} height={120} rx={20} fill={C.orangeSoft} stroke={C.orange} strokeWidth={5} />
				<text x={170} y={182} fontSize={34} fontWeight={900} fill={C.orange} textAnchor="middle">破坏细胞膜</text>
				<text x={170} y={228} fontSize={28} fontWeight={800} fill={C.muted} textAnchor="middle">→ 匀浆</text>
				<Arrow x1={330} y1={190} x2={500} y2={190} trim={[0, 0]} />
			</G>
			<G at={cf2.from}>
				<Tube x={620} r={22} speed="低速" label="较大颗粒先沉降" />
				<Arrow x1={720} y1={190} x2={880} y2={190} trim={[0, 0]} />
				<Tube x={990} r={14} speed="中速" label="较小颗粒" />
				<Arrow x1={1090} y1={190} x2={1250} y2={190} trim={[0, 0]} />
				<Tube x={1360} r={8} speed="高速" label="更小的颗粒" />
				<text x={1600} y={180} fontSize={32} fontWeight={900} fill={C.red} textAnchor="middle">转速</text>
				<text x={1600} y={225} fontSize={32} fontWeight={900} fill={C.red} textAnchor="middle">逐渐提高</text>
			</G>
		</svg>
		<Tip at={cf3.from} top={640} label="易错">
			差速离心：<Hl>逐渐提高转速</Hl>，颗粒大的先沉降；不同于 DNA 复制实验的<Hl c={C.orange}>密度梯度离心</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

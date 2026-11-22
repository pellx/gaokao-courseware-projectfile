import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.control;
const {co1, co2, co3, co4, co5} = t.cue;

const Plate: React.FC<{x: number; n: number}> = ({x, n}) => (
	<g>
		<circle cx={x} cy={210} r={135} fill="#fdf6ea" stroke={C.text} strokeWidth={5} />
		{Array.from({length: n}, (_, i) => {
			const a = i * 2.39996;
			const r = 118 * Math.sqrt((i + 0.5) / n);
			return <circle key={i} cx={x + r * Math.cos(a)} cy={210 + r * Math.sin(a)} r={7} fill={C.orange} />;
		})}
	</g>
);

const X = [290, 870, 1450];

export const Control: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">对照的设置</Header>
		<svg width={1740} height={520} viewBox="0 0 1740 520" style={{position: 'absolute', left: 90, top: 160}}>
			<G at={co1.from}>
				<text x={X[0]} y={50} fontSize={32} fontWeight={900} fill={C.text} textAnchor="middle">实验组</text>
				<Plate x={X[0]} n={18} />
				<text x={X[0]} y={395} fontSize={27} fontWeight={800} fill={C.muted} textAnchor="middle">选择培养基 + 土样</text>
			</G>
			<G at={co1.from + 30}>
				<text x={X[1]} y={50} fontSize={32} fontWeight={900} fill={C.orange} textAnchor="middle">对照一：不接种</text>
				<Plate x={X[1]} n={0} />
				<text x={X[1]} y={395} fontSize={27} fontWeight={800} fill={C.muted} textAnchor="middle">选择培养基，不接种</text>
			</G>
			<G at={co2.from}>
				<text x={X[1]} y={445} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">长出菌落 → 培养基被污染</text>
			</G>
			<G at={co3.from}>
				<text x={X[2]} y={50} fontSize={32} fontWeight={900} fill={C.green} textAnchor="middle">对照二：完全培养基</text>
				<Plate x={X[2]} n={70} />
				<text x={X[2]} y={395} fontSize={27} fontWeight={800} fill={C.muted} textAnchor="middle">牛肉膏蛋白胨 + 同样土样</text>
			</G>
			<G at={co4.from}>
				<text x={X[2]} y={445} fontSize={28} fontWeight={900} fill={C.green} textAnchor="middle">菌落明显更多 → 有选择作用</text>
			</G>
		</svg>
		<Tip at={co5.from} top={700} label="解题方法">
			空白平板看<Hl>有没有污染</Hl>（灭菌是否合格）；牛肉膏蛋白胨平板看<Hl>有没有选择作用</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Bullets, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.fertilize;
const {fe1, fe2, fe3, fe4, fe5} = t.cue;

const E = {x: 330, y: 270, r: 150, zona: 186};

// A sperm: head pointing at `angle` (degrees, 0 = right) towards the egg centre.
const Sperm: React.FC<{x: number; y: number; angle: number; color?: string}> = ({x, y, angle, color = C.brown}) => (
	<g transform={`translate(${x} ${y}) rotate(${angle})`}>
		<ellipse cx={0} cy={0} rx={14} ry={9} fill={color} />
		<path d="M-14,0 C-34,-10 -46,10 -70,0" fill="none" stroke={color} strokeWidth={4} />
	</g>
);

export const Fertilize: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">受精过程</Header>
		<svg width={760} height={580} viewBox="0 -60 760 620" style={{position: 'absolute', left: 60, top: 145}}>
			<Defs />
			<G at={fe1.from}>
				<circle cx={E.x} cy={E.y} r={E.zona} fill="#fdf3e4" stroke={C.orange} strokeWidth={14} />
				<circle cx={E.x} cy={E.y} r={E.r} fill="#fde8d2" stroke={C.red} strokeWidth={4} />
				<text x={E.x + E.zona + 18} y={E.y - 120} fontSize={26} fontWeight={900} fill={C.orange}>透明带</text>
				<text x={E.x + E.zona + 18} y={E.y - 70} fontSize={26} fontWeight={900} fill={C.red}>卵细胞膜</text>
				<line x1={E.x + E.zona - 6} y1={E.y - 128} x2={E.x + E.zona + 12} y2={E.y - 128} stroke={C.orange} strokeWidth={3} />
				<line x1={E.x + E.r * 0.95} y1={E.y - 78} x2={E.x + E.zona + 12} y2={E.y - 78} stroke={C.red} strokeWidth={3} />
				<Sperm x={E.x - E.zona - 26} y={E.y} angle={0} color={C.brown} />
			</G>
			<G at={fe2.from}>
				<Sperm x={E.x} y={E.y - E.zona - 50} angle={90} color={C.muted} />
				<line x1={E.x - 20} y1={E.y - E.zona - 26} x2={E.x + 20} y2={E.y - E.zona - 6} stroke={C.red} strokeWidth={6} />
				<line x1={E.x + 20} y1={E.y - E.zona - 26} x2={E.x - 20} y2={E.y - E.zona - 6} stroke={C.red} strokeWidth={6} />
				<text x={E.x} y={E.y - E.zona - 76} fontSize={26} fontWeight={900} fill={C.red} textAnchor="middle">① 透明带反应</text>
			</G>
			<G at={fe3.from}>
				<Sperm x={E.x + 10} y={E.y + E.r + 16} angle={-90} color={C.muted} />
				<line x1={E.x - 10} y1={E.y + E.r - 12} x2={E.x + 30} y2={E.y + E.r + 8} stroke={C.red} strokeWidth={6} />
				<line x1={E.x + 30} y1={E.y + E.r - 12} x2={E.x - 10} y2={E.y + E.r + 8} stroke={C.red} strokeWidth={6} />
				<text x={E.x} y={E.y + E.zona + 52} fontSize={26} fontWeight={900} fill={C.red} textAnchor="middle">② 卵细胞膜反应</text>
			</G>
			<G at={fe4.from}>
				<circle cx={E.x - 50} cy={E.y} r={30} fill={C.brown} opacity={0.85} />
				<circle cx={E.x + 50} cy={E.y} r={30} fill={C.red} opacity={0.85} />
				<text x={E.x - 50} y={E.y + 64} fontSize={24} fontWeight={900} fill={C.brown} textAnchor="middle">雄原核</text>
				<text x={E.x + 50} y={E.y + 64} fontSize={24} fontWeight={900} fill={C.red} textAnchor="middle">雌原核</text>
				<circle cx={E.x + 30} cy={E.y - E.r - 14} r={12} fill={C.orange} />
				<circle cx={E.x + 64} cy={E.y - E.r - 6} r={12} fill={C.orange} />
				<text x={E.x - 200} y={E.y - E.r - 30} fontSize={24} fontWeight={900} fill={C.orange} textAnchor="middle">两个极体 →</text>
			</G>
		</svg>
		<Bullets
			style={{left: 880, right: 90, top: 180}}
			fontSize={30}
			gap={22}
			items={[
				{at: fe1.from, children: <>获能的精子释放<Hl c={C.orange}>多种酶</Hl>，溶解卵细胞膜外的结构，接触卵细胞膜</>},
				{at: fe2.from, color: C.red, children: <>第一道屏障：<Hl>透明带的生理反应</Hl>，阻止后来的精子进入透明带</>},
				{at: fe3.from, color: C.red, children: <>第二道屏障：<Hl>卵细胞膜的生理反应</Hl>，拒绝其他精子进入卵内</>},
				{at: fe4.from, color: C.green, children: <>形成雄原核；卵子完成减数分裂Ⅱ、排出第二极体，形成雌原核 → 融合成<Hl c={C.green}>受精卵</Hl></>},
			]}
		/>
		<Tip at={fe5.from} top={735} label="解题方法">
			防止多精入卵：<Hl>透明带的生理反应</Hl> + <Hl>卵细胞膜的生理反应</Hl>，两道屏障
		</Tip>
		<Narration t={t} />
	</Scene>
);

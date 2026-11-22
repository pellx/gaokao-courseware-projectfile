import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.fat;
const {ft1, ft2, ft3, ft4, ft5} = t.cue;

// A few cotyledon cells with orange fat droplets.
const CELLS = [0, 1, 2, 3, 4, 5];
const DROPS = [[40, 50], [90, 40], [70, 95], [120, 100], [35, 120], [110, 60]];

export const Fat: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">检测脂肪（苏丹Ⅲ染液）</Header>
		<Flow
			style={{left: 90, top: 175}}
			fontSize={33}
			rows={[
				[
					{label: '花生子叶切薄片', color: C.brown, at: ft2.from},
					{label: '苏丹Ⅲ染液染色', note: '约 3 min', color: C.orange, at: ft2.from + 40},
					{label: '50% 酒精洗去浮色', color: C.red, at: ft3.from},
					{label: '盖盖玻片，显微镜观察', at: ft4.from},
				],
			]}
		/>
		<Appear at={ft1.from} style={{position: 'absolute', left: 90, top: 340, fontSize: 40, fontWeight: 800}}>
			脂肪 ＋ 苏丹Ⅲ染液 → <Hl c={C.orange}>橘黄色</Hl>
		</Appear>
		<Appear at={ft4.from} style={{position: 'absolute', left: 1080, top: 330}}>
			<svg width={720} height={330} viewBox="0 0 720 330">
				{CELLS.map((i) => {
					const x = 10 + (i % 3) * 235;
					const y = 10 + Math.floor(i / 3) * 155;
					return (
						<g key={i}>
							<rect x={x} y={y} width={225} height={145} rx={16} fill={C.panel} stroke={C.brown} strokeWidth={4} />
							{DROPS.map(([dx, dy], k) => (
								<circle key={k} cx={x + dx + (i % 2) * 12} cy={y + dy * 0.9} r={13 + ((k + i) % 3) * 4} fill={C.orange} />
							))}
						</g>
					);
				})}
			</svg>
			<div style={{fontSize: 30, fontWeight: 800, color: C.orange, textAlign: 'center'}}>橘黄色的脂肪颗粒</div>
		</Appear>
		<Appear at={ft3.from + 30} style={{position: 'absolute', left: 90, top: 430, width: 920, fontSize: 32, fontWeight: 700, lineHeight: 1.6, color: C.text}}>
			酒精的作用：<Hl>洗去浮色</Hl>（苏丹Ⅲ能溶于酒精）
		</Appear>
		<Tip at={ft5.from} top={720} label="易错">
			观察切片中的<Hl>脂肪颗粒</Hl>才用显微镜；检测<Hl c={C.orange}>组织样液</Hl>直接观察颜色，不用显微镜
		</Tip>
		<Narration t={t} />
	</Scene>
);

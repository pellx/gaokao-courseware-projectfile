import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.structure;
const {st1, st2, st3, st4, st5} = t.cue;

// A fused cell: membrane proteins as dots, red on one half and green on the other, or mixed.
const dots = (cx: number, cy: number, mixed: boolean) =>
	Array.from({length: 20}, (_, i) => {
		const a = (i / 20) * Math.PI * 2;
		const left = Math.cos(a) < 0;
		const color = mixed ? (i % 2 ? C.red : C.green) : left ? C.red : C.green;
		return <circle key={i} cx={cx + Math.cos(a) * 110} cy={cy + Math.sin(a) * 90} r={11} fill={color} />;
	});

export const Structure: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">对细胞膜结构的探索</Header>
		<Appear at={st1.from} style={{position: 'absolute', left: 90, top: 170, width: 620, height: 450, boxSizing: 'border-box', border: `5px solid ${C.brown}`, borderRadius: 24, padding: '18px 24px'}}>
			<div style={{fontSize: 34, fontWeight: 900, color: C.brown}}>罗伯特森（电镜）</div>
			<div style={{display: 'flex', flexDirection: 'column', gap: 8, marginTop: 20}}>
				{['暗', '亮', '暗'].map((s, i) => (
					<div key={i} style={{height: 50, borderRadius: 10, background: s === '暗' ? '#6b5a4a' : '#f3ece2', color: s === '暗' ? '#fff' : C.text, fontSize: 28, fontWeight: 900, display: 'flex', alignItems: 'center', paddingLeft: 20}}>
						{s}　{['蛋白质', '脂质', '蛋白质'][i]}
					</div>
				))}
			</div>
			<Appear at={st2.from} dy={0}>
				<div style={{fontSize: 30, fontWeight: 700, marginTop: 20, lineHeight: 1.5}}>
					认为是<Hl>静态的统一结构</Hl>
					<br />
					无法解释细胞生长、变形虫运动
				</div>
			</Appear>
		</Appear>
		<Appear at={st3.from} style={{position: 'absolute', left: 760, top: 170, width: 1070, height: 450, boxSizing: 'border-box', border: `5px solid ${C.red}`, borderRadius: 24, padding: '18px 24px'}}>
			<div style={{fontSize: 34, fontWeight: 900, color: C.red}}>人鼠细胞融合实验（荧光标记）</div>
			<svg width={1010} height={330} viewBox="0 0 1010 330">
				<G at={st3.from}>
					<ellipse cx={200} cy={150} rx={130} ry={110} fill={C.panel} stroke={C.brown} strokeWidth={4} />
					{dots(200, 150, false)}
					<text x={200} y={300} fontSize={28} fontWeight={800} fill={C.muted} textAnchor="middle">刚融合</text>
				</G>
				<G at={st4.from}>
					<text x={505} y={140} fontSize={28} fontWeight={800} fill={C.muted} textAnchor="middle">37 ℃，40 min</text>
					<text x={505} y={190} fontSize={60} fontWeight={900} fill={C.muted} textAnchor="middle">→</text>
					<ellipse cx={810} cy={150} rx={130} ry={110} fill={C.panel} stroke={C.brown} strokeWidth={4} />
					{dots(810, 150, true)}
					<text x={810} y={300} fontSize={28} fontWeight={800} fill={C.red} textAnchor="middle">均匀分布 → 膜具有流动性</text>
				</G>
			</svg>
		</Appear>
		<Tip at={st5.from} top={670} label="易错">
			该实验证明<Hl>膜蛋白可以运动</Hl>；方法是<Hl c={C.orange}>荧光标记法</Hl>，不是同位素标记法
		</Tip>
		<Narration t={t} />
	</Scene>
);

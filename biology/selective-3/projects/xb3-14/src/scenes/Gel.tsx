import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.gel;
const {ge1, ge2, ge3, ge4, ge5} = t.cue;

const LANES = ['标准', '阳性对照', '阴性对照', '样品 1', '样品 2'];
const X0 = 150;
const DX = 130;
const TOP = 70;
// Band positions (y) for the size ladder and the target fragment.
const LADDER = [130, 190, 260, 340, 430];
const TARGET = 300;
const BAND = (x: number, y: number, color: string) => <rect x={x - 45} y={y - 9} width={90} height={18} rx={6} fill={color} />;

export const Gel: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">电泳结果的判读</Header>
		<svg width={1000} height={650} viewBox="0 0 860 560" style={{position: 'absolute', left: 40, top: 150}}>
			<G at={ge1.from}>
				<rect x={70} y={TOP} width={DX * LANES.length + 20} height={440} rx={14} fill="#f7efe2" stroke={C.line} strokeWidth={4} />
				{LANES.map((l, i) => (
					<g key={l}>
						<rect x={X0 + i * DX - 45} y={TOP + 14} width={90} height={18} rx={4} fill="#fff" stroke={C.muted} strokeWidth={3} />
						<text x={X0 + i * DX} y={TOP - 14} fontSize={22} fontWeight={900} fill={C.text} textAnchor="middle">{l}</text>
					</g>
				))}
				{LADDER.map((y) => BAND(X0, y, C.brown))}
				<text x={50} y={TOP + 30} fontSize={24} fontWeight={900} fill={C.text} textAnchor="end">－</text>
				<text x={50} y={TOP + 430} fontSize={24} fontWeight={900} fill={C.red} textAnchor="end">＋</text>
			</G>
			<G at={ge2.from}>
				<text x={X0 + DX * LANES.length + 30} y={TOP + 60} fontSize={24} fontWeight={900} fill={C.red}>大</text>
				<text x={X0 + DX * LANES.length + 30} y={TOP + 420} fontSize={24} fontWeight={900} fill={C.green}>小</text>
				<line x1={X0 + DX * LANES.length + 42} y1={TOP + 80} x2={X0 + DX * LANES.length + 42} y2={TOP + 390} stroke={C.muted} strokeWidth={4} />
			</G>
			<G at={ge3.from}>
				{BAND(X0 + 3 * DX, TARGET, C.orange)}
				<text x={X0 + 3 * DX} y={TARGET + 50} fontSize={22} fontWeight={900} fill={C.green} textAnchor="middle">✓ 含目的基因</text>
				<text x={X0 + 4 * DX} y={TARGET + 50} fontSize={22} fontWeight={900} fill={C.muted} textAnchor="middle">✗ 无条带</text>
			</G>
			<G at={ge4.from}>
				{BAND(X0 + DX, TARGET, C.green)}
			</G>
		</svg>
		<Bullets
			style={{left: 1080, right: 90, top: 190}}
			fontSize={29}
			gap={20}
			items={[
				{at: ge1.from, children: <>第 1 泳道：<Hl c={C.orange}>标准参照物</Hl>，用来估计片段大小</>},
				{at: ge2.from, color: C.red, children: <>离加样孔越远，DNA 分子<Hl c={C.green}>越小</Hl>；越近，<Hl>越大</Hl></>},
				{at: ge3.from, color: C.green, children: <>样品条带与目的基因大小<Hl c={C.green}>一致</Hl> → 扩增成功 / 含目的基因</>},
				{at: ge4.from, children: <><Hl c={C.green}>阳性对照</Hl>：以目的基因为模板；<Hl>阴性对照</Hl>：不加模板或用非转基因材料</>},
			]}
		/>
		<Tip at={ge5.from} top={770} label="解题方法">
			先看标准参照物<Hl c={C.orange}>定大小</Hl>，再看对照<Hl c={C.orange}>排除污染</Hl>，最后比较样品条带的位置
		</Tip>
		<Narration t={t} />
	</Scene>
);

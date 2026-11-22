import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.observe;
const {ob1, ob2, ob3, ob4} = t.cue;

const CHL = [0, 40, 80, 120, 160, 200, 240, 280, 320];

export const Observe: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">观察叶绿体和细胞质的流动</Header>
		<Bullets
			style={{left: 90, width: 1060, top: 190}}
			fontSize={32}
			gap={24}
			items={[
				{at: ob1.from, color: C.green, children: <>材料：<Hl c={C.green}>藓类的叶、黑藻的叶</Hl>（叶片薄，直接制片）</>},
				{at: ob2.from, color: C.orange, children: <>菠菜叶：撕取<Hl>稍带些叶肉的下表皮</Hl>（叶绿体大而数目少）</>},
				{at: ob3.from, color: C.red, children: <>以<Hl>叶绿体的运动</Hl>作为细胞质流动的标志；装片保持有水</>},
			]}
		/>
		<svg width={560} height={420} viewBox="0 0 560 420" style={{position: 'absolute', left: 1240, top: 170}}>
			<Defs />
			<G at={ob3.from}>
				<rect x={20} y={20} width={500} height={360} rx={30} fill={C.greenSoft} stroke={C.green} strokeWidth={6} />
				<ellipse cx={270} cy={200} rx={150} ry={110} fill="#fff" stroke={C.line} strokeWidth={4} />
				<text x={270} y={212} fontSize={28} fontWeight={800} fill={C.muted} textAnchor="middle">液泡</text>
				{CHL.map((a) => {
					const r = (a * Math.PI) / 180;
					return <ellipse key={a} cx={270 + Math.cos(r) * 205} cy={200 + Math.sin(r) * 145} rx={24} ry={15} fill={C.green} transform={`rotate(${a + 90} ${270 + Math.cos(r) * 205} ${200 + Math.sin(r) * 145})`} />;
				})}
				<path d="M120,80 A200,140 0 0 1 420,80" fill="none" stroke={C.red} strokeWidth={6} markerEnd="url(#arrow-red)" />
				<text x={270} y={415} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle">胞质环流（视野方向＝实际方向）</text>
			</G>
		</svg>
		<Tip at={ob4.from} top={650} label="易错">
			视野中环流方向与实际<Hl>相同</Hl>（旋转 180° 后方向不变）；观察叶绿体<Hl c={C.orange}>不需要染色</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

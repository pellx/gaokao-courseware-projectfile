import React from 'react';
import {Appear, Defs, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Bullets, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.plant;
const {pl1, pl2, pl3, pl4, pl5} = t.cue;

const P = {x: 170, y: 190, r: 120};
const arc = (a0: number, a1: number) => {
	const p = (a: number) => [P.x + P.r * Math.cos((a * Math.PI) / 180), P.y + P.r * Math.sin((a * Math.PI) / 180)];
	const [x0, y0] = p(a0);
	const [x1, y1] = p(a1);
	return `M${x0},${y0} A${P.r},${P.r} 0 0 1 ${x1},${y1}`;
};

export const Plant: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">导入植物细胞：农杆菌转化法</Header>
		<svg width={1000} height={420} viewBox="0 0 1000 420" style={{position: 'absolute', left: 80, top: 170}}>
			<Defs />
			<G at={pl2.from}>
				<circle cx={P.x} cy={P.y} r={P.r} fill="none" stroke={C.brown} strokeWidth={12} />
				<path d={arc(-70, 10)} fill="none" stroke={C.orange} strokeWidth={26} />
				<text x={P.x} y={P.y + 10} fontSize={28} fontWeight={900} fill={C.brown} textAnchor="middle">Ti 质粒</text>
				<text x={P.x + 130} y={P.y - 110} fontSize={26} fontWeight={900} fill={C.orange}>T-DNA</text>
			</G>
			<G at={pl3.from}>
				<path d={arc(-45, -15)} fill="none" stroke={C.red} strokeWidth={26} />
				<text x={P.x + 150} y={P.y - 20} fontSize={24} fontWeight={900} fill={C.red}>目的基因插入 T-DNA</text>
				<Arrow x1={P.x + 150} y1={P.y + 60} x2={600} y2={P.y + 60} color={C.red} marker="arrow-red" />
				<text x={470} y={P.y + 40} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">农杆菌侵染</text>
				<rect x={620} y={60} width={340} height={280} rx={30} fill={C.greenSoft} stroke={C.green} strokeWidth={6} />
				<ellipse cx={790} cy={200} rx={110} ry={80} fill="#fff" stroke={C.green} strokeWidth={4} />
				<path d="M700,200 C730,170 760,230 790,200 S850,170 880,200" fill="none" stroke={C.brown} strokeWidth={8} />
				<rect x={772} y={190} width={40} height={20} fill={C.red} />
				<text x={790} y={380} fontSize={26} fontWeight={900} fill={C.green} textAnchor="middle">整合到植物细胞染色体 DNA 上</text>
			</G>
		</svg>
		<Appear at={pl1.from} style={{position: 'absolute', left: 1180, top: 170, width: 650, height: 420}}>
			<Photo src="images/gall.jpg" caption="农杆菌侵染植物形成的冠瘿" style={{width: '100%', height: '100%'}} pos="center 60%" />
		</Appear>
		<Bullets
			style={{left: 90, right: 90, top: 610}}
			fontSize={29}
			items={[{at: pl4.from, children: <>农杆菌能侵染<Hl c={C.orange}>双子叶植物和裸子植物</Hl>，对大多数单子叶植物无侵染能力；我国独创<Hl c={C.green}>花粉管通道法</Hl></>}]}
		/>
		<Tip at={pl5.from} top={700} label="易错">
			目的基因要插在 <Hl>T-DNA 内部</Hl>，不是 Ti 质粒的任意位置；整合位置是<Hl>植物细胞的染色体 DNA</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

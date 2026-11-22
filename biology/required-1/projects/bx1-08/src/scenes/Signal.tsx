import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.signal;
const {sg1, sg2, sg3, sg4} = t.cue;

const W = 540;
const Card: React.FC<{at: number; x: number; title: string; color: string; pic: React.ReactNode; children: React.ReactNode}> = ({at, x, title, color, pic, children}) => (
	<Appear at={at} style={{position: 'absolute', left: x, top: 170, width: W, height: 470, boxSizing: 'border-box', border: `5px solid ${color}`, borderRadius: 24, background: '#fff', padding: '16px 22px'}}>
		<div style={{fontSize: 34, fontWeight: 900, color}}>{title}</div>
		<svg width={W - 54} height={200} viewBox={`0 0 ${W - 54} 200`} style={{marginTop: 10}}>
			{pic}
		</svg>
		<div style={{fontSize: 29, fontWeight: 700, lineHeight: 1.5, marginTop: 8}}>{children}</div>
	</Appear>
);

export const Signal: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">细胞间信息交流的三种方式</Header>
		<Card
			at={sg1.from}
			x={90}
			title="① 化学物质传递"
			color={C.orange}
			pic={
				<>
					<circle cx={70} cy={100} r={62} fill={C.panel} stroke={C.brown} strokeWidth={4} />
					<text x={70} y={110} fontSize={24} fontWeight={800} fill={C.brown} textAnchor="middle">内分泌细胞</text>
					{[160, 210, 260, 310].map((cx, i) => (
						<circle key={cx} cx={cx} cy={100 + (i % 2 ? -14 : 14)} r={10} fill={C.orange} />
					))}
					<circle cx={420} cy={100} r={62} fill={C.panel} stroke={C.brown} strokeWidth={4} />
					<path d="M352,88 l14,12 l-14,12" fill="none" stroke={C.red} strokeWidth={6} />
					<text x={430} y={110} fontSize={24} fontWeight={800} fill={C.brown} textAnchor="middle">靶细胞</text>
					<text x={355} y={190} fontSize={24} fontWeight={800} fill={C.red} textAnchor="middle">受体</text>
				</>
			}
		>
			激素随血液运输，与靶细胞膜上的<Hl>受体</Hl>结合
		</Card>
		<Card
			at={sg2.from}
			x={690}
			title="② 细胞膜直接接触"
			color={C.red}
			pic={
				<>
					<circle cx={300} cy={100} r={92} fill={C.panel} stroke={C.brown} strokeWidth={4} />
					<text x={330} y={110} fontSize={26} fontWeight={800} fill={C.brown} textAnchor="middle">卵细胞</text>
					<ellipse cx={175} cy={100} rx={34} ry={22} fill={C.orange} />
					<path d="M141,100 C110,80 90,120 50,96" fill="none" stroke={C.orange} strokeWidth={5} />
					<text x={110} y={160} fontSize={26} fontWeight={800} fill={C.orange} textAnchor="middle">精子</text>
				</>
			}
		>
			相邻细胞膜接触：精子和卵细胞的<Hl>识别和结合</Hl>
		</Card>
		<Card
			at={sg3.from}
			x={1290}
			title="③ 形成通道"
			color={C.green}
			pic={
				<>
					<rect x={20} y={30} width={210} height={140} rx={12} fill={C.greenSoft} stroke={C.green} strokeWidth={5} />
					<rect x={256} y={30} width={210} height={140} rx={12} fill={C.greenSoft} stroke={C.green} strokeWidth={5} />
					{[70, 130].map((cy) => (
						<rect key={cy} x={224} y={cy - 7} width={38} height={14} fill={C.red} rx={4} />
					))}
					<text x={243} y={196} fontSize={24} fontWeight={800} fill={C.red} textAnchor="middle">胞间连丝</text>
				</>
			}
		>
			高等植物细胞之间通过<Hl c={C.green}>胞间连丝</Hl>相互连接
		</Card>
		<Tip at={sg4.from} top={680} label="易错">
			信息交流<Hl>不一定需要膜上的受体</Hl>（胞间连丝）；有些激素（如性激素）的受体在细胞内
		</Tip>
		<Narration t={t} />
	</Scene>
);

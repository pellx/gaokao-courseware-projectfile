import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {Defs} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.process;
const {pr1, pr2, pr3, pr4, pr5} = t.cue;
const AA = [C.green, C.orange, C.brown, C.red];

export const Process: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">翻译的过程</Header>
		<svg width={900} height={520} viewBox="0 0 900 520" style={{position: 'absolute', left: 80, top: 165}}>
			<Defs />
			<G at={pr1.from}>
				<rect x={20} y={380} width={840} height={36} rx={8} fill={C.redSoft} stroke={C.brown} strokeWidth={4} />
				<text x={30} y={460} fontSize={26} fontWeight={900} fill={C.brown}>5′</text>
				<text x={860} y={460} fontSize={26} fontWeight={900} fill={C.brown} textAnchor="end">3′ mRNA</text>
				<ellipse cx={420} cy={330} rx={180} ry={70} fill={C.orangeSoft} stroke={C.orange} strokeWidth={5} />
				<ellipse cx={420} cy={250} rx={130} ry={60} fill={C.orangeSoft} stroke={C.orange} strokeWidth={5} />
				<text x={620} y={250} fontSize={28} fontWeight={900} fill={C.orange}>核糖体</text>
			</G>
			<G at={pr2.from}>
				{[0, 1, 2].map((i) => (
					<circle key={i} cx={240 + i * 60} cy={110 - i * 10} r={24} fill={AA[i]} />
				))}
				<circle cx={420} cy={100} r={24} fill={AA[3]} />
				<text x={300} y={50} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="middle">肽链（肽键相连）</text>
				<line x1={420} y1={124} x2={420} y2={200} stroke={C.orange} strokeWidth={8} />
				<text x={470} y={160} fontSize={24} fontWeight={800} fill={C.orange}>tRNA</text>
			</G>
			<G at={pr3.from}>
				<Arrow x1={560} y1={470} x2={760} y2={470} marker="arrow-red" color={C.red} />
				<text x={660} y={510} fontSize={24} fontWeight={900} fill={C.red} textAnchor="middle">核糖体移动方向</text>
			</G>
		</svg>
		<Rows
			style={{left: 1020, right: 90, top: 180}}
			fontSize={29}
			gap={14}
			items={[
				{at: pr1.from, color: C.green, title: '起始', children: <>mRNA 与核糖体结合，tRNA 识别起始密码子 <Hl c={C.green}>AUG</Hl></>},
				{at: pr2.from, color: C.red, title: '延伸', children: <>相邻氨基酸脱水缩合形成<Hl>肽键</Hl></>},
				{at: pr3.from, color: C.orange, title: '移动', children: <>核糖体沿 mRNA 移动，空载 tRNA 离开</>},
				{at: pr4.from, color: C.red, title: '终止', children: <>遇到<Hl>终止密码子</Hl>，肽链脱离</>},
			]}
		/>
		<Tip at={pr5.from} top={720} label="考法" fontSize={32}>
			<Hl>肽链越长的核糖体越早开始翻译</Hl> → 核糖体向肽链长的一侧移动（mRNA 5′ → 3′）
		</Tip>
		<Narration t={t} />
	</Scene>
);

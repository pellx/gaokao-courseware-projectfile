import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Bullets, Tip} from '../components/lib';
import {Membrane} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.active;
const {ac1, ac2, ac3} = t.cue;

const OUT = [[80, 40], [250, 70], [520, 50]];
const IN = [[60, 330], [130, 360], [200, 320], [270, 370], [420, 330], [480, 365], [560, 325], [620, 360], [690, 330]];

export const Active: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">主动运输的特点</Header>
		<svg width={800} height={420} viewBox="0 0 800 420" style={{position: 'absolute', left: 90, top: 165}}>
			<Defs />
			<G at={ac1.from}>
				<Membrane x={0} y={200} width={780} proteins={[{x: 360, w: 110, kind: 'through', color: C.red, label: '载体'}]} />
				{OUT.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={13} fill={C.orange} />)}
				{IN.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={13} fill={C.orange} />)}
				<text x={790} y={40} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="end">低浓度一侧</text>
				<text x={790} y={410} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="end">高浓度一侧</text>
			</G>
			<G at={ac2.from}>
				<Arrow x1={360} y1={60} x2={360} y2={340} trim={[0, 0]} color={C.red} marker="arrow-red" width={8} />
				<text x={430} y={300} fontSize={30} fontWeight={900} fill={C.red}>能量</text>
			</G>
		</svg>
		<Bullets
			style={{left: 960, right: 90, top: 200}}
			fontSize={33}
			gap={26}
			items={[
				{at: ac1.from, color: C.red, children: <><Hl>逆浓度梯度</Hl>运输</>},
				{at: ac1.from + 40, color: C.red, children: <>需要<Hl>载体蛋白</Hl>协助</>},
				{at: ac1.from + 80, color: C.red, children: <>消耗细胞内化学反应释放的<Hl>能量</Hl></>},
				{at: ac2.from, color: C.orange, children: <>载体蛋白结合物质后<Hl c={C.orange}>空间结构改变</Hl></>},
			]}
		/>
		<Tip at={ac3.from} top={660} label="易错">
			主动运输用<Hl>载体蛋白</Hl>，不用通道蛋白；能量主要来自<Hl c={C.orange}>细胞呼吸</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

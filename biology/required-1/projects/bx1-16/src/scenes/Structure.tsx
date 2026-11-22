import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Bullets, Tip} from '../components/lib';
import {Atp} from './atp';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.structure;
const {st1, st2, st3, st4} = t.cue;

const bracket = (x1: number, x2: number, y: number, label: string, color: string) => (
	<g>
		<path d={`M${x1},${y} v18 H${x2} v-18`} fill="none" stroke={color} strokeWidth={4} />
		<text x={(x1 + x2) / 2} y={y + 56} fontSize={30} fontWeight={900} fill={color} textAnchor="middle">{label}</text>
	</g>
);

export const Structure: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">ATP 的结构</Header>
		<svg width={800} height={420} viewBox="0 0 800 420" style={{position: 'absolute', left: 90, top: 190}}>
			<G at={st1.from}>
				<Atp />
				<text x={400} y={40} fontSize={40} fontWeight={900} fill={C.red} textAnchor="middle">A—P~P~P</text>
			</G>
			<G at={st2.from}>
				{bracket(30, 318, 180, '腺苷（A）', C.green)}
				{bracket(30, 750, 270, 'ATP（腺苷三磷酸）', C.red)}
			</G>
		</svg>
		<Bullets
			style={{left: 960, right: 90, top: 210}}
			fontSize={32}
			gap={24}
			items={[
				{at: st1.from, color: C.red, children: <>ATP ＝ <Hl>腺苷三磷酸</Hl></>},
				{at: st2.from, color: C.green, children: <><Hl c={C.green}>A ＝ 腺苷</Hl> ＝ 腺嘌呤 ＋ 核糖；P ＝ 磷酸基团</>},
				{at: st3.from, color: C.orange, children: <>元素组成：C、H、O、N、P</>},
			]}
		/>
		<Tip at={st4.from} top={670} label="易错">
			ATP 中的“A”是<Hl>腺苷</Hl>；DNA、RNA 中的“A”是<Hl c={C.orange}>腺嘌呤</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

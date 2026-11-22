import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.age;
const {ag1, ag2, ag3, ag4, ag5} = t.cue;

const AGES = ['老年', '成年', '幼年'];
const BAR = 76;

// Age pyramid: bar widths for old, adult, young (top to bottom).
const Pyramid: React.FC<{cx: number; widths: number[]; color: string; name: string; note: string; at: number}> = ({cx, widths, color, name, note, at}) => (
	<G at={at}>
		{widths.map((w, i) => (
			<rect key={i} x={cx - w / 2} y={40 + i * (BAR + 8)} width={w} height={BAR} rx={8} fill={color} opacity={1 - i * 0.18} />
		))}
		<text x={cx} y={330} fontSize={40} fontWeight={900} fill={color} textAnchor="middle">{name}</text>
		<text x={cx} y={374} fontSize={26} fontWeight={700} fill={C.muted} textAnchor="middle">{note}</text>
	</G>
);

export const Age: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">年龄结构</Header>
		<Appear at={ag1.from} style={{position: 'absolute', left: 90, top: 170, fontSize: 32, fontWeight: 700}}>
			年龄结构：种群中<Hl c={C.orange}>各年龄期个体数目的比例</Hl>
		</Appear>
		<svg width={1740} height={400} viewBox="0 0 1740 400" style={{position: 'absolute', left: 90, top: 240}}>
			<G at={ag2.from}>
				{AGES.map((a, i) => (
					<text key={a} x={0} y={40 + i * (BAR + 8) + BAR / 2 + 10} fontSize={28} fontWeight={800} fill={C.muted}>{a}</text>
				))}
			</G>
			<Pyramid cx={380} widths={[90, 210, 360]} color={C.green} name="增长型" note="幼多老少 → 密度增大" at={ag2.from} />
			<Pyramid cx={900} widths={[230, 270, 300]} color={C.orange} name="稳定型" note="比例适中 → 保持稳定" at={ag3.from} />
			<Pyramid cx={1420} widths={[330, 250, 120]} color={C.red} name="衰退型" note="幼少老多 → 密度减小" at={ag4.from} />
		</svg>
		<Appear at={ag5.from} style={{position: 'absolute', left: 90, right: 90, top: 680}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31}}>
				年龄结构只能<Hl c={C.orange}>预测</Hl>趋势；稳定型的种群数量<Hl>不一定</Hl>稳定，还受气候、食物、天敌等影响
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

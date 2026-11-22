import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.detect;
const {de1, de2, de3, de4} = t.cue;

const GRAY_GREEN = '#7f9670';

// Test tube with coloured liquid, centred on x.
const Tube: React.FC<{x: number; fill: string; label: string}> = ({x, fill, label}) => (
	<g>
		<path d={`M${x - 36},20 V200 A36,36 0 0 0 ${x + 36},200 V20`} fill="#fff" stroke={C.text} strokeWidth={5} />
		<path d={`M${x - 33},100 V200 A33,33 0 0 0 ${x + 33},200 V100 z`} fill={fill} />
		<text x={x} y={290} fontSize={30} fontWeight={900} fill={fill} textAnchor="middle">{label}</text>
	</g>
);

export const Detect: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">发酵结果的检测</Header>
		<svg width={990} height={416} viewBox="0 0 760 320" style={{position: 'absolute', left: 90, top: 190}}>
			<Defs />
			<G at={de1.from}>
				<Tube x={110} fill={C.orange} label="橙色" />
				<Arrow x1={190} y1={130} x2={540} y2={130} color={C.muted} />
				<text x={365} y={100} fontSize={28} fontWeight={800} fill={C.text} textAnchor="middle">酸性条件 + 酒精</text>
				<text x={365} y={180} fontSize={24} fontWeight={700} fill={C.muted} textAnchor="middle">重铬酸钾溶液</text>
				<Tube x={620} fill={GRAY_GREEN} label="灰绿色" />
			</G>
		</svg>
		<Cards
			left={1150}
			top={190}
			height={190}
			fontSize={33}
			titleSize={34}
			items={[{title: '果醋', color: C.orange, at: de2.from, body: <>测 <Hl c={C.orange}>pH</Hl>：明显下降；闻气味：有酸味</>}]}
		/>
		<Cards
			left={1150}
			top={410}
			height={190}
			fontSize={33}
			titleSize={34}
			items={[{title: '菌种', color: C.green, at: de3.from, body: <>取发酵液制片，<Hl c={C.green}>显微镜观察</Hl>菌体形态</>}]}
		/>
		<Tip at={de4.from} top={660} label="易错">
			<Hl>葡萄糖</Hl>也能与酸性重铬酸钾反应变色，所以要适当<Hl c={C.orange}>延长发酵时间</Hl>，耗尽葡萄糖后再检测酒精
		</Tip>
		<Narration t={t} />
	</Scene>
);

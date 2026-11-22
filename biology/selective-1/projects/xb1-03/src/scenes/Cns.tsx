import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.cns;
const {cs1, cs2, cs3, cs4, cs5, cs6, cs7} = t.cue;

const FILL = '#f6d7b0';
const EDGE = C.brown;

// Schematic side view of the brain (facing left) with the spinal cord below.
// The region being described gets a thick coloured outline.
const Brain: React.FC = () => {
	const frame = useCurrentFrame();
	const on = (cue: {from: number; to: number}) => frame >= cue.from && frame < cue.to + 20;
	const edge = (cue: {from: number; to: number}, color: string) => (on(cue) ? {stroke: color, strokeWidth: 10} : {stroke: EDGE, strokeWidth: 4});
	return (
		<svg width={760} height={700} viewBox="0 0 760 700">
			<ellipse cx={545} cy={432} rx={120} ry={74} fill="#ecc595" {...edge(cs3, C.orange)} />
			{[0, 1, 2].map((i) => (
				<path key={i} d={`M${450 + i * 10},${445 + i * 18} Q545,${470 + i * 18} ${640 - i * 10},${445 + i * 18}`} fill="none" stroke={EDGE} strokeWidth={3} opacity={0.5} />
			))}
			<path d="M362,380 L432,380 L422,560 L372,560 Z" fill="#efcfa8" {...edge(cs4, C.green)} />
			<rect x={374} y={552} width={44} height={140} rx={18} fill="#efcfa8" {...edge(cs6, C.red)} />
			<ellipse cx={380} cy={250} rx={300} ry={200} fill={FILL} {...edge(cs2, C.red)} />
			{['M150,200 Q210,150 270,200', 'M300,120 Q360,80 420,120', 'M460,190 Q520,140 580,190', 'M200,320 Q260,270 320,320', 'M420,300 Q480,250 540,300'].map((d) => (
				<path key={d} d={d} fill="none" stroke={EDGE} strokeWidth={3} opacity={0.45} />
			))}
			<ellipse cx={322} cy={418} rx={50} ry={28} fill={on(cs5) ? C.orange : '#e8b98a'} {...edge(cs5, C.brown)} />
			<text x={380} y={240} fontSize={52} fontWeight={900} fill={EDGE} textAnchor="middle">大脑</text>
			<text x={380} y={292} fontSize={26} fontWeight={700} fill={EDGE} textAnchor="middle">（表面为大脑皮层）</text>
			<text x={575} y={478} fontSize={34} fontWeight={900} fill={EDGE} textAnchor="middle">小脑</text>
			<line x1={300} y1={430} x2={170} y2={520} stroke={EDGE} strokeWidth={3} />
			<text x={160} y={552} fontSize={34} fontWeight={900} fill={EDGE} textAnchor="middle">下丘脑</text>
			<line x1={420} y1={520} x2={560} y2={590} stroke={EDGE} strokeWidth={3} />
			<text x={610} y={602} fontSize={34} fontWeight={900} fill={EDGE} textAnchor="middle">脑干</text>
			<line x1={374} y1={650} x2={250} y2={660} stroke={EDGE} strokeWidth={3} />
			<text x={200} y={672} fontSize={34} fontWeight={900} fill={EDGE} textAnchor="middle">脊髓</text>
		</svg>
	);
};

export const Cns: React.FC = () => {
	const frame = useCurrentFrame();
	return (
		<Scene duration={t.duration}>
			<Header tag="考点一">中枢神经系统：脑和脊髓</Header>
			<Appear at={cs1.from} style={{position: 'absolute', left: 90, top: 160}}>
				<Brain />
			</Appear>
			<div style={{position: 'absolute', left: 900, right: 90, top: 170}}>
				<Table
					head={['结构', '功能']}
					cols="0.75fr 2fr"
					at={cs2.from - 10}
					fontSize={30}
					rowHeight={76}
					focus={frame >= cs7.from}
					rows={[
						{cells: ['大脑皮层', '调节机体活动的最高级中枢'], at: cs2.from},
						{cells: ['小脑', '协调运动，维持身体平衡'], at: cs3.from, key: true},
						{cells: ['脑干', '呼吸、心脏功能的基本活动中枢'], at: cs4.from, key: true},
						{cells: ['下丘脑', '体温、水平衡调节中枢；与生物节律有关'], at: cs5.from, key: true},
						{cells: ['脊髓', '脑与躯干、内脏的联系通路；低级中枢'], at: cs6.from},
					]}
				/>
				<Appear at={cs7.from} style={{marginTop: 24}}>
					<Callout label="考法" style={{fontSize: 31}}>
						醉酒走路不稳 → <Hl c={C.orange}>小脑</Hl>；呼吸、心跳停止 → <Hl c={C.green}>脑干</Hl>；体温、水盐失衡 → <Hl c={C.brown}>下丘脑</Hl>
					</Callout>
				</Appear>
			</div>
			<Narration t={t} />
		</Scene>
	);
};

import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.soil;
const {so1, so2, so3, so4, so5} = t.cue;

// Berlese funnel: lamp, funnel with soil and mesh, collecting bottle.
const Funnel: React.FC = () => (
	<g>
		<path d="M120,40 h120 l-20,40 h-80 z" fill={C.gold} />
		<circle cx={180} cy={92} r={16} fill="#ffe08a" stroke={C.gold} strokeWidth={4} />
		<text x={265} y={70} fontSize={24} fontWeight={800} fill={C.gold}>电灯（热、光）</text>
		<path d="M60,140 h240 l-100,150 v60 h-40 v-60 z" fill="#fff" stroke={C.text} strokeWidth={5} />
		<rect x={80} y={150} width={200} height={60} fill="#b98b5c" />
		<line x1={92} y1={214} x2={268} y2={214} stroke={C.text} strokeWidth={3} strokeDasharray="6 5" />
		<text x={310} y={185} fontSize={24} fontWeight={800} fill={C.brown}>土壤样品</text>
		<text x={310} y={222} fontSize={22} fontWeight={700} fill={C.muted}>金属网</text>
		<rect x={140} y={360} width={80} height={90} rx={10} fill={C.orangeSoft} stroke={C.orange} strokeWidth={4} />
		<text x={240} y={415} fontSize={24} fontWeight={800} fill={C.orange}>70% 酒精</text>
	</g>
);

export const Soil: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">土壤中小动物类群丰富度的研究</Header>
		<div style={{position: 'absolute', left: 90, top: 175, width: 1060, display: 'flex', flexDirection: 'column', gap: 20, fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
			<Appear at={so1.from}>
				特点：<Hl c={C.orange}>活动能力较强、身体微小</Hl> → 不用样方法、标记重捕法
			</Appear>
			<Appear at={so2.from}>
				采集调查：<Hl>取样器取样法</Hl>
			</Appear>
			<Appear at={so3.from}>
				统计丰富度：
				<br />· <Hl c={C.orange}>记名计算法</Hl>：个体较大、种群数量有限的物种
				<br />· <Hl c={C.orange}>目测估计法</Hl>：按多度等级（非常多、多、较多、较少、少、很少）估计
			</Appear>
		</div>
		<svg width={520} height={470} viewBox="0 0 520 470" style={{position: 'absolute', left: 1240, top: 170}}>
			<Defs />
			<G at={so4.from}>
				<Funnel />
				<Arrow x1={180} y1={120} x2={180} y2={300} color={C.red} marker="arrow-red" width={5} />
				<text x={215} y={325} fontSize={24} fontWeight={900} fill={C.red}>小动物向下</text>
			</G>
		</svg>
		<Appear at={so4.from} style={{position: 'absolute', left: 90, top: 560, fontSize: 30, fontWeight: 700}}>
			<Hl c={C.green}>诱虫器</Hl>：利用<Hl>趋暗、趋湿、避高温</Hl>；体型较小的用吸虫器
		</Appear>
		<Appear at={so5.from} style={{position: 'absolute', left: 90, right: 90, top: 680}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				电灯是为了<Hl>驱赶</Hl>小动物向下，<Hl>不是</Hl>利用趋光性；收集瓶中加入体积分数为 <Hl c={C.orange}>70% 的酒精</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Appear, Callout, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {Plot, sample} from '../components/plot';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.niche;
const {nc1, nc2, nc3, nc4, nc5} = t.cue;

const bell = (m: number, s: number) => (x: number) => 0.85 * Math.exp(-((x - m) ** 2) / (2 * s * s));

export const Niche: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">生态位</Header>
		<Appear at={nc1.from} style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Card style={{fontSize: 30, fontWeight: 700}}>
				<Hl>生态位</Hl>：物种在群落中的地位或作用——<Hl c={C.orange}>空间位置、占用资源、与其他物种的关系</Hl>
			</Card>
		</Appear>
		<div style={{position: 'absolute', left: 90, top: 300, width: 830, display: 'flex', flexDirection: 'column', gap: 20}}>
			<Appear at={nc2.from}>
				<div style={{fontSize: 28, fontWeight: 700, lineHeight: 1.5}}>
					<Hl c={C.green}>植物</Hl>：出现频率、种群密度、植株高度、与其他物种的关系
				</div>
			</Appear>
			<Appear at={nc3.from}>
				<div style={{fontSize: 28, fontWeight: 700, lineHeight: 1.5}}>
					<Hl c={C.orange}>动物</Hl>：<Hl c={C.orange}>栖息地、食物、天敌</Hl>、与其他物种的关系
				</div>
			</Appear>
		</div>
		<div style={{position: 'absolute', left: 940, top: 290}}>
			<Plot
				id="nc"
				w={880}
				h={360}
				xLabel="食物大小"
				yLabel="利用程度"
				at={nc4.from}
				fontSize={24}
				curves={[
					{pts: sample(bell(0.35, 0.12)), color: C.green, at: nc4.from, label: '物种甲', lx: 0.2, ly: 0.9},
					{pts: sample(bell(0.6, 0.12)), color: C.orange, at: nc4.from + 15, label: '物种乙', lx: 0.78, ly: 0.9},
				]}
				dots={[{x: 0.475, y: bell(0.35, 0.12)(0.475), color: C.red, at: nc4.from + 40, label: '重叠 → 竞争', dy: 52}]}
			/>
		</div>
		<Appear at={nc5.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="考法" style={{fontSize: 30}}>
				每种生物占据相对稳定的生态位 → <Hl c={C.green}>充分利用环境资源</Hl>，是<Hl c={C.green}>协同进化</Hl>的结果
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

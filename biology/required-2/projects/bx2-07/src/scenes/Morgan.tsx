import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {Cross} from '../components/gene';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.morgan;
const {mg1, mg2, mg3, mg4} = t.cue;
const W = C.brown;

export const Morgan: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">摩尔根的果蝇眼色杂交实验</Header>
		<svg width={900} height={540} viewBox="0 0 900 540" style={{position: 'absolute', left: 80, top: 165}}>
			<Cross
				fontSize={42}
				labelX={0}
				rows={[
					{label: 'P', y: 70, at: mg2.from, items: [{x: 260, geno: '红眼♀', color: C.red}, {x: 640, geno: '白眼♂', color: W}], signs: [{x: 450, text: '×'}]},
					{label: 'F1', y: 240, at: mg2.from + 40, items: [{x: 450, geno: '红眼（♀、♂）', color: C.red}]},
					{
						label: 'F2',
						y: 430,
						at: mg3.from,
						items: [
							{x: 220, geno: '红眼♀', pheno: '2', color: C.red},
							{x: 450, geno: '红眼♂', pheno: '1', color: C.red},
							{x: 680, geno: '白眼♂', pheno: '1', color: W},
						],
					},
				]}
				links={[
					[[0, 0], [1, 0]],
					[[0, 1], [1, 0]],
					[[1, 0], [2, 0]],
					[[1, 0], [2, 1]],
					[[1, 0], [2, 2]],
				]}
			/>
		</svg>
		<Rows
			style={{left: 1020, right: 90, top: 180}}
			fontSize={30}
			gap={18}
			items={[
				{at: mg1.from, color: C.green, title: '材料', children: <>易饲养、繁殖快、子代多、性状易区分、染色体 4 对</>},
				{at: mg2.from + 40, color: C.red, title: <>F<sub>1</sub></>, children: <>全为红眼 → <Hl>红眼为显性</Hl></>},
				{at: mg3.from, color: C.red, title: <>F<sub>2</sub></>, children: <>红眼∶白眼 ＝ <Hl>3∶1</Hl>，符合分离定律</>},
				{at: mg4.from, color: C.brown, title: '问题', children: <><Hl c={C.brown}>白眼全是雄性</Hl>，眼色与性别相关联</>},
			]}
		/>
		<Tip at={mg4.from} top={740} label="考法" fontSize={33}>
			F<sub>2</sub> 的<Hl>白眼果蝇全是雄性</Hl> → 控制眼色的基因与<Hl>性别相关联</Hl>，这是摩尔根提出假说的出发点
		</Tip>
		<Narration t={t} />
	</Scene>
);

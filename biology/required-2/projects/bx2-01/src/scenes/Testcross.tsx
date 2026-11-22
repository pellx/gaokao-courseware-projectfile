import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {Cross} from '../components/gene';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.testcross;
const {tc1, tc2, tc3, tc4} = t.cue;

export const Testcross: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">测交实验</Header>
		<svg width={860} height={560} viewBox="0 0 860 560" style={{position: 'absolute', left: 90, top: 160}}>
			<Cross
				fontSize={46}
				labelX={0}
				rows={[
					{label: '测交', y: 70, at: tc1.from, items: [{x: 290, geno: 'Dd', pheno: '高茎（F1）', color: C.orange}, {x: 650, geno: 'dd', pheno: '矮茎', color: C.green}], signs: [{x: 470, text: '×'}]},
					{label: '配子', y: 280, at: tc2.from, items: [{x: 200, geno: 'D', color: C.red}, {x: 380, geno: 'd', color: C.green}, {x: 650, geno: 'd', color: C.green}]},
					{label: '子代', y: 450, at: tc3.from, items: [{x: 330, geno: 'Dd', pheno: '高茎', color: C.orange}, {x: 610, geno: 'dd', pheno: '矮茎', color: C.green}]},
				]}
				links={[
					[[0, 0], [1, 0]],
					[[0, 0], [1, 1]],
					[[0, 1], [1, 2]],
					[[1, 0], [2, 0]],
					[[1, 2], [2, 0]],
					[[1, 1], [2, 1]],
					[[1, 2], [2, 1]],
				]}
			/>
			<G at={tc3.from}>
				<text x={470} y={462} fontSize={40} fontWeight={900} fill={C.red} textAnchor="middle">1 ∶ 1</text>
			</G>
		</svg>
		<Cards
			left={1010}
			top={190}
			height={230}
			fontSize={32}
			items={[{title: '预期', color: C.orange, at: tc3.from, body: <>高茎∶矮茎 = <Hl c={C.orange}>1∶1</Hl></>, note: '由假说演绎推出'}]}
		/>
		<Cards
			left={1010}
			top={445}
			height={230}
			fontSize={32}
			items={[{title: '实际', color: C.red, at: tc3.from + 60, body: <>87 株高茎、79 株矮茎 ≈ <Hl>1∶1</Hl></>, note: '证明解释正确'}]}
		/>
		<Tip at={tc4.from} top={735} label="考法" fontSize={32}>
			测交可检验 F<sub>1</sub> 的<Hl>遗传因子组成</Hl>和产生的<Hl>配子类型及比例</Hl>；不能证明雌雄配子数量相等
		</Tip>
		<Narration t={t} />
	</Scene>
);

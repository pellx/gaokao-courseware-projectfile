import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {Cross} from '../components/gene';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.cross;
const {cr1, cr2, cr3, cr4, cr5} = t.cue;

export const Cross1: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">一对相对性状的杂交实验</Header>
		<svg width={900} height={560} viewBox="0 0 900 560" style={{position: 'absolute', left: 90, top: 160}}>
			<Cross
				fontSize={46}
				labelX={10}
				rows={[
					{label: 'P', y: 70, at: cr1.from, items: [{x: 260, geno: '高茎', color: C.red}, {x: 640, geno: '矮茎', color: C.green}], signs: [{x: 450, text: '×'}]},
					{label: 'F1', y: 250, at: cr1.from + 30, items: [{x: 450, geno: '高茎', color: C.red}]},
					{label: 'F2', y: 450, at: cr2.from, items: [{x: 260, geno: '高茎', pheno: '787 株', color: C.red}, {x: 640, geno: '矮茎', pheno: '277 株', color: C.green}]},
				]}
				links={[
					[[0, 0], [1, 0]],
					[[0, 1], [1, 0]],
					[[1, 0], [2, 0]],
					[[1, 0], [2, 1]],
				]}
			/>
			<G at={cr2.from}>
				<text x={450} y={365} fontSize={36} fontWeight={900} fill={C.muted} textAnchor="middle">⊗ 自交</text>
				<rect x={355} y={470} width={190} height={74} rx={16} fill={C.redSoft} stroke={C.red} strokeWidth={4} />
				<text x={450} y={522} fontSize={44} fontWeight={900} fill={C.red} textAnchor="middle">≈ 3∶1</text>
			</G>
		</svg>
		<Rows
			style={{left: 1040, right: 90, top: 190}}
			fontSize={31}
			gap={24}
			items={[
				{at: cr1.from + 30, color: C.red, title: <>F<sub>1</sub></>, children: <>全为<Hl>高茎</Hl>（显性性状）</>},
				{at: cr2.from, color: C.red, title: <>F<sub>2</sub></>, children: <>出现性状分离，高∶矮 ≈ <Hl>3∶1</Hl></>},
				{at: cr3.from, color: C.orange, title: '正反交', children: <>高♀×矮♂ 与 矮♀×高♂ <Hl c={C.orange}>结果相同</Hl></>},
				{at: cr4.from, color: C.orange, title: '其他 6 对', children: <>F<sub>2</sub> 也都接近 <Hl c={C.orange}>3∶1</Hl></>},
			]}
		/>
		<Tip at={cr5.from} top={740} label="考法" fontSize={32}>
			F<sub>1</sub> 只表现<Hl>显性性状</Hl>，F<sub>2</sub> 出现<Hl>性状分离</Hl>（3∶1）；3∶1 是<Hl>大量统计</Hl>的结果，个体数少时不一定符合
		</Tip>
		<Narration t={t} />
	</Scene>
);

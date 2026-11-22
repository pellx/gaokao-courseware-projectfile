import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {Cross} from '../components/gene';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.exp;
const {ex1, ex2, ex3, ex4, ex5} = t.cue;
const XS = [140, 340, 540, 740];

export const Exp: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">两对相对性状的杂交实验</Header>
		<svg width={880} height={560} viewBox="0 0 880 560" style={{position: 'absolute', left: 80, top: 160}}>
			<Cross
				fontSize={40}
				labelX={0}
				rows={[
					{label: 'P', y: 60, at: ex1.from, items: [{x: 240, geno: '黄色圆粒', color: C.red}, {x: 640, geno: '绿色皱粒', color: C.brown}], signs: [{x: 440, text: '×'}]},
					{label: 'F1', y: 220, at: ex1.from + 30, items: [{x: 440, geno: '黄色圆粒', color: C.red}]},
					{
						label: 'F2',
						y: 420,
						at: ex2.from,
						items: [
							{x: XS[0], geno: '黄圆', pheno: '315', color: C.red},
							{x: XS[1], geno: '黄皱', pheno: '101', color: C.orange},
							{x: XS[2], geno: '绿圆', pheno: '108', color: C.green},
							{x: XS[3], geno: '绿皱', pheno: '32', color: C.brown},
						],
					},
				]}
				links={[
					[[0, 0], [1, 0]],
					[[0, 1], [1, 0]],
					...XS.map((_, i) => [[1, 0], [2, i]] as [[number, number], [number, number]]),
				]}
			/>
			<G at={ex2.from}>
				<text x={572} y={330} fontSize={32} fontWeight={900} fill={C.muted} textAnchor="middle">⊗</text>
				<text x={440} y={530} fontSize={40} fontWeight={900} fill={C.red} textAnchor="middle">9 ∶ 3 ∶ 3 ∶ 1</text>
			</G>
			<G at={ex3.from}>
				<rect x={XS[1] - 70} y={372} width={340} height={110} rx={14} fill="none" stroke={C.orange} strokeWidth={4} strokeDasharray="10 7" />
			</G>
		</svg>
		<Rows
			style={{left: 1000, right: 90, top: 190}}
			fontSize={31}
			gap={22}
			items={[
				{at: ex1.from + 30, color: C.red, title: <>F<sub>1</sub></>, children: <>全为<Hl>黄色圆粒</Hl></>},
				{at: ex3.from, color: C.orange, title: '重组类型', children: <><Hl c={C.orange}>黄皱、绿圆</Hl>（亲本没有）</>},
				{at: ex4.from, color: C.green, title: '粒色', children: <>黄∶绿 = 416∶140 ≈ <Hl>3∶1</Hl></>},
				{at: ex4.from + 40, color: C.green, title: '粒形', children: <>圆∶皱 = 423∶133 ≈ <Hl>3∶1</Hl></>},
			]}
		/>
		<Tip at={ex5.from} top={740} label="考法" fontSize={32}>
			每对性状仍遵循<Hl>分离定律</Hl>；9∶3∶3∶1 ＝ (3∶1)<sup>2</sup> 的展开，说明两对性状的遗传<Hl>互不干扰</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

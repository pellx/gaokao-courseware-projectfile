import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Tree} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.cells;
const {cl1, cl2, cl3, cl4, cl5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Cells: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">免疫细胞</Header>
		<Appear at={cl1.from} style={{position: 'absolute', left: 90, top: 175, fontSize: 32, fontWeight: 800}}>
			来源：骨髓中的<Hl>造血干细胞</Hl>
		</Appear>
		<div style={{position: 'absolute', left: 90, top: 240}}>
			<Tree
				width={1400}
				height={450}
				colWidth={350}
				boxWidth={300}
				boxHeight={66}
				fontSize={29}
				root={{
					label: '免疫细胞',
					color: C.brown,
					at: cl2.from,
					children: [
						{label: '淋巴细胞', color: C.orange, at: at(cl2.from, cl2.to, 0.25), children: [
							{label: 'B细胞', color: C.red, at: at(cl2.from, cl2.to, 0.75)},
							{label: 'T细胞', color: C.orange, at: at(cl2.from, cl2.to, 0.85), children: [
								{label: '辅助性T细胞', color: C.orange, at: at(cl3.from, cl3.to, 0.2)},
								{label: '细胞毒性T细胞', color: C.orange, at: at(cl3.from, cl3.to, 0.45)},
							]},
						]},
						{label: '树突状细胞', color: C.red, at: at(cl2.from, cl2.to, 0.4)},
						{label: '巨噬细胞', color: C.red, at: at(cl2.from, cl2.to, 0.5)},
					],
				}}
			/>
		</div>
		<Appear at={cl4.from} style={{position: 'absolute', left: 1470, top: 250, width: 360}}>
			<div style={{border: `5px dashed ${C.red}`, borderRadius: 22, padding: '18px 26px', background: C.redSoft}}>
				<div style={{fontSize: 36, fontWeight: 900, color: C.red}}>抗原呈递细胞</div>
				<div style={{fontSize: 28, fontWeight: 700, marginTop: 8}}>B细胞、树突状细胞、巨噬细胞</div>
				<div style={{fontSize: 26, fontWeight: 600, color: C.muted, marginTop: 6}}>摄取、加工处理抗原，呈递抗原信息</div>
			</div>
		</Appear>
		<Appear at={cl5.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 29, padding: '12px 24px'}}>
				抗原呈递细胞<Hl>不只是巨噬细胞</Hl>；巨噬细胞既参与非特异性免疫，也参与特异性免疫
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

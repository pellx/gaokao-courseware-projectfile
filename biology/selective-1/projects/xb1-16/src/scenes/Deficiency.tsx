import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Tree} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.deficiency;
const {df1, df2, df3, df4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Deficiency: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">免疫缺陷病</Header>
		<div style={{position: 'absolute', left: 90, top: 200}}>
			<Tree
				width={1500}
				height={340}
				colWidth={520}
				boxWidth={460}
				boxHeight={110}
				fontSize={34}
				root={{
					label: '免疫缺陷病',
					note: '免疫功能不足或缺乏',
					color: C.red,
					at: df1.from,
					children: [
						{label: '先天性免疫缺陷病', note: '遗传因素', color: C.orange, at: df2.from, children: [
							{label: '重症联合免疫缺陷病', color: C.orange, at: at(df2.from, df2.to, 0.7)},
						]},
						{label: '获得性免疫缺陷病', note: '疾病和其他因素', color: C.orange, at: df3.from, children: [
							{label: '艾滋病（AIDS）', color: C.red, at: at(df3.from, df3.to, 0.75)},
						]},
					],
				}}
			/>
		</div>
		<Appear at={df4.from} style={{position: 'absolute', left: 90, right: 90, top: 620}}>
			<Callout label="考法" style={{fontSize: 30}}>
				免疫缺陷病 = 免疫功能<Hl>不足</Hl>：易反复感染、发生恶性肿瘤；与过敏反应、自身免疫病的“<Hl c={C.orange}>过强</Hl>”相反
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

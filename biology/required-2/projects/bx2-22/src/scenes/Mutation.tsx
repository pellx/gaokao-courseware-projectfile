import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {Tree} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.mutation;
const {mu1, mu2, mu3} = t.cue;

export const Mutation: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">突变和基因重组提供进化的原材料</Header>
		<div style={{position: 'absolute', left: 90, top: 180}}>
			<Tree
				width={1100}
				height={300}
				colWidth={420}
				boxWidth={360}
				boxHeight={90}
				fontSize={32}
				root={{
					label: '可遗传的变异',
					color: C.red,
					at: mu1.from,
					children: [
						{
							label: '突变',
							color: C.orange,
							at: mu1.from + 20,
							children: [
								{label: '基因突变', color: C.orange, at: mu1.from + 40},
								{label: '染色体变异', color: C.orange, at: mu1.from + 60},
							],
						},
						{label: '基因重组', color: C.green, at: mu1.from + 80},
					],
				}}
			/>
		</div>
		<Rows
			style={{left: 90, right: 90, top: 520}}
			fontSize={32}
			gap={16}
			items={[{at: mu2.from, color: C.red, children: <>突变频率低但个体数多；突变和重组都是<Hl>随机的、不定向的</Hl></>}]}
		/>
		<Tip at={mu3.from} top={650} label="易错" fontSize={33}>
			突变的有利或有害<Hl>不是绝对的</Hl>，取决于环境；只有<Hl>可遗传的变异</Hl>才提供进化原材料
		</Tip>
		<Narration t={t} />
	</Scene>
);

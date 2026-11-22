import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.concept;
const {co1, co2, co3, co4} = t.cue;

export const Concept: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">翻译的概念与条件</Header>
		<Def at={co1.from} style={{left: 90, right: 90, top: 165}} fontSize={32}>
			游离在细胞质中的氨基酸，以 <Hl>mRNA 为模板</Hl>合成具有一定氨基酸顺序的蛋白质的过程
		</Def>
		<div style={{position: 'absolute', left: 90, right: 90, top: 290}}>
			<Table
				at={co2.from}
				cols="220px 1fr"
				fontSize={32}
				rowHeight={66}
				head={['项目', '内容']}
				rows={[
					{at: co2.from, cells: ['场所', <Hl>核糖体</Hl>]},
					{at: co2.from + 25, cells: ['模板', <Hl>mRNA</Hl>]},
					{at: co2.from + 50, cells: ['原料', '21 种氨基酸']},
					{at: co2.from + 75, cells: ['运载工具', <Hl c={C.orange}>tRNA</Hl>]},
					{at: co3.from, cells: ['产物', '多肽链 → 盘曲折叠成蛋白质']},
				]}
			/>
		</div>
		<Tip at={co4.from} top={710} label="易错" fontSize={33}>
			直接产物是<Hl>多肽</Hl>，不一定有生物活性；碱基配对发生在 <Hl>mRNA 与 tRNA</Hl> 之间
		</Tip>
		<Narration t={t} />
	</Scene>
);

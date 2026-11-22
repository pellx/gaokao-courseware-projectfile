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
		<Header tag="考点三">转录的概念与条件</Header>
		<Def at={co1.from} style={{left: 90, right: 90, top: 165}} fontSize={33}>
			在细胞核中，通过 <Hl>RNA 聚合酶</Hl>以 DNA 的<Hl>一条链</Hl>为模板合成 RNA 的过程
		</Def>
		<div style={{position: 'absolute', left: 90, right: 90, top: 290}}>
			<Table
				at={co2.from}
				cols="200px 1fr"
				fontSize={32}
				rowHeight={72}
				head={['项目', '内容']}
				rows={[
					{at: co2.from, cells: ['场所', <>主要在<Hl c={C.orange}>细胞核</Hl>（线粒体、叶绿体中也有）</>]},
					{at: co3.from, cells: ['模板', 'DNA 的一条链']},
					{at: co3.from + 30, cells: ['原料', <Hl c={C.orange}>4 种核糖核苷酸</Hl>]},
					{at: co3.from + 60, cells: ['酶 / 能量', <><Hl>RNA 聚合酶</Hl>；ATP</>]},
				]}
			/>
		</div>
		<Tip at={co4.from} top={690} label="易错" fontSize={33}>
			原料是<Hl>核糖核苷酸</Hl>；RNA 聚合酶<Hl>兼有解旋作用</Hl>，转录不需另加解旋酶
		</Tip>
		<Narration t={t} />
	</Scene>
);

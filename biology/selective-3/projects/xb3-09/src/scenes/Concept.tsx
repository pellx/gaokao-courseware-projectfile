import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.concept;
const {co1, co2, co3, co4, co5} = t.cue;

export const Concept: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">核移植的概念</Header>
		<Def at={co1.from} fontSize={30} style={{left: 90, width: 1180, top: 165}}>
			<Hl>核移植</Hl>：将动物一个细胞的<Hl>细胞核</Hl>移入<Hl>去核的卵母细胞</Hl>中，使重组细胞发育成新胚胎，继而发育成动物个体
		</Def>
		<Appear at={co2.from} style={{position: 'absolute', left: 90, top: 330, fontSize: 30, fontWeight: 800}}>
			克隆动物：用核移植方法得到的动物（1996 年，<Hl c={C.orange}>克隆羊多莉</Hl>）
		</Appear>
		<div style={{position: 'absolute', left: 90, width: 1180, top: 410}}>
			<Table
				head={['比较项目', '胚胎细胞核移植', '体细胞核移植']}
				cols="1fr 1.4fr 1.4fr"
				at={co3.from}
				fontSize={29}
				rowHeight={64}
				rows={[
					{cells: ['供核细胞', '胚胎细胞', '体细胞'], at: co3.from},
					{cells: ['分化程度', '低', <Hl>高</Hl>], at: co4.from},
					{cells: ['难度', '相对容易', <Hl>明显更高</Hl>], at: co4.from + 20},
				]}
			/>
		</div>
		<Appear at={co2.from} style={{position: 'absolute', left: 1330, top: 165, width: 500, height: 510}}>
			<Photo src="images/dolly.jpg" caption="克隆羊多莉（标本）" style={{width: '100%', height: '100%'}} pos="62% center" />
		</Appear>
		<Tip at={co5.from} top={725} label="解题方法">
			核移植的原理是<Hl>动物细胞核的全能性</Hl>，注意是“细胞核”，不是动物细胞
		</Tip>
		<Narration t={t} />
	</Scene>
);

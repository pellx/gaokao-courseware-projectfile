import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.versus;
const {vs1, vs2, vs3, vs4} = t.cue;

export const Versus: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">试管动物与克隆动物</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 180}}>
			<Table
				head={['比较项目', '试管动物', '克隆动物']}
				cols="1fr 1.6fr 1.6fr"
				at={vs1.from}
				fontSize={31}
				rowHeight={78}
				rows={[
					{cells: ['关键技术', <Hl c={C.orange}>体外受精</Hl>, <Hl c={C.orange}>核移植</Hl>], at: vs1.from},
					{cells: ['生殖方式', <Hl>有性生殖</Hl>, <Hl>无性生殖</Hl>], at: vs2.from},
					{cells: ['遗传物质', '来自双亲', '核遗传物质来自供核个体'], at: vs3.from},
					{cells: ['共同技术', '早期胚胎培养、胚胎移植', '早期胚胎培养、胚胎移植'], at: vs4.from},
				]}
			/>
		</div>
		<Tip at={vs4.from} top={600} label="解题方法">
			看有没有<Hl>精卵结合</Hl>：有就是有性生殖（试管动物），没有就是无性生殖（克隆动物）
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Cards, Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.medium;
const {md1, md2, md3, md4, md5} = t.cue;

const BASIC = ['水', '碳源', '氮源', '无机盐'];

export const Medium: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">培养基的成分</Header>
		<Def at={md1.from} fontSize={31} style={{left: 90, right: 90, top: 165}}>
			<Hl>培养基</Hl>：按照微生物对营养物质的不同需求，配制出的供其<Hl c={C.orange}>生长繁殖</Hl>的营养基质
		</Def>
		<Cards
			top={290}
			height={120}
			titleSize={44}
			items={BASIC.map((b, i) => ({title: <div style={{textAlign: 'center'}}>{b}</div>, color: i % 2 ? C.orange : C.red, body: null, at: md2.from + i * 8}))}
		/>
		<div style={{position: 'absolute', left: 90, right: 90, top: 450}}>
			<Table
				head={['培养对象', '特殊要求']}
				cols="1fr 2fr"
				at={md3.from}
				fontSize={29}
				rowHeight={56}
				rows={[
					{cells: ['乳酸杆菌', <>添加<Hl c={C.orange}>维生素</Hl></>], at: md3.from},
					{cells: ['霉菌', <>pH 调至<Hl c={C.orange}>酸性</Hl></>], at: md4.from},
					{cells: ['细菌', <>pH 调至<Hl c={C.orange}>中性或弱碱性</Hl></>], at: md4.from + 15},
					{cells: ['厌氧微生物', <>提供<Hl c={C.orange}>无氧条件</Hl></>], at: md4.from + 30},
				]}
			/>
		</div>
		<Tip at={md5.from} top={760} label="易错">
			<Hl>自养微生物</Hl>（如硝化细菌）能利用 CO<sub>2</sub>，培养基可以不加有机碳源
		</Tip>
		<Narration t={t} />
	</Scene>
);

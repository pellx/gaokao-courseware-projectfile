import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.compare;
const {ns1, ns2, ns3, ns4, ns5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const o = (s: string) => <span style={{color: C.orange, fontWeight: 800}}>{s}</span>;
const g = (s: string) => <span style={{color: C.green, fontWeight: 800}}>{s}</span>;

export const Compare: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">非特异性免疫与特异性免疫</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 180}}>
			<Table
				head={['比较项目', '非特异性免疫', '特异性免疫']}
				cols="1fr 1.6fr 1.6fr"
				at={ns1.from}
				fontSize={32}
				rowHeight={78}
				rows={[
					{cells: ['组成', o('第一、二道防线'), g('第三道防线')], at: ns2.from},
					{cells: ['形成', o('生来就有（先天）'), g('出生后与病原体接触形成')], at: ns3.from},
					{cells: ['对象', o('对多种病原体都有作用'), g('只针对特定的抗原')], at: at(ns3.from, ns3.to, 0.6)},
					{cells: ['联系', '是特异性免疫的基础', '二者共同完成免疫功能'], at: ns4.from},
				]}
			/>
		</div>
		<Appear at={ns5.from} style={{position: 'absolute', left: 90, right: 90, top: 600}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				看是否<Hl>针对某种特定的病原体</Hl>：患过麻疹不再患 → <Hl c={C.green}>特异性</Hl>；巨噬细胞吞噬多种病菌 → <Hl c={C.orange}>非特异性</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

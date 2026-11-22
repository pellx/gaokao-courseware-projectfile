import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.induction;
const {id1, id2, id3, id4, id5} = t.cue;

export const Induction: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">完全归纳法与不完全归纳法</Header>
		<Def at={id1.from} style={{left: 90, right: 90, top: 170}}>
			归纳法：由一系列<Hl c={C.orange}>具体事实</Hl>推出<Hl c={C.orange}>一般结论</Hl>的思维方法
		</Def>
		<Cards
			top={300}
			height={250}
			fontSize={32}
			items={[
				{title: '完全归纳法', color: C.green, at: id2.from, body: <>考察了某类事物的<Hl c={C.green}>全部对象</Hl></>, note: '结论可信'},
				{title: '不完全归纳法', color: C.red, at: id3.from, body: <>只考察了<Hl>部分对象</Hl></>, note: '结论可能有例外，但可用于预测和判断'},
			]}
		/>
		<Def at={id4.from} style={{left: 90, right: 90, top: 580}} color={C.red} soft={C.redSoft} fontSize={32}>
			施莱登、施旺：观察了<Hl>部分</Hl>动植物 → 一切动植物都由细胞构成 ＝ <Hl>不完全归纳法</Hl>
		</Def>
		<Tip at={id5.from} top={720} label="解题方法">
			看是否考察了<Hl>全部对象</Hl>：没有穷尽的就是不完全归纳法；科学研究中经常运用不完全归纳法
		</Tip>
		<Narration t={t} />
	</Scene>
);

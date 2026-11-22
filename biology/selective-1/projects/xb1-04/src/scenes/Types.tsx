import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.types;
const {ty1, ty2, ty3, ty4, ty5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const o = (s: string) => <span style={{color: C.orange, fontWeight: 800}}>{s}</span>;
const g = (s: string) => <span style={{color: C.green, fontWeight: 800}}>{s}</span>;

export const Types: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">非条件反射与条件反射</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Table
				head={['', '非条件反射', '条件反射']}
				cols="0.7fr 1.5fr 1.5fr"
				at={ty1.from}
				fontSize={32}
				rowHeight={74}
				rows={[
					{cells: ['形成', o('出生后无须训练就具有'), g('后天学习和训练形成')], at: ty2.from},
					{cells: ['举例', '膝跳、眨眼、缩手；吃东西分泌唾液', '望梅止渴、谈虎色变'], at: ty3.from},
					{cells: ['神经中枢', o('大脑皮层以下'), g('需要大脑皮层参与')], at: at(ty4.from, ty4.to, 0.05)},
					{cells: ['数量', '有限', '几乎无限'], at: at(ty4.from, ty4.to, 0.3)},
					{cells: ['维持', '终生存在', '需要强化，否则消退'], at: at(ty4.from, ty4.to, 0.6)},
				]}
			/>
		</div>
		<Appear at={ty5.from} style={{position: 'absolute', left: 90, right: 90, top: 715}}>
			<Callout label="考法" style={{fontSize: 31}}>
				判断条件反射，抓住<Hl c={C.green}>后天学习</Hl>、<Hl c={C.green}>大脑皮层参与</Hl>；<Hl>谈虎色变</Hl>与语言文字有关，是人类特有的条件反射
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

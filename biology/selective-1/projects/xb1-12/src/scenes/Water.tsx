import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Tree} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.water;
const {wt1, wt2, wt3, wt4, wt5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Water: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">抗利尿激素与水平衡</Header>
		<Appear at={wt1.from} style={{position: 'absolute', left: 90, top: 180, fontSize: 32, fontWeight: 800}}>
			饮水不足 / 失水过多 / 食物过咸 → <Hl>细胞外液渗透压↑</Hl>
		</Appear>
		<div style={{position: 'absolute', left: 90, top: 260}}>
			<Tree
				width={1740}
				height={420}
				colWidth={440}
				boxWidth={400}
				boxHeight={96}
				fontSize={28}
				root={{
					label: '下丘脑渗透压感受器',
					color: C.brown,
					at: wt2.from,
					children: [
						{label: '大脑皮层：渴觉', color: C.orange, at: at(wt2.from, wt2.to, 0.4), children: [
							{label: '主动饮水', color: C.orange, at: at(wt2.from, wt2.to, 0.75)},
						]},
						{label: '抗利尿激素↑', note: '下丘脑合成，垂体释放', color: C.green, at: wt3.from, children: [
							{label: '肾小管、集合管', note: '重吸收水↑', color: C.green, at: wt4.from, children: [
								{label: '尿量↓', color: C.green, at: at(wt4.from, wt4.to, 0.4)},
							]},
						]},
					],
				}}
			/>
		</div>
		<Appear at={at(wt4.from, wt4.to, 0.7)} style={{position: 'absolute', left: 1410, top: 640, fontSize: 30, fontWeight: 800, color: C.green}}>
			→ 渗透压恢复正常
		</Appear>
		<Appear at={wt5.from} style={{position: 'absolute', left: 90, right: 90, top: 730}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				抗利尿激素由<Hl>下丘脑合成</Hl>，<Hl c={C.orange}>垂体释放</Hl>，不是“垂体合成”
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

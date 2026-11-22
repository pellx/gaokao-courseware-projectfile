import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain, Tree} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.cold;
const {cd1, cd2, cd3, cd4, cd5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Cold: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">寒冷时的体温调节</Header>
		<Appear at={cd1.from} style={{position: 'absolute', left: 90, top: 175, fontSize: 34, fontWeight: 900}}>
			体温稳定：<Hl>产热量 = 散热量</Hl>
		</Appear>
		<div style={{position: 'absolute', left: 90, top: 250}}>
			<Chain fontSize={30} gap={10} steps={[{label: '寒冷', color: C.orange, at: cd2.from}, {label: '皮肤冷觉感受器', at: cd2.from + 15}]} />
		</div>
		<div style={{position: 'absolute', left: 90, top: 340}}>
			<Tree
				width={1740}
				height={380}
				colWidth={560}
				boxWidth={500}
				boxHeight={66}
				fontSize={28}
				root={{
					label: '下丘脑体温调节中枢',
					color: C.brown,
					at: at(cd2.from, cd2.to, 0.5),
					children: [
						{label: '减少散热', color: C.green, at: cd3.from, children: [
							{label: '皮肤血管收缩', color: C.green, at: cd3.from + 15},
							{label: '汗腺分泌减少', color: C.green, at: cd3.from + 25},
						]},
						{label: '增加产热', color: C.red, at: at(cd3.from, cd3.to, 0.45), children: [
							{label: '骨骼肌战栗', color: C.red, at: at(cd3.from, cd3.to, 0.55)},
							{label: '甲状腺激素、肾上腺素↑', color: C.red, at: at(cd3.from, cd3.to, 0.7)},
						]},
						{label: '大脑皮层：冷觉', color: C.orange, at: cd4.from, children: [
							{label: '主动添加衣物', color: C.orange, at: cd4.from + 20},
						]},
					],
				}}
			/>
		</div>
		<Appear at={cd5.from} style={{position: 'absolute', left: 90, right: 90, top: 760}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 29, padding: '12px 24px'}}>
				寒冷时体温依然稳定：产热和散热<Hl>都比炎热时多</Hl>，二者仍然相等
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

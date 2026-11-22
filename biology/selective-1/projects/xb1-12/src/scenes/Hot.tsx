import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain, Tree} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.hot;
const {ht1, ht2, ht3, ht4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Hot: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">炎热时的体温调节</Header>
		<div style={{position: 'absolute', left: 90, top: 190}}>
			<Chain fontSize={30} gap={10} steps={[{label: '炎热', color: C.red, at: ht1.from}, {label: '皮肤热觉感受器', at: ht1.from + 15}]} />
		</div>
		<div style={{position: 'absolute', left: 90, top: 280}}>
			<Tree
				width={1740}
				height={240}
				colWidth={560}
				boxWidth={500}
				boxHeight={66}
				fontSize={28}
				root={{
					label: '下丘脑体温调节中枢',
					color: C.brown,
					at: at(ht1.from, ht1.to, 0.3),
					children: [
						{label: '增加散热', color: C.green, at: at(ht1.from, ht1.to, 0.5), children: [
							{label: '皮肤血管舒张', color: C.green, at: at(ht1.from, ht1.to, 0.6)},
							{label: '汗腺分泌增加（汗液蒸发为主）', color: C.green, at: at(ht1.from, ht1.to, 0.75)},
						]},
					],
				}}
			/>
		</div>
		<Appear at={ht3.from} style={{position: 'absolute', left: 90, right: 90, top: 560, display: 'flex', gap: 24}}>
			<div style={{flex: 1, border: `4px solid ${C.orange}`, borderRadius: 18, padding: '14px 24px', fontSize: 30, fontWeight: 800}}>
				安静时产热：<Hl c={C.orange}>肝脏</Hl>等器官
			</div>
			<div style={{flex: 1, border: `4px solid ${C.orange}`, borderRadius: 18, padding: '14px 24px', fontSize: 30, fontWeight: 800}}>
				运动时产热：<Hl c={C.orange}>骨骼肌</Hl>
			</div>
		</Appear>
		<Appear at={ht2.from} style={{position: 'absolute', left: 1240, top: 190, fontSize: 30, fontWeight: 800, color: C.green}}>
			炎热时散热主要靠汗液蒸发
		</Appear>
		<Appear at={ht4.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				体温调节中枢在<Hl c={C.brown}>下丘脑</Hl>；冷觉、热觉在<Hl c={C.orange}>大脑皮层</Hl>形成
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

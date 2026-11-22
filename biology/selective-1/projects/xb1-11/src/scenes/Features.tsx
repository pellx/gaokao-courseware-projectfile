import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.features;
const {fe1, fe2, fe3, fe4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Features: React.FC = () => {
	const CARDS: [string, string, number][] = [
		['通过体液运输', '随血液流到全身', fe2.from],
		['作用于靶器官、靶细胞', '只有它们有相应的受体', at(fe2.from, fe2.to, 0.45)],
		['作为信使传递信息', '不组成细胞结构、不供能、不起催化作用', fe3.from],
		['微量和高效', '含量极少，作用显著', at(fe3.from, fe3.to, 0.6)],
	];
	return (
		<Scene duration={t.duration}>
			<Header tag="考点七">激素调节的特点</Header>
			<Appear at={fe1.from} style={{position: 'absolute', left: 90, top: 180, fontSize: 30, fontWeight: 700, color: C.muted}}>
				（回顾：激素与内分泌系统一期）
			</Appear>
			<div style={{position: 'absolute', left: 90, right: 90, top: 250, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24}}>
				{CARDS.map(([title, note, from], i) => (
					<Appear key={title} at={from}>
						<div style={{border: `4px solid ${C.orange}`, borderRadius: 20, padding: '18px 26px', background: '#fff', height: 150, boxSizing: 'border-box'}}>
							<div style={{fontSize: 38, fontWeight: 900, color: C.orange}}>
								{i + 1}. {title}
							</div>
							<div style={{fontSize: 28, fontWeight: 700, color: C.muted, marginTop: 8}}>{note}</div>
						</div>
					</Appear>
				))}
			</div>
			<Appear at={fe4.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
					激素起作用后就<Hl>失活</Hl> → 体内需<Hl>源源不断</Hl>地产生激素，维持含量的动态平衡
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};

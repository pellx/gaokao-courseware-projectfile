import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.subs;
const {sb1, sb2, sb3, sb4, sb5} = t.cue;

const CARDS: [string, string, string, string, number][] = [
	['抗体', '浆细胞分泌', '专门应对抗原的蛋白质', C.red, sb2.from],
	['细胞因子', '主要由辅助性T细胞分泌', '白细胞介素、干扰素、肿瘤坏死因子等', C.orange, sb3.from],
	['溶菌酶', '唾液腺、泪腺细胞等也能分泌', '溶解细菌的细胞壁', C.green, sb4.from],
];

export const Subs: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">免疫活性物质</Header>
		<Appear at={sb1.from} style={{position: 'absolute', left: 90, top: 175, fontSize: 32, fontWeight: 800}}>
			由<Hl>免疫细胞或其他细胞</Hl>产生的、发挥免疫作用的物质
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 90, top: 260, display: 'flex', gap: 28}}>
			{CARDS.map(([name, src, note, color, from]) => (
				<Appear key={name} at={from} style={{flex: 1}}>
					<div style={{border: `5px solid ${color}`, borderRadius: 24, background: '#fff', height: 330, boxSizing: 'border-box', padding: '26px 30px'}}>
						<div style={{fontSize: 52, fontWeight: 900, color}}>{name}</div>
						<div style={{fontSize: 30, fontWeight: 800, marginTop: 22}}>来源：{src}</div>
						<div style={{fontSize: 28, fontWeight: 600, color: C.muted, marginTop: 16, lineHeight: 1.5}}>{note}</div>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={sb5.from} style={{position: 'absolute', left: 90, right: 90, top: 660}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31}}>
				免疫活性物质<Hl>不一定由免疫细胞产生</Hl>：唾液腺、泪腺细胞也能分泌溶菌酶
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.urine;
const {ur1, ur2, ur3} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Urine: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">尿糖检测与判断</Header>
		<div style={{position: 'absolute', left: 90, top: 190}}>
			<Chain
				fontSize={32}
				gap={12}
				arrows={['', '水浴加热']}
				steps={[
					{label: '尿液 + 斐林试剂', at: ur1.from},
					{label: '50～65 ℃', color: C.orange, at: at(ur1.from, ur1.to, 0.3)},
					{label: '砖红色沉淀 → 含葡萄糖', color: C.red, at: at(ur1.from, ur1.to, 0.5)},
				]}
			/>
		</div>
		<Appear at={at(ur1.from, ur1.to, 0.5)} style={{position: 'absolute', left: 1500, top: 160}}>
		<svg width={260} height={330} viewBox="0 0 260 330">
			<g>
				<path d="M90,20 L90,250 A40,40 0 0 0 170,250 L170,20" fill="#fff6ea" stroke={C.text} strokeWidth={5} />
				<path d="M93,210 L93,250 A37,37 0 0 0 167,250 L167,210 Z" fill="#c4512b" />
				<text x={130} y={320} fontSize={26} fontWeight={900} fill="#c4512b" textAnchor="middle">砖红色沉淀</text>
			</g>
		</svg>
		</Appear>
		<Appear at={ur2.from} style={{position: 'absolute', left: 90, top: 330, width: 1300}}>
			<div style={{fontSize: 36, fontWeight: 900, color: C.red, marginBottom: 12}}>尿中有糖 ≠ 糖尿病</div>
			<div style={{fontSize: 30, fontWeight: 700, lineHeight: 1.7}}>
				· 一次吃糖过多（血糖暂时超过肾的重吸收能力）
				<br />· 肾小管重吸收功能障碍
			</div>
		</Appear>
		<Appear at={ur3.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="考法" style={{fontSize: 30}}>
				判断糖尿病看<Hl>血糖浓度</Hl>是否持续偏高；再结合<Hl c={C.orange}>胰岛素含量</Hl>判断1型还是2型
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

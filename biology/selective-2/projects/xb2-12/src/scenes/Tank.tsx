import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.tank;
const {tk1, tk2, tk3, tk4, tk5, tk6} = t.cue;

const RULES: [string, string, React.ReactNode, number][] = [
	['密封', C.red, '防止外界生物和非生物因素干扰', tk2.from],
	['成分齐全', C.green, '四种成分都有，生物间有营养关系', tk3.from],
	['比例适中', C.orange, '动物不宜过多、个体不宜太大', tk4.from],
	['透明、散射光', C.orange, <>通风、光线良好处，<Hl>避免阳光直射</Hl></>, tk5.from],
];

export const Tank: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">设计制作生态缸</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 180, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22}}>
			{RULES.map(([h, color, d, at]) => (
				<Appear key={h} at={Math.max(at, tk1.from)}>
					<div style={{border: `5px solid ${color}`, borderRadius: 22, padding: '18px 26px', height: 170, boxSizing: 'border-box', background: '#fff'}}>
						<div style={{fontSize: 38, fontWeight: 900, color}}>{h}</div>
						<div style={{fontSize: 29, fontWeight: 700, marginTop: 12}}>{d}</div>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={tk6.from} style={{position: 'absolute', left: 90, right: 90, top: 590}}>
			<Callout label="考法" style={{fontSize: 30}}>
				生态缸稳定性比自然生态系统<Hl>低</Hl>：物种少、结构简单；记录<Hl c={C.orange}>生物的存活时间</Hl>判断稳定性
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

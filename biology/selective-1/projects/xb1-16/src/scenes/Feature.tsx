import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.feature;
const {ft2, ft3, ft4, ft5} = t.cue;

const CARDS: [string, string, string, number][] = [
	['有快慢之分', '几分钟内出现，或几十个小时后才出现', C.orange, ft2.from],
	['遗传倾向和个体差异', '许多过敏反应有明显的遗传倾向', C.orange, ft3.from],
	['预防', '找出过敏原，尽量避免再次接触', C.green, ft4.from],
];

export const Feature: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">过敏反应的特点与预防</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190, display: 'flex', gap: 28}}>
			{CARDS.map(([title, note, color, from]) => (
				<Appear key={title} at={from} style={{flex: 1}}>
					<div style={{border: `5px solid ${color}`, borderRadius: 24, background: '#fff', height: 300, boxSizing: 'border-box', padding: '28px 30px'}}>
						<div style={{fontSize: 42, fontWeight: 900, color}}>{title}</div>
						<div style={{fontSize: 30, fontWeight: 700, marginTop: 22, lineHeight: 1.55}}>{note}</div>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={ft5.from} style={{position: 'absolute', left: 90, right: 90, top: 580}}>
			<Callout label="考法" style={{fontSize: 31}}>
				过敏反应 = 免疫功能<Hl>过强</Hl>，属于<Hl>免疫防御</Hl>功能异常，不是免疫功能不足
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

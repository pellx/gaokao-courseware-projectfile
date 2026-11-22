import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.values;
const {va1, va2, va3, va4, va5} = t.cue;

const VALUES: [string, string, React.ReactNode, number][] = [
	['直接价值', C.orange, <>食用、药用、工业原料；<br /><Hl c={C.orange}>旅游观赏、科学研究、文学艺术创作</Hl></>, va2.from],
	['间接价值', C.green, <>对生态系统起<Hl c={C.green}>重要调节作用</Hl>（生态功能）：保持水土、蓄洪防旱、调节气候</>, va3.from],
	['潜在价值', C.red, <>目前人类<Hl>尚不太清楚</Hl>的价值</>, va4.from],
];

export const Values: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">生物多样性的三种价值</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190, display: 'flex', gap: 24}}>
			{VALUES.map(([name, color, body, at]) => (
				<Appear key={name} at={Math.max(at, va1.from)} style={{flex: 1}}>
					<div style={{border: `5px solid ${color}`, borderRadius: 24, padding: '20px 24px', height: 330, boxSizing: 'border-box', background: '#fff'}}>
						<div style={{fontSize: 42, fontWeight: 900, color}}>{name}</div>
						<div style={{fontSize: 30, fontWeight: 700, marginTop: 16, lineHeight: 1.6}}>{body}</div>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={va5.from} style={{position: 'absolute', left: 90, right: 90, top: 580}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 32}}>
				<Hl c={C.green}>间接价值</Hl>明显<Hl>大于</Hl><Hl c={C.orange}>直接价值</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

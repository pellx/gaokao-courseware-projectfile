import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.season;
const {ss1, ss2, ss3} = t.cue;

const SEASONS: [string, string, string][] = [
	['春', C.green, '植物发芽、开花'],
	['夏', C.orange, '枝叶繁茂，动物繁殖'],
	['秋', C.gold, '草本枯黄，候鸟南迁'],
	['冬', C.muted, '多数植物休眠'],
];

export const Season: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">群落的季节性</Header>
		<div style={{position: 'absolute', left: 90, top: 190}}>
			<Chain
				fontSize={32}
				steps={[
					{label: '阳光、温度、水分随季节变化', color: C.orange, at: ss1.from},
					{label: '群落的外貌和结构有规律地变化', color: C.red, at: ss1.from + 30},
				]}
			/>
		</div>
		<div style={{position: 'absolute', left: 90, right: 90, top: 330, display: 'flex', gap: 24}}>
			{SEASONS.map(([s, c, note], i) => (
				<Appear key={s} at={ss2.from + i * 12} style={{flex: 1}}>
					<div style={{border: `5px solid ${c}`, borderRadius: 24, padding: '20px 24px', height: 200, boxSizing: 'border-box', background: '#fff'}}>
						<div style={{fontSize: 52, fontWeight: 900, color: c}}>{s}</div>
						<div style={{fontSize: 29, fontWeight: 700, marginTop: 12}}>{note}</div>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={ss3.from} style={{position: 'absolute', left: 90, right: 90, top: 600}}>
			<Callout label="考法" style={{fontSize: 31}}>
				答题模板：<Hl c={C.orange}>环境因素随季节变化</Hl> → 群落的<Hl>外貌和结构</Hl>随之发生有规律的变化
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

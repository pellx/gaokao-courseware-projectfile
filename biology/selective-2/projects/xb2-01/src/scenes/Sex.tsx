import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.sex;
const {sx1, sx2, sx3, sx4} = t.cue;

export const Sex: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">性别比例</Header>
		<Appear at={sx1.from} style={{position: 'absolute', left: 90, right: 90, top: 190, display: 'flex', alignItems: 'center', gap: 30, fontSize: 36, fontWeight: 800}}>
			<span>性别比例</span>
			<span style={{color: C.muted}}>→ 影响</span>
			<span style={{color: C.red, border: `5px solid ${C.red}`, borderRadius: 16, padding: '8px 24px'}}>出生率</span>
			<span style={{color: C.muted}}>→</span>
			<span>种群密度</span>
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 60, top: 360}}>
			<Chain
				fontSize={32}
				steps={[
					{label: '性引诱剂诱杀雄虫', color: C.orange, at: sx2.from},
					{label: '性别比例失调', color: C.text, at: sx3.from},
					{label: '雌虫难以交配', color: C.text, at: sx3.from + 25},
					{label: '出生率降低', color: C.red, at: sx3.from + 50},
					{label: '密度降低', color: C.green, at: sx3.from + 75},
				]}
			/>
		</div>
		<Appear at={sx4.from} style={{position: 'absolute', left: 90, right: 90, top: 560}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 32}}>
				性别比例<Hl>只影响出生率</Hl>，不影响死亡率；诱杀雄虫<Hl>不是</Hl>靠提高死亡率来降低种群密度
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

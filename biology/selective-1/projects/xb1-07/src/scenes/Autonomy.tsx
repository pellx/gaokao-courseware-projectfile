import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.autonomy;
const {au1, au2, au3, au4, au5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

// Bottom-up: the order the narration names them.
const LADDER: [string, string, string][] = [
	['脊髓', '低级中枢（排尿、排便等）', C.green],
	['脑干', '呼吸、心脏功能的基本中枢', C.orange],
	['下丘脑', '较高级中枢', C.brown],
	['大脑皮层', '最高级中枢', C.red],
];

export const Autonomy: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">自主神经系统并不完全自主</Header>
		<Appear at={au1.from} style={{position: 'absolute', left: 90, top: 175, fontSize: 34, fontWeight: 800}}>
			内脏活动的分级调节
		</Appear>
		<div style={{position: 'absolute', left: 90, top: 245, width: 820, display: 'flex', flexDirection: 'column-reverse', gap: 14}}>
			{LADDER.map(([name, job, color], i) => (
				<Appear key={name} at={at(au2.from, au2.to, 0.05 + i * 0.22)} dx={-20} dy={0}>
					<div style={{display: 'flex', alignItems: 'center', gap: 22, border: `4px solid ${color}`, borderRadius: 18, padding: '12px 24px', background: '#fff', marginLeft: i * 40}}>
						<span style={{fontSize: 36, fontWeight: 900, color, width: 170}}>{name}</span>
						<span style={{fontSize: 28, fontWeight: 700, color: C.muted}}>{job}</span>
					</div>
				</Appear>
			))}
		</div>
		<div style={{position: 'absolute', left: 1000, right: 90, top: 240, display: 'flex', flexDirection: 'column', gap: 26, fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
			<Appear at={au3.from}>
				排尿：<Hl c={C.green}>副交感神经</Hl>兴奋 → 膀胱缩小；<Hl c={C.orange}>交感神经</Hl>兴奋不会使膀胱缩小；受<Hl>大脑皮层</Hl>控制
			</Appear>
			<Appear at={au4.from}>
				紧张时心跳加快、手心出汗 → 内脏活动受<Hl c={C.orange}>情绪</Hl>影响
			</Appear>
		</div>
		<Appear at={au5.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				“自主” = <Hl>不受意识直接支配</Hl>，不等于不受高级中枢调控
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

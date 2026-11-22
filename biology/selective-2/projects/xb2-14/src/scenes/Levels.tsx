import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.levels;
const {lv1, lv2, lv3, lv4, lv5} = t.cue;

const LEVELS: [string, string, string, string, number][] = [
	['遗传多样性', C.green, '同种生物不同个体之间基因不同', '水稻的许多品种', lv2.from],
	['物种多样性', C.orange, '地球上生物种类的多样', '大熊猫、金丝猴', lv3.from],
	['生态系统多样性', C.red, '各种生态系统的多样', '森林、草原、湿地、海洋', lv4.from],
];

export const Levels: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">生物多样性的三个层次</Header>
		<Appear at={lv1.from} style={{position: 'absolute', left: 90, right: 90, top: 170, fontSize: 29, fontWeight: 700, lineHeight: 1.5}}>
			所有生物 + 它们拥有的<Hl c={C.green}>全部基因</Hl> + 各种各样的<Hl>生态系统</Hl> = <Hl>生物多样性</Hl>
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 90, top: 250, display: 'flex', gap: 24}}>
			{LEVELS.map(([name, color, def, ex, at]) => (
				<Appear key={name} at={at} style={{flex: 1}}>
					<div style={{border: `5px solid ${color}`, borderRadius: 24, padding: '20px 24px', height: 290, boxSizing: 'border-box', background: '#fff'}}>
						<div style={{fontSize: 40, fontWeight: 900, color}}>{name}</div>
						<div style={{fontSize: 30, fontWeight: 700, marginTop: 14, lineHeight: 1.5}}>{def}</div>
						<div style={{fontSize: 28, fontWeight: 700, marginTop: 12, color: C.muted}}>例：{ex}</div>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={lv5.from} style={{position: 'absolute', left: 90, right: 90, top: 590}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				同种内部不同 → <Hl c={C.green}>遗传</Hl>；不同物种 → <Hl c={C.orange}>物种</Hl>；不同环境类型 → <Hl>生态系统</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

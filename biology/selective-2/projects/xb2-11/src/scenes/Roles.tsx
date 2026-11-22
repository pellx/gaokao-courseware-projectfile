import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.roles;
const {rl1, rl2, rl3, rl4, rl5} = t.cue;

const ROWS: [string, string, string, number][] = [
	['生命活动的正常进行', C.green, '莴苣种子需特定波长的光才萌发；蝙蝠回声定位', rl2.from],
	['生物种群的繁衍', C.orange, '植物开花需要光信息刺激；昆虫靠性外激素吸引异性', rl3.from],
	['调节生物的种间关系', C.red, '狼循兔的气味追捕，兔凭狼的气味躲避 → 维持生态系统稳定', rl4.from],
];

export const Roles: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">信息传递的作用</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 180, display: 'flex', flexDirection: 'column', gap: 20}}>
			{ROWS.map(([head, color, ex, at]) => (
				<Appear key={head} at={Math.max(at, rl1.from)} dx={-20} dy={0}>
					<div style={{display: 'flex', alignItems: 'center', gap: 26, border: `5px solid ${color}`, borderRadius: 22, padding: '18px 26px', background: '#fff'}}>
						<div style={{fontSize: 34, fontWeight: 900, color, width: 400, flexShrink: 0}}>{head}</div>
						<div style={{fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>{ex}</div>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={rl5.from} style={{position: 'absolute', left: 90, right: 90, top: 620}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				看作用对象：<Hl c={C.green}>个体自身</Hl> → 生命活动；<Hl c={C.orange}>同种异性</Hl> → 种群繁衍；<Hl>不同物种</Hl> → 调节种间关系
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

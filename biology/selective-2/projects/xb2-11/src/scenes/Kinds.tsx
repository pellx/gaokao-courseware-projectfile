import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.kinds;
const {kd1, kd2, kd3, kd4, kd5} = t.cue;

const KINDS: [string, string, React.ReactNode, string, number][] = [
	['物理信息', C.orange, <>通过<Hl c={C.orange}>物理过程</Hl>传递</>, '光、声、温度、湿度、磁场', kd2.from],
	['化学信息', C.green, <>生物产生的<Hl c={C.green}>化学物质</Hl></>, '生物碱、有机酸、性外激素', kd3.from],
	['行为信息', C.red, <>动物的<Hl>特殊行为</Hl></>, '蜜蜂跳舞、孔雀开屏', kd4.from],
];

export const Kinds: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">信息的种类</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190, display: 'flex', gap: 26}}>
			{KINDS.map(([name, color, def, ex, at]) => (
				<Appear key={name} at={Math.max(at, kd1.from)} style={{flex: 1}}>
					<div style={{border: `5px solid ${color}`, borderRadius: 24, padding: '22px 26px', height: 300, boxSizing: 'border-box', background: '#fff'}}>
						<div style={{fontSize: 44, fontWeight: 900, color}}>{name}</div>
						<div style={{fontSize: 31, fontWeight: 700, marginTop: 16}}>{def}</div>
						<div style={{fontSize: 29, fontWeight: 700, marginTop: 16, color: C.muted, lineHeight: 1.5}}>例：{ex}</div>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={kd5.from} style={{position: 'absolute', left: 90, right: 90, top: 560}}>
			<Callout label="考法" style={{fontSize: 31}}>
				物理信息可来自<Hl c={C.orange}>非生物环境</Hl>或生物；化学信息、行为信息都来自<Hl>生物</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

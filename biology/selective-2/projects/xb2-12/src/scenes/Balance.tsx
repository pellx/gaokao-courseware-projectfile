import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.balance;
const {bl1, bl2, bl3, bl4} = t.cue;

const FEATURES: [string, string][] = [
	['结构平衡', '各组分保持相对稳定'],
	['功能平衡', '生产—消费—分解正常进行'],
	['收支平衡', '物质、能量输入 ≈ 输出'],
];

export const Balance: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">生态平衡与负反馈调节</Header>
		<Appear at={bl1.from} style={{position: 'absolute', left: 90, right: 90, top: 170, fontSize: 31, fontWeight: 700}}>
			<Hl>生态平衡</Hl>：生态系统的结构和功能处于<Hl>相对稳定</Hl>的一种状态
		</Appear>
		<div style={{position: 'absolute', left: 90, width: 760, top: 250, display: 'flex', flexDirection: 'column', gap: 18}}>
			{FEATURES.map(([h, d], i) => (
				<Appear key={h} at={bl2.from + i * 25} dx={-16} dy={0}>
					<div style={{border: `4px solid ${C.green}`, borderRadius: 18, padding: '14px 22px', fontSize: 30, fontWeight: 700}}>
						<Hl c={C.green}>{h}</Hl>：{d}
					</div>
				</Appear>
			))}
		</div>
		<svg width={900} height={420} viewBox="0 0 900 420" style={{position: 'absolute', left: 930, top: 230}}>
			<Defs />
			<G at={bl3.from}>
				<Box x={200} y={70} w={240} h={80} label="害虫增多" color={C.red} fontSize={32} />
				<Box x={680} y={70} w={260} h={80} label="食虫鸟增多" color={C.orange} fontSize={32} />
				<Box x={440} y={300} w={260} h={80} label="害虫被抑制" color={C.green} fontSize={32} />
				<Arrow x1={325} y1={70} x2={545} y2={70} color={C.muted} />
				<Arrow x1={650} y1={115} x2={510} y2={255} color={C.muted} />
				<Arrow x1={370} y1={255} x2={230} y2={115} color={C.green} marker="arrow-green" />
				<text x={180} y={215} fontSize={28} fontWeight={900} fill={C.green}>负反馈</text>
			</G>
		</svg>
		<Appear at={bl4.from} style={{position: 'absolute', left: 90, right: 90, top: 690}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				<Hl c={C.green}>负反馈</Hl>使系统趋于稳定；<Hl>正反馈</Hl>使系统偏离稳态（湖泊污染 → 鱼死腐烂 → 污染加重）
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

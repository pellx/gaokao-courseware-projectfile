import React from 'react';
import {Appear, Card, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G, Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.mark;
const {mk1, mk2, mk3, mk4, mk5, mk6} = t.cue;

// A sample of animals in a circle; `marked` of them carry a red ring.
const Catch: React.FC<{cx: number; n: number; marked: number; label: string; note: string}> = ({cx, n, marked, label, note}) => (
	<g>
		<circle cx={cx} cy={130} r={110} fill={C.panel} stroke={C.line} strokeWidth={5} />
		{Array.from({length: n}, (_, i) => {
			const row = Math.floor(i / 4);
			const col = i % 4;
			const x = cx - 75 + col * 50;
			const y = 70 + row * 50;
			return (
				<g key={i}>
					<circle cx={x} cy={y} r={15} fill={C.brown} />
					{i < marked && <circle cx={x} cy={y} r={22} fill="none" stroke={C.red} strokeWidth={5} />}
				</g>
			);
		})}
		<text x={cx} y={280} fontSize={30} fontWeight={900} fill={C.text} textAnchor="middle">{label}</text>
		<text x={cx} y={318} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle">{note}</text>
	</g>
);

const row = (a: string, b: string, c: string, color: string, at: number, key = false) => ({
	cells: [a, <Hl c={color}>{b}</Hl>, <Hl c={color}>{c}</Hl>],
	at,
	key,
});

export const Mark: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">标记重捕法</Header>
		<Appear at={mk1.from} style={{position: 'absolute', left: 90, top: 165, fontSize: 32, fontWeight: 700}}>
			适用：<Hl c={C.orange}>活动能力强、活动范围大</Hl>的动物（田鼠、鸟类、鱼类）
		</Appear>
		<svg width={1000} height={340} viewBox="0 0 1000 340" style={{position: 'absolute', left: 60, top: 220}}>
			<Defs />
			<G at={mk2.from}>
				<Catch cx={160} n={8} marked={8} label="第一次捕获" note="标记 M 只，放回" />
			</G>
			<G at={mk3.from}>
				<Arrow x1={300} y1={130} x2={420} y2={130} color={C.muted} />
				<text x={360} y={100} fontSize={22} fontWeight={700} fill={C.muted} textAnchor="middle">充分混合</text>
				<Catch cx={560} n={12} marked={3} label="第二次捕获 n 只" note="其中带标记 m 只" />
			</G>
		</svg>
		<Appear at={mk4.from} style={{position: 'absolute', left: 820, top: 250, width: 300}}>
			<Card style={{textAlign: 'center', padding: '22px 20px'}}>
				<div style={{fontSize: 30, fontWeight: 800, color: C.muted}}>M : N = m : n</div>
				<div style={{fontSize: 48, fontWeight: 900, color: C.red, marginTop: 10}}>N = Mn / m</div>
				<div style={{fontSize: 26, fontWeight: 700, marginTop: 10}}>50 × 40 ÷ 10 = 200</div>
			</Card>
		</Appear>
		<div style={{position: 'absolute', left: 1170, right: 90, top: 230}}>
			<Table
				head={['情况', 'm', '估算值']}
				cols="2.2fr 1fr 1.1fr"
				at={mk5.from}
				fontSize={27}
				rowHeight={92}
				rows={[
					row('标记物脱落', '偏小', '偏大', C.red, mk5.from),
					row('标记个体更难被捕', '偏小', '偏大', C.red, mk5.from + 20),
					row('未充分混合就重捕', '偏大', '偏小', C.green, mk6.from, true),
				]}
			/>
		</div>
		<Appear at={mk5.from} style={{position: 'absolute', left: 90, right: 90, top: 660}}>
			<div style={{fontSize: 32, fontWeight: 800, background: C.orangeSoft, borderRadius: 18, padding: '18px 28px', borderLeft: `10px solid ${C.orange}`}}>
				误差分析只看 <Hl>m</Hl>：m 偏小 → N 偏大；m 偏大 → N 偏小（M、n 是实际数，不会错）
			</div>
		</Appear>
		<Narration t={t} />
	</Scene>
);

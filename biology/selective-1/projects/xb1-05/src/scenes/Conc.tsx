import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene, useRamp} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.conc;
const {cc1, cc2, cc3, cc4, cc5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const y = (v: number) => 40 + (40 - v) * 3;
// One action potential: resting level `rest`, peak `peak`.
const ap = (rest: number, peak: number) =>
	`M40,${y(rest)} L200,${y(rest)} C240,${y(rest)} 260,${y(peak)} 300,${y(peak)} C340,${y(peak)} 370,${y(rest)} 410,${y(rest)} L620,${y(rest)}`;

const up = (s: string) => <span style={{color: C.green, fontWeight: 800}}>{s}</span>;
const down = (s: string) => <span style={{color: C.red, fontWeight: 800}}>{s}</span>;

export const Conc: React.FC = () => {
	const na = useRamp(cc2.from + 20, 16);
	const k = useRamp(cc4.from + 20, 16);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点六">细胞外Na⁺、K⁺浓度的影响</Header>
			<Appear at={cc1.from} style={{position: 'absolute', left: 90, top: 180, fontSize: 36, fontWeight: 800}}>
				关键看膜内外的<Hl>浓度差</Hl>
			</Appear>
			<div style={{position: 'absolute', left: 90, width: 1060, top: 260}}>
				<Table
					head={['细胞外浓度', '静息电位', '动作电位峰值']}
					cols="1.1fr 1.2fr 1fr"
					at={cc2.from - 10}
					fontSize={30}
					rowHeight={78}
					rows={[
						{cells: ['Na^+升高', '基本不变', up('升高')], at: cc2.from},
						{cells: ['Na^+降低', '基本不变', down('降低')], at: at(cc2.from, cc2.to, 0.7)},
						{cells: ['K^+升高', down('绝对值变小'), '—'], at: cc4.from},
						{cells: ['K^+降低', up('绝对值变大'), '—'], at: at(cc4.from, cc4.to, 0.7)},
					]}
				/>
			</div>
			<Appear at={cc2.from} style={{position: 'absolute', left: 1200, top: 200}}>
				<svg width={640} height={420} viewBox="0 0 640 420">
					<line x1={40} y1={20} x2={40} y2={y(-95)} stroke={C.text} strokeWidth={3} />
					<line x1={40} y1={y(0)} x2={620} y2={y(0)} stroke={C.line} strokeWidth={3} strokeDasharray="8 6" />
					<text x={50} y={y(0) - 8} fontSize={22} fill={C.muted}>0 mV</text>
					<path d={ap(-70, 30)} fill="none" stroke="#bdb3a6" strokeWidth={6} />
					<path d={ap(-70, 45)} fill="none" stroke={C.green} strokeWidth={6} opacity={na} />
					<path d={ap(-55, 30)} fill="none" stroke={C.red} strokeWidth={6} opacity={k} strokeDasharray="14 8" />
					<text x={440} y={60} fontSize={22} fontWeight={800} fill="#9d9286">正常</text>
					<text x={440} y={90} fontSize={22} fontWeight={800} fill={C.green} opacity={na}>Na⁺↑：峰值升高</text>
					<text x={440} y={120} fontSize={22} fontWeight={800} fill={C.red} opacity={k}>K⁺↑：静息电位</text>
					<text x={440} y={146} fontSize={22} fontWeight={800} fill={C.red} opacity={k}>绝对值变小</text>
				</svg>
			</Appear>
			<Appear at={cc3.from} style={{position: 'absolute', left: 1200, right: 90, top: 640, fontSize: 28, fontWeight: 700, lineHeight: 1.5}}>
				Na⁺浓度对静息电位<Hl c={C.orange}>基本无影响</Hl>：静息电位由K⁺外流决定
			</Appear>
			<Appear at={cc5.from} style={{position: 'absolute', left: 90, right: 90, top: 760}}>
				<Callout label="解题方法" style={{fontSize: 30}}>
					<Hl c={C.orange}>静息电位看K⁺</Hl>，<Hl c={C.green}>动作电位看Na⁺</Hl>，再看<Hl>浓度差</Hl>变大还是变小
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};

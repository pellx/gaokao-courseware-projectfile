import React from 'react';
import {Appear, Callout, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.yeast;
const {ys1, ys2, ys3, ys4, ys5} = t.cue;

// Counting chamber: 1 mm × 1 mm drawn as 5 × 5 medium squares, each 4 × 4 small squares.
const S = 420;
const M = S / 5;
const COUNTED = [
	[0, 0],
	[4, 0],
	[2, 2],
	[0, 4],
	[4, 4],
];
const cells = Array.from({length: 25}, (_, i) => [i % 5, Math.floor(i / 5)]);

const STEPS: [string, string, number][] = [
	['先盖盖玻片', C.red, 0],
	['培养液滴在盖玻片边缘，自行渗入', C.orange, 1],
	['吸去多余培养液', C.text, 1],
	['吸取前振荡试管，摇匀', C.red, 2],
	['稍待片刻，菌体沉降后计数', C.text, 2],
];

export const Yeast: React.FC = () => {
	const at = [ys2.from, ys2.from + 40, ys3.from];
	return (
		<Scene duration={t.duration}>
			<Header tag="考点七">探究培养液中酵母菌种群数量的变化</Header>
			<svg width={520} height={520} viewBox="0 0 520 520" style={{position: 'absolute', left: 90, top: 170}}>
				<G at={ys1.from}>
					<rect x={40} y={40} width={S} height={S} fill={C.panel} stroke={C.text} strokeWidth={5} />
					{cells.map(([cx, cy]) => {
						const hl = COUNTED.some(([a, b]) => a === cx && b === cy);
						return (
							<g key={`${cx}-${cy}`}>
								<rect x={40 + cx * M} y={40 + cy * M} width={M} height={M} fill={hl ? C.orangeSoft : 'none'} stroke={C.text} strokeWidth={2.5} />
								{[1, 2, 3].map((k) => (
									<g key={k} stroke={C.line} strokeWidth={1.5}>
										<line x1={40 + cx * M + (k * M) / 4} y1={40 + cy * M} x2={40 + cx * M + (k * M) / 4} y2={40 + (cy + 1) * M} />
										<line x1={40 + cx * M} y1={40 + cy * M + (k * M) / 4} x2={40 + (cx + 1) * M} y2={40 + cy * M + (k * M) / 4} />
									</g>
								))}
								{hl &&
									[0.3, 0.7].map((f) => <ellipse key={f} cx={40 + cx * M + f * M} cy={40 + cy * M + (1 - f) * M} rx={9} ry={7} fill={C.brown} />)}
							</g>
						);
					})}
					<text x={250} y={500} fontSize={26} fontWeight={800} fill={C.muted} textAnchor="middle">计数室：1 mm × 1 mm，深 0.1 mm</text>
					<text x={250} y={26} fontSize={24} fontWeight={800} fill={C.orange} textAnchor="middle">数四角和中央 5 个中方格</text>
				</G>
			</svg>
			<div style={{position: 'absolute', left: 660, right: 90, top: 180, display: 'flex', flexDirection: 'column', gap: 12}}>
				{STEPS.map(([s, c, k], i) => (
					<Appear key={s} at={at[k] + (i % 2) * 15} dx={-20} dy={0}>
						<div style={{fontSize: 29, fontWeight: 800, color: c, display: 'flex', gap: 14, alignItems: 'center'}}>
							<span style={{background: c === C.text ? C.muted : c, color: '#fff', borderRadius: 24, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0}}>{i + 1}</span>
							{s}
						</div>
					</Appear>
				))}
				<Appear at={ys4.from}>
					<Card style={{marginTop: 8, fontSize: 30, fontWeight: 800, textAlign: 'center', padding: '16px 20px'}}>
						每毫升菌数 = <Hl>计数室中的菌数 × 10<sup style={{fontSize: '0.6em'}}>4</sup> × 稀释倍数</Hl>
						<div style={{fontSize: 23, color: C.muted, fontWeight: 700, marginTop: 4}}>
							计数室体积 0.1 mm<sup style={{fontSize: '0.6em'}}>3</sup>，1 mL = 1000 mm<sup style={{fontSize: '0.6em'}}>3</sup>
						</div>
					</Card>
				</Appear>
			</div>
			<Appear at={ys5.from} style={{position: 'absolute', left: 90, right: 90, top: 715}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 29}}>
					先盖后滴；菌体过多要<Hl c={C.orange}>稀释</Hl>；<Hl>不需另设对照</Hl>（前后自身对照），但要<Hl c={C.orange}>重复实验</Hl>取平均值
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};

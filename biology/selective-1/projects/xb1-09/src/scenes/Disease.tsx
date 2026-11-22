import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.disease;
const {di2, di3, di4, di5, di6} = t.cue;
export const DISEASE_DUR = t.duration;

const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const ROWS = [
	{h: '生长激素', when: '幼年分泌不足', d: '侏儒症', note: '身材矮小，智力正常', key: true, at: di2.from},
	{h: '甲状腺激素', when: '幼年分泌不足', d: '呆小症', note: '身材矮小，智力低下', key: true, at: at(di2.from, di2.to, 0.5)},
	{h: '生长激素', when: '幼年分泌过多', d: '巨人症', note: '', key: false, at: di3.from},
	{h: '生长激素', when: '成年分泌过多', d: '肢端肥大症', note: '', key: false, at: at(di3.from, di3.to, 0.5)},
	{h: '甲状腺激素', when: '分泌过多', d: '甲亢', note: '消瘦、易激动', key: false, at: di4.from},
	{h: '甲状腺激素', when: '缺碘，合成不足', d: '地方性甲状腺肿', note: '大脖子病', key: false, at: at(di4.from, di4.to, 0.5)},
	{h: '胰岛素', when: '胰岛 B 细胞受损', d: '糖尿病', note: '', key: false, at: di5.from},
];

export const Disease: React.FC = () => {
	const frame = useCurrentFrame();
	const focus = frame >= di6.from;
	return (
		<Scene duration={DISEASE_DUR}>
			<Header tag="考点八">激素分泌异常与疾病</Header>
			<div style={{position: 'absolute', left: 110, right: 110, top: 165}}>
				<div style={{display: 'grid', gridTemplateColumns: '0.9fr 1fr 1fr 1.1fr', fontSize: 32}}>
					{['激素', '异常情况', '疾病', '特点'].map((h) => (
						<Appear key={h} at={di2.from - 10} dy={0}>
							<div style={{padding: '10px 22px', background: C.orange, color: '#fff', fontWeight: 800}}>{h}</div>
						</Appear>
					))}
					{ROWS.map((r, i) =>
						[r.h, r.when, r.d, r.note].map((cell, j) => (
							<Appear key={`${i}-${j}`} at={r.at} dx={-20} dy={0}>
								<div
									style={{
										padding: '0 22px',
										height: 72,
										display: 'flex',
										alignItems: 'center',
										background: focus && r.key ? C.orangeSoft : i % 2 ? '#fff' : C.panel,
										borderBottom: `3px solid ${C.line}`,
										fontWeight: j === 2 ? 800 : 500,
										color: j === 2 ? C.red : j === 3 && r.key && focus ? C.red : C.text,
										opacity: focus && !r.key ? 0.45 : 1,
									}}
								>
									{cell}
								</div>
							</Appear>
						)),
					)}
				</div>
				<Appear at={di6.from} style={{marginTop: 24}}>
					<Callout label="考法" style={{fontSize: 33}}>
						侏儒症与呆小症都“矮小”，区别看<Hl>智力</Hl>；判断病因先分清<Hl c={C.orange}>幼年</Hl>还是<Hl c={C.orange}>成年</Hl>。
					</Callout>
				</Appear>
			</div>
			<Narration t={t} />
		</Scene>
	);
};

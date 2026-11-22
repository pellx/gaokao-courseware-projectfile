import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.methods;
const {me2, me3, me4, me5, me6, me7, me8} = t.cue;
export const METHODS_DUR = t.duration;

const METHODS = [
	{name: '摘除法', kind: '减法', ex: '切除甲状腺、摘除睾丸', color: C.red},
	{name: '移植法', kind: '加法', ex: '移植睾丸、卵巢', color: C.green},
	{name: '注射法', kind: '加法', ex: '注射胰岛素、生长激素', color: C.green},
	{name: '饲喂法', kind: '加法', ex: '蝌蚪饲喂甲状腺激素\n仅限不会被消化的激素', color: C.green},
];

const CONTROLS = [
	['摘除 / 切除', '假手术：做相同手术但不摘除', '排除手术创伤的影响'],
	['注射', '注射等量生理盐水（或溶剂）', '排除注射操作、溶剂的影响'],
];

// O2-consumption bars for the worked example.
const BARS = [
	{label: '乙组\n假手术', h: 1, color: C.green},
	{label: '甲组\n切除甲状腺', h: 0.45, color: C.red},
	{label: '甲组再注射\n甲状腺激素', h: 0.95, color: C.orange},
];

export const Methods: React.FC = () => {
	const frame = useCurrentFrame();
	const p1 = interpolate(frame, [me6.from - 15, me6.from], [1, 0], clamp);
	const feedHi = interpolate(frame, [me3.from, me3.from + 10], [0, 1], clamp);
	const barAt = [me7.from + 60, me7.from + 90, me8.from + 40];

	return (
		<Scene duration={METHODS_DUR}>
			<Header tag="考点四">研究激素功能的方法与对照设计</Header>
			<div style={{position: 'absolute', left: 100, right: 100, top: 170, opacity: p1}}>
				<div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 22}}>
					{METHODS.map((m, i) => (
						<Appear key={m.name} at={me2.from + 10 + i * 15}>
							<div style={{background: C.panel, border: `3px solid ${i === 3 && feedHi > 0 ? C.orange : C.line}`, borderRadius: 20, padding: '18px 22px', height: 230, boxSizing: 'border-box', boxShadow: i === 3 ? `0 0 0 ${6 * feedHi}px ${C.orangeSoft}` : undefined}}>
								<div style={{display: 'flex', alignItems: 'center', gap: 12}}>
									<span style={{fontSize: 42, fontWeight: 900, color: m.color}}>{m.name}</span>
									<span style={{background: m.color, color: '#fff', fontSize: 24, padding: '2px 10px', borderRadius: 8}}>{m.kind}</span>
								</div>
								<div style={{fontSize: 29, marginTop: 14, lineHeight: 1.5, whiteSpace: 'pre-line'}}>{m.ex}</div>
							</div>
						</Appear>
					))}
				</div>
				<Appear at={me4.from} style={{marginTop: 34}}>
					<div style={{fontSize: 38, fontWeight: 800, marginBottom: 14}}>对照组怎么设？</div>
					<div style={{display: 'grid', gridTemplateColumns: '0.7fr 1.5fr 1.2fr', fontSize: 32}}>
						{['实验处理', '对照组', '目的'].map((h) => (
							<div key={h} style={{padding: '10px 22px', background: C.orange, color: '#fff', fontWeight: 800}}>{h}</div>
						))}
						{CONTROLS.map((row, i) =>
							row.map((cell, j) => (
								<Appear key={`${i}-${j}`} at={i === 0 ? me4.from + 20 : me5.from} dx={-20} dy={0}>
									<div style={{padding: '14px 22px', background: i % 2 ? '#fff' : C.panel, borderBottom: `3px solid ${C.line}`, fontWeight: j === 1 ? 800 : 500, color: j === 1 ? C.red : C.text}}>{cell}</div>
								</Appear>
							)),
						)}
					</div>
				</Appear>
			</div>

			<div style={{position: 'absolute', left: 100, right: 100, top: 170}}>
				<Appear at={me6.from}>
					<Card style={{fontSize: 34, lineHeight: 1.6}}>
						<span style={{background: C.orange, color: '#fff', fontWeight: 700, fontSize: 28, padding: '2px 12px', borderRadius: 8, marginRight: 12}}>例题</span>
						探究甲状腺激素对小鼠代谢的影响：甲组切除甲状腺，乙组应如何处理？检测什么指标？
					</Card>
				</Appear>
				<div style={{display: 'flex', gap: 50, marginTop: 30}}>
					<div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: 18}}>
						<Appear at={me7.from}>
							<div style={{fontSize: 36, lineHeight: 1.7}}>
								乙组：<Hl c={C.green}>做手术但不切除甲状腺</Hl>
								<br />
								指标：<Hl c={C.green}>耗氧量</Hl>（反映代谢强弱）
								<br />
								预期：甲组耗氧量 <Hl>低于</Hl> 乙组
							</div>
						</Appear>
						<Appear at={me8.from}>
							<div style={{background: C.orangeSoft, borderRadius: 16, padding: '14px 22px', fontSize: 33, lineHeight: 1.6}}>
								进一步：给甲组<Hl c={C.orange}>注射甲状腺激素</Hl>，耗氧量恢复
								<br />
								<b>“先减后加”</b>，证明作用来自甲状腺激素
							</div>
						</Appear>
					</div>
					<Appear at={me7.from}>
					<svg width={640} height={420} viewBox="0 0 640 420">
						<line x1={60} y1={340} x2={620} y2={340} stroke={C.text} strokeWidth={4} />
						<line x1={60} y1={340} x2={60} y2={20} stroke={C.text} strokeWidth={4} />
						<text x={74} y={40} fontSize={28} fontWeight={700}>耗氧量</text>
						{BARS.map((b, i) => {
							const g = interpolate(frame, [barAt[i], barAt[i] + 20], [0, 1], clamp);
							const h = 260 * b.h * g;
							return (
								<g key={i} opacity={g > 0 ? 1 : 0}>
									<rect x={110 + i * 175} y={340 - h} width={110} height={h} rx={8} fill={b.color} />
									{b.label.split('\n').map((l, k) => (
										<text key={k} x={165 + i * 175} y={375 + k * 32} fontSize={26} textAnchor="middle">{l}</text>
									))}
								</g>
							);
						})}
					</svg>
					</Appear>
				</div>
			</div>
			<Narration t={t} />
		</Scene>
	);
};

import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Header, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {chem} from '../components/chem';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.composition;
const {co2, co3, co4, co5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const IN = ['水', '无机盐', '葡萄糖', '氨基酸', '血浆蛋白', '激素', '抗体', '尿素', 'O2', 'CO2'];
const OUT = [
	['血红蛋白', '红细胞内'],
	['呼吸酶', '细胞内'],
	['载体蛋白、受体', '细胞膜上'],
	['消化液', '与外界相通的管腔中'],
];
const IN_REACT = ['抗原与抗体结合', '乳酸与 NaHCO3 反应'];
const OUT_REACT = [
	['细胞呼吸', '细胞内'],
	['蛋白质合成', '细胞内（核糖体）'],
	['食物消化', '消化道'],
];

const Panel: React.FC<{title: string; color: string; soft: string; at: number; children: React.ReactNode}> = ({title, color, soft, at, children}) => (
	<Appear at={at} style={{flex: 1}}>
		<div style={{border: `4px solid ${color}`, borderRadius: 24, background: soft, padding: '20px 28px', height: 360, boxSizing: 'border-box'}}>
			<div style={{fontSize: 40, fontWeight: 900, color, marginBottom: 18}}>{title}</div>
			{children}
		</div>
	</Appear>
);

export const Composition: React.FC = () => {
	const frame = useCurrentFrame();
	const p1 = interpolate(frame, [co5.from - 15, co5.from], [1, 0], clamp);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点四">内环境成分的判断</Header>
			<div style={{position: 'absolute', left: 90, right: 90, top: 170, opacity: p1}}>
				<div style={{display: 'flex', gap: 30}}>
					<Panel title="✓ 属于内环境" color={C.green} soft={C.greenSoft} at={co2.from}>
						<div style={{display: 'flex', flexWrap: 'wrap', gap: 14}}>
							{IN.map((s, i) => (
								<Appear key={s} at={at(co2.from, co2.to, i / IN.length)} dy={10}>
									<span style={{display: 'inline-block', background: '#fff', border: `3px solid ${C.green}`, borderRadius: 14, padding: '8px 20px', fontSize: 38, fontWeight: 700}}>{chem(s)}</span>
								</Appear>
							))}
						</div>
					</Panel>
					<Panel title="✗ 不属于内环境" color={C.red} soft={C.redSoft} at={co3.from}>
						{OUT.map(([s, where], i) => (
							<Appear key={s} at={at(co3.from, co3.to, i / OUT.length)} dx={-20} dy={0}>
								<div style={{display: 'flex', alignItems: 'baseline', gap: 16, fontSize: 34, marginBottom: 16}}>
									<b style={{minWidth: 250}}>{s}</b>
									<span style={{color: C.red, fontWeight: 700}}>{where}</span>
								</div>
							</Appear>
						))}
					</Panel>
				</div>
				<Appear at={co4.from} style={{marginTop: 34}}>
					<div style={{display: 'flex', alignItems: 'center', gap: 20}}>
						<span style={{background: C.green, color: '#fff', fontWeight: 800, fontSize: 30, padding: '4px 14px', borderRadius: 8, flexShrink: 0}}>解题方法</span>
						<Chain
							fontSize={31}
							steps={[
								{label: '① 在细胞内？', color: C.red, at: co4.from + 10},
								{label: '② 在细胞膜上？', color: C.red, at: at(co4.from, co4.to, 0.25)},
								{label: '③ 在与外界相通的管腔中？', color: C.red, at: at(co4.from, co4.to, 0.5)},
								{label: '都不是 → 属于内环境', color: C.green, at: at(co4.from, co4.to, 0.8)},
							]}
						/>
					</div>
				</Appear>
			</div>
			<div style={{position: 'absolute', left: 90, right: 90, top: 170, display: 'flex', gap: 30, opacity: 1 - p1}}>
				<Panel title="发生在内环境中" color={C.green} soft={C.greenSoft} at={co5.from}>
					{IN_REACT.map((s, i) => (
						<Appear key={s} at={co5.from + 10 + i * 20} dx={-20} dy={0}>
							<div style={{fontSize: 42, fontWeight: 700, marginBottom: 26}}>{chem(s)}</div>
						</Appear>
					))}
				</Panel>
				<Panel title="不发生在内环境中" color={C.red} soft={C.redSoft} at={at(co5.from, co5.to, 0.45)}>
					{OUT_REACT.map(([s, where], i) => (
						<Appear key={s} at={at(co5.from, co5.to, 0.45 + i * 0.12)} dx={-20} dy={0}>
							<div style={{display: 'flex', alignItems: 'baseline', gap: 16, fontSize: 42, marginBottom: 26}}>
								<b style={{minWidth: 250}}>{s}</b>
								<span style={{color: C.red, fontWeight: 700}}>{where}</span>
							</div>
						</Appear>
					))}
				</Panel>
			</div>
			<Narration t={t} />
		</Scene>
	);
};

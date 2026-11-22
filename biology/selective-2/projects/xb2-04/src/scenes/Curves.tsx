import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Plot, sample} from '../components/plot';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.curves;
const {cv1, cv2, cv3, cv4, cv5} = t.cue;

const W = 540;
const H = 360;
const S = (x: number) => 1 / (1 + Math.exp(-12 * (x - 0.35)));

const Panel: React.FC<{title: string; color: string; at: number; children: React.ReactNode}> = ({title, color, at, children}) => (
	<Appear at={at} style={{width: W}}>
		<div style={{textAlign: 'center', fontSize: 36, fontWeight: 900, color, marginBottom: 6}}>{title}</div>
		{children}
	</Appear>
);

export const Curves: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">种间关系曲线的判断</Header>
		<div style={{position: 'absolute', left: 70, right: 70, top: 180, display: 'flex', justifyContent: 'space-between'}}>
			<Panel title="互利共生：同步" color={C.green} at={cv2.from}>
				<Plot
					id="mu"
					w={W}
					h={H}
					xLabel="时间"
					yLabel="数量"
					at={cv2.from}
					fontSize={22}
					curves={[
						{pts: sample((x) => 0.8 * S(x)), color: C.green, at: cv2.from, label: '甲', lx: 0.92, ly: 0.9},
						{pts: sample((x) => 0.55 * S(x)), color: C.orange, at: cv2.from, label: '乙', lx: 0.92, ly: 0.65},
					]}
				/>
			</Panel>
			<Panel title="捕食：交替波动" color={C.red} at={cv3.from}>
				<Plot
					id="pr"
					w={W}
					h={H}
					xLabel="时间"
					yLabel="数量"
					at={cv3.from}
					fontSize={22}
					curves={[
						{pts: sample((x) => 0.6 + 0.28 * Math.sin(2 * Math.PI * 2 * x)), color: C.green, at: cv3.from, label: '被捕食者', lx: 0.62, ly: 0.98},
						{pts: sample((x) => 0.28 + 0.14 * Math.sin(2 * Math.PI * 2 * x - Math.PI / 2)), color: C.red, at: cv3.from, label: '捕食者', lx: 0.36, ly: 0.04},
					]}
				/>
			</Panel>
			<Panel title="竞争：此消彼长" color={C.orange} at={cv4.from}>
				<Plot
					id="cp"
					w={W}
					h={H}
					xLabel="时间"
					yLabel="数量"
					at={cv4.from}
					fontSize={22}
					curves={[
						{pts: sample((x) => 0.85 * S(x)), color: C.orange, at: cv4.from, label: '甲', lx: 0.92, ly: 0.95},
						{pts: sample((x) => 0.5 * S(x + 0.1) * Math.exp(-(Math.max(0, x - 0.3) ** 2) / 0.02)), color: C.muted, at: cv4.from, label: '乙被淘汰', lx: 0.68, ly: 0.18},
					]}
				/>
			</Panel>
		</div>
		<Appear at={cv1.from} style={{position: 'absolute', left: 90, right: 90, top: 610, fontSize: 30, fontWeight: 700, textAlign: 'center', color: C.muted}}>
			题目给出两种生物的数量变化曲线，判断种间关系
		</Appear>
		<Appear at={cv5.from} style={{position: 'absolute', left: 90, right: 90, top: 680}}>
			<Callout label="解题方法" style={{fontSize: 31}}>
				同步变化 → <Hl c={C.green}>互利共生</Hl>；交替波动 → <Hl>捕食</Hl>；此消彼长 → <Hl c={C.orange}>竞争</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

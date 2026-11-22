import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Tree} from '../components/kit';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.pns;
const {ps2, ps3, ps4, ps5, ps6} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const Title: React.FC<{at: number; children: string}> = ({at, children}) => (
	<Appear at={at} style={{fontSize: 34, fontWeight: 900, color: C.muted, marginBottom: 10}}>
		{children}
	</Appear>
);

export const Pns: React.FC = () => {
	const frame = useCurrentFrame();
	const note = interpolate(frame, [ps6.from - 12, ps6.from], [1, 0], clamp);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点二">外周神经系统</Header>
			<div style={{position: 'absolute', left: 90, top: 170}}>
				<Title at={ps2.from}>按解剖位置</Title>
				<Tree
					width={820}
					height={500}
					colWidth={285}
					boxWidth={240}
					boxHeight={96}
					fontSize={32}
					root={{
						label: '神经系统',
						at: ps2.from,
						children: [
							{
								label: '中枢神经系统',
								color: C.muted,
								at: ps2.from,
								children: [
									{label: '脑', color: C.muted, at: ps2.from},
									{label: '脊髓', color: C.muted, at: ps2.from},
								],
							},
							{
								label: '外周神经系统',
								color: C.red,
								at: ps2.from + 10,
								children: [
									{label: '脑神经', note: '12 对 · 头面部', color: C.orange, at: at(ps2.from, ps2.to, 0.2)},
									{label: '脊神经', note: '31 对 · 躯干、四肢', color: C.green, at: at(ps2.from, ps2.to, 0.6)},
								],
							},
						],
					}}
				/>
			</div>
			<div style={{position: 'absolute', left: 1000, top: 170}}>
				<Title at={ps4.from}>按功能</Title>
				<Tree
					width={840}
					height={500}
					colWidth={290}
					boxWidth={250}
					boxHeight={96}
					fontSize={32}
					root={{
						label: '外周神经',
						color: C.red,
						at: ps4.from,
						children: [
							{label: '传入神经', note: '感觉神经', color: C.orange, at: ps4.from + 10},
							{
								label: '传出神经',
								note: '运动神经',
								color: C.red,
								at: at(ps4.from, ps4.to, 0.55),
								children: [
									{label: '躯体运动神经', note: '支配躯体运动', color: C.red, at: ps5.from},
									{label: '内脏运动神经', note: '= 自主神经系统', color: C.green, at: at(ps5.from, ps5.to, 0.5)},
								],
							},
						],
					}}
				/>
			</div>
			<Appear at={ps3.from} style={{position: 'absolute', left: 90, right: 90, top: 740, opacity: note}}>
				<div style={{fontSize: 32, fontWeight: 700, background: C.panel, border: `3px solid ${C.line}`, borderRadius: 16, padding: '12px 24px'}}>
					注意：脑神经和脊神经中，<Hl c={C.orange}>都有支配内脏器官的神经</Hl>
				</div>
			</Appear>
			<Appear at={ps6.from} style={{position: 'absolute', left: 90, right: 90, top: 730}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 32}}>
					脑神经和脊神经都属于<Hl>外周神经系统</Hl>，不属于中枢神经系统。
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};

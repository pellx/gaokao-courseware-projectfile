import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.experiment;
const {ex1, ex2, ex3, ex4, ex5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const Tag: React.FC<{color: string; children: string}> = ({color, children}) => (
	<div style={{width: 150, flexShrink: 0, textAlign: 'center', background: color, color: '#fff', fontSize: 30, fontWeight: 900, borderRadius: 12, padding: '10px 0'}}>{children}</div>
);

export const Experiment: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">验证胰岛素作用的实验</Header>
		<Appear at={ex1.from} style={{position: 'absolute', left: 90, top: 180, fontSize: 34, fontWeight: 800}}>
			生理状况相同的小鼠 → 先<Hl c={C.brown}>饥饿处理</Hl>
		</Appear>
		<div style={{position: 'absolute', left: 90, top: 270, display: 'flex', flexDirection: 'column', gap: 36}}>
			<Appear at={at(ex2.from, ex2.to, 0.5)} dx={-20} dy={0} style={{display: 'flex', alignItems: 'center', gap: 20}}>
				<Tag color={C.green}>实验组</Tag>
				<Chain
					fontSize={30}
					gap={10}
					steps={[
						{label: '注射胰岛素溶液', color: C.green, at: at(ex2.from, ex2.to, 0.5)},
						{label: '低血糖症状', color: C.red, at: ex3.from},
						{label: '注射葡萄糖溶液', color: C.green, at: ex4.from},
						{label: '症状缓解', color: C.green, at: at(ex4.from, ex4.to, 0.4)},
					]}
				/>
			</Appear>
			<Appear at={at(ex2.from, ex2.to, 0.75)} dx={-20} dy={0} style={{display: 'flex', alignItems: 'center', gap: 20}}>
				<Tag color={C.orange}>对照组</Tag>
				<Chain
					fontSize={30}
					gap={10}
					steps={[
						{label: '注射等量生理盐水', color: C.orange, at: at(ex2.from, ex2.to, 0.75)},
						{label: '活动正常', at: at(ex3.from, ex3.to, 0.6)},
					]}
				/>
			</Appear>
		</div>
		<Appear at={ex3.from} style={{position: 'absolute', left: 90, top: 500, fontSize: 30, fontWeight: 700, color: C.muted}}>
			低血糖症状：活动减少，甚至昏迷
		</Appear>
		<Appear at={ex5.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				两次对照：先注射胰岛素（与生理盐水组对照）证明能降血糖；再注射葡萄糖（<Hl>自身前后对照</Hl>）排除其他原因
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

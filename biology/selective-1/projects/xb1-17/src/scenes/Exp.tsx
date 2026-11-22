import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.exp;
const {ex2, ex3, ex4, ex5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const Row: React.FC<{tag: string; color: string; steps: [string, string][]; from: number; to: number}> = ({tag, color, steps, from, to}) => (
	<div style={{display: 'flex', alignItems: 'center', gap: 16}}>
		<Appear at={from} dx={-20} dy={0}>
			<div style={{width: 150, fontSize: 32, fontWeight: 900, color}}>{tag}</div>
		</Appear>
		<Chain fontSize={30} gap={10} steps={steps.map(([label, c], i) => ({label, color: c, at: at(from, to, i * 0.3)}))} />
	</div>
);

export const Exp: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">免疫学实验题：验证疫苗的效果</Header>
		<Appear at={ex2.from} style={{position: 'absolute', left: 90, top: 180, fontSize: 30, fontWeight: 800}}>
			生理状况相同的同种小鼠，随机分为两组
		</Appear>
		<div style={{position: 'absolute', left: 90, top: 250, display: 'flex', flexDirection: 'column', gap: 26}}>
			<Row tag="实验组" color={C.green} from={ex2.from} to={ex2.to} steps={[['接种疫苗', C.green], ['注射同种病原体', C.red], ['正常存活', C.green]]} />
			<Row tag="对照组" color={C.orange} from={at(ex2.from, ex2.to, 0.3)} to={ex2.to} steps={[['等量生理盐水', C.orange], ['注射同种病原体', C.red], ['患病或死亡', C.red]]} />
			<Row tag="血清实验" color={C.brown} from={ex4.from} to={ex4.to} steps={[['已免疫小鼠的血清', C.brown], ['注射给未免疫小鼠', C.orange], ['再注射病原体，看是否存活', C.red]]} />
		</div>
		<Appear at={ex3.from} style={{position: 'absolute', left: 1380, top: 250, width: 450, fontSize: 28, fontWeight: 800, color: C.green, lineHeight: 1.5}}>
			结论：疫苗使小鼠获得对该病原体的免疫力
		</Appear>
		<Appear at={ex5.from} style={{position: 'absolute', left: 90, right: 90, top: 620}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				自变量：<Hl>是否接种疫苗</Hl>；对照组注射<Hl c={C.orange}>等量生理盐水</Hl>；因变量：<Hl c={C.green}>存活率或抗体含量</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

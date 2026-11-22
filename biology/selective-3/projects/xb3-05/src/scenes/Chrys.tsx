import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.chrys;
const {ch1, ch2, ch3, ch4, ch5, ch6} = t.cue;

const Label: React.FC<{at: number; top: number; children: React.ReactNode}> = ({at, top, children}) => (
	<Appear at={at} style={{position: 'absolute', left: 90, top, fontSize: 32, fontWeight: 900, color: C.brown}}>
		{children}
	</Appear>
);

export const Chrys: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">实验：菊花的组织培养</Header>
		<Label at={ch1.from} top={170}>① 外植体消毒</Label>
		<Flow
			style={{left: 90, top: 225}}
			fontSize={32}
			rows={[
				[
					{label: '流水冲洗', at: ch1.from},
					{label: '酒精消毒', color: C.orange, at: ch1.from + 20},
					{label: '无菌水清洗', at: ch1.from + 40},
					{label: '次氯酸钠溶液', color: C.orange, at: ch2.from},
					{label: '无菌水清洗', note: '以免消毒剂伤害外植体', at: ch2.from + 20},
				],
			]}
		/>
		<Label at={ch3.from} top={360}>② 接种、培养和移栽</Label>
		<Flow
			style={{left: 90, top: 415}}
			fontSize={32}
			rows={[
				[
					{label: '接种', note: '诱导愈伤组织 · 不倒插', color: C.red, at: ch3.from},
					{label: '转接', note: '诱导生芽', color: C.orange, at: ch4.from},
					{label: '转接', note: '诱导生根', color: C.orange, at: ch4.from + 30},
					{label: '移栽', note: '先蛭石或珍珠岩，再土壤', color: C.green, at: ch5.from},
				],
			]}
		/>
		<Tip at={ch6.from} top={650} label="易错">
			外植体只能<Hl>消毒</Hl>，不能灭菌（会杀死外植体细胞）；培养基和器械才<Hl>灭菌</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.variant;
const {va1, va2, va3, va4} = t.cue;

export const Variant: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">9∶3∶3∶1 的变式（AaBb 自交）</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				at={va1.from}
				cols="220px 1fr 300px 220px"
				fontSize={30}
				rowHeight={80}
				head={['F2 比例', '原因', '合并方式', '测交比例']}
				rows={[
					{at: va2.from, cells: [<Hl>9∶7</Hl>, '双显性才表现一种性状', '9 ∣ 3＋3＋1', '1∶3']},
					{at: va2.from + 70, cells: [<Hl>9∶6∶1</Hl>, '两种单显性表现相同', '9 ∣ 3＋3 ∣ 1', '1∶2∶1']},
					{at: va3.from, cells: [<Hl>15∶1</Hl>, '有显性基因就表现', '9＋3＋3 ∣ 1', '3∶1']},
					{at: va3.from + 60, cells: [<Hl>12∶3∶1</Hl>, '一对显性基因掩盖另一对', '9＋3 ∣ 3 ∣ 1', '2∶1∶1']},
					{at: va3.from + 90, cells: [<Hl>9∶3∶4</Hl>, '一对隐性纯合掩盖另一对', '9 ∣ 3 ∣ 3＋1', '1∶1∶2']},
				]}
			/>
		</div>
		<Tip at={va4.from} top={650} label="解题方法" fontSize={33}>
			比例之和为 <Hl>16</Hl> → AaBb 自交、遵循自由组合；测交按同样方式合并 1∶1∶1∶1
		</Tip>
		<Narration t={t} />
	</Scene>
);

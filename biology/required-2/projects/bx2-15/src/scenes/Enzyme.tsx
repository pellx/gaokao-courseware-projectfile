import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.enzyme;
const {en1, en2, en3, en4} = t.cue;

export const Enzyme: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">基因通过控制酶的合成间接控制性状</Header>
		<Flow
			style={{left: 90, top: 180}}
			fontSize={36}
			rows={[
				[
					{label: '基因', at: en1.from, color: C.brown},
					{label: '酶', at: en1.from + 20, color: C.red},
					{label: '代谢过程', at: en1.from + 40, color: C.orange},
					{label: '性状', note: '间接控制', at: en1.from + 60, color: C.red},
				],
			]}
		/>
		<Flow
			style={{left: 90, top: 340}}
			fontSize={30}
			rows={[
				[
					{label: '白化病', at: en2.from, color: C.orange},
					{label: '酪氨酸酶基因异常', at: en2.from + 20},
					{label: '缺乏酪氨酸酶', at: en2.from + 40},
					{label: '不能合成黑色素', at: en2.from + 60, color: C.red},
				],
				[
					{label: '皱粒豌豆', at: en3.from, color: C.orange},
					{label: '插入一段 DNA', note: '淀粉分支酶基因', at: en3.from + 20},
					{label: '淀粉分支酶活性大大降低', at: en3.from + 40},
					{label: '淀粉含量低 → 失水皱缩', at: en3.from + 60, color: C.red},
				],
			]}
			rowGap={40}
		/>
		<Tip at={en4.from} top={640} label="解题方法" fontSize={34}>
			出现“<Hl>某种酶</Hl>不能合成、代谢受阻” → 基因<Hl>间接</Hl>控制性状
		</Tip>
		<Narration t={t} />
	</Scene>
);

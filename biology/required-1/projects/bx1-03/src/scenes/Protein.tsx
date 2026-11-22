import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.protein;
const {pr1, pr2, pr3, pr4, pr5} = t.cue;

export const Protein: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">检测蛋白质：双缩脲试剂与斐林试剂</Header>
		<Appear at={pr1.from} style={{position: 'absolute', left: 90, right: 90, top: 165}}>
			<Table
				at={pr1.from}
				cols="260px 1fr 1fr"
				fontSize={31}
				rowHeight={78}
				head={['比较项目', '斐林试剂', '双缩脲试剂']}
				rows={[
					{at: pr1.from, cells: ['检测对象', '还原糖', <><Hl>蛋白质</Hl></>]},
					{at: pr4.from, cells: ['CuSO4 浓度', <>乙液 <Hl c={C.orange}>0.05 g/mL</Hl></>, <>B 液 <Hl c={C.orange}>0.01 g/mL</Hl></>]},
					{at: pr2.from, cells: ['使用方法', <>甲、乙液<Hl c={C.orange}>等量混匀</Hl>后加入</>, <><Hl c={C.orange}>先加 A 液 1 mL</Hl>，再加 B 液 4 滴</>]},
					{at: pr3.from, cells: ['条件', <><Hl>50～65 ℃ 水浴加热</Hl></>, <><Hl>不加热</Hl></>]},
					{at: pr1.from, cells: ['现象', '砖红色沉淀', <>紫色反应</>]},
				]}
			/>
		</Appear>
		<Tip at={pr5.from} top={640} label="解题方法">
			斐林试剂“<Hl>混合、加热</Hl>”；双缩脲试剂“<Hl>分开加、不加热</Hl>”；两者 NaOH 浓度都是 0.1 g/mL
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.micro;
const {mi1, mi2, mi3, mi4} = t.cue;

export const Micro: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">显微镜直接计数法</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 180}}>
			<Table
				head={['比较项目', '显微镜直接计数法', '稀释涂布平板法']}
				cols="1fr 1.6fr 1.6fr"
				at={mi1.from}
				fontSize={31}
				rowHeight={80}
				rows={[
					{cells: ['工具', '细菌计数板或血细胞计数板', '固体培养基平板'], at: mi1.from},
					{cells: ['统计对象', <Hl>活菌 + 死菌</Hl>, <Hl c={C.green}>只统计活菌</Hl>], at: mi2.from, key: true},
					{cells: ['结果', <Hl>偏大</Hl>, <Hl c={C.green}>偏小</Hl>], at: mi2.from + 30, key: true},
					{cells: ['特点', '快速、直接', '需要培养，耗时较长'], at: mi3.from},
				]}
			/>
		</div>
		<Tip at={mi4.from} top={630} label="解题方法">
			显微镜<Hl>分不清死活</Hl>，所以偏大；平板计数因<Hl c={C.green}>细胞连在一起</Hl>只长一个菌落，所以偏小
		</Tip>
		<Narration t={t} />
	</Scene>
);

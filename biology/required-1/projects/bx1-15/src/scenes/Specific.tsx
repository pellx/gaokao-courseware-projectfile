import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.specific;
const {sp1, sp2, sp3, sp4} = t.cue;

export const Specific: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">专一性：淀粉酶对淀粉和蔗糖的水解作用</Header>
		<Appear at={sp1.from} style={{position: 'absolute', left: 90, top: 155, fontSize: 33, fontWeight: 800}}>
			每一种酶只能催化<Hl>一种或一类</Hl>化学反应
		</Appear>
		<Appear at={sp2.from} style={{position: 'absolute', left: 90, right: 90, top: 225}}>
			<Table
				at={sp2.from}
				cols="260px 1fr 1fr"
				fontSize={32}
				rowHeight={78}
				head={['比较项目', '1 号试管', '2 号试管']}
				rows={[
					{at: sp2.from, cells: ['底物', '可溶性淀粉溶液', '蔗糖溶液']},
					{at: sp2.from + 30, cells: ['加入的酶', '淀粉酶溶液', '淀粉酶溶液']},
					{at: sp2.from + 60, cells: ['检测试剂', <Hl c={C.orange}>斐林试剂（水浴加热）</Hl>, <Hl c={C.orange}>斐林试剂（水浴加热）</Hl>]},
					{at: sp2.from + 90, cells: ['现象', <Hl>砖红色沉淀</Hl>, '无砖红色沉淀']},
				]}
			/>
		</Appear>
		<Tip at={sp3.from} top={640} label="易错">
			<Hl>不能用碘液</Hl>检测：碘液无法判断蔗糖是否被水解
		</Tip>
		<Tip at={sp4.from} top={755} label="解题方法">
			验证专一性：<Hl>同酶异底</Hl>或<Hl>同底异酶</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

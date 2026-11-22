import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.judge;
const {jd1, jd2, jd3, jd4, jd5} = t.cue;

const k = (s: string, c: string) => <span style={{color: c, fontWeight: 900}}>{s}</span>;

export const Judge: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">信息种类的判断：看载体</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				head={['实例', '载体', '信息种类']}
				cols="2.2fr 1fr 1fr"
				at={jd1.from}
				fontSize={28}
				rowHeight={58}
				rows={[
					{cells: ['萤火虫发光、蝙蝠回声定位', '光、声', k('物理信息', C.orange)], at: jd2.from},
					{cells: ['雄鸟鸣叫', '声', k('物理信息', C.orange)], at: jd2.from + 30},
					{cells: ['狗用尿液标记领地', '化学物质', k('化学信息', C.green)], at: jd3.from},
					{cells: ['昆虫释放性外激素', '化学物质', k('化学信息', C.green)], at: jd3.from + 30},
					{cells: ['蜜蜂跳圆圈舞、摆尾舞', '动作', k('行为信息', C.red)], at: jd4.from},
					{cells: ['雄鸟求偶时的炫耀动作', '动作', k('行为信息', C.red)], at: jd4.from + 30},
				]}
			/>
		</div>
		<Appear at={jd5.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31}}>
				同一只雄鸟：<Hl c={C.orange}>鸣叫</Hl>是物理信息，<Hl>炫耀动作</Hl>是行为信息——不看生物，看载体
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

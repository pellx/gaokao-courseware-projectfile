import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.judge;
const {jd1, jd2, jd3, jd4, jd5, jd6} = t.cue;

const k = (s: string, c: string) => <span style={{color: c, fontWeight: 900}}>{s}</span>;

export const Judge: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">生态工程原理的判断</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Table
				head={['实例', '原理']}
				cols="3fr 1.1fr"
				at={jd1.from}
				fontSize={29}
				rowHeight={78}
				rows={[
					{cells: ['湿地中种植多种净化能力强的水生植物', k('自生', C.green)], at: jd2.from},
					{cells: ['桑基鱼塘：塘泥肥桑、蚕沙喂鱼', k('循环', C.orange)], at: jd3.from},
					{cells: ['西北干旱地区种杨树，大片死亡', k('违背协调', C.red)], at: jd4.from},
					{cells: ['只种树不顾农民生活，“前面造林、后面砍林”', k('违背整体', C.brown)], at: jd5.from},
				]}
			/>
		</div>
		<Appear at={jd6.from} style={{position: 'absolute', left: 90, right: 90, top: 590}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				抓关键词：多物种、互利共存——<Hl c={C.green}>自生</Hl>；废物利用——<Hl c={C.orange}>循环</Hl>；适应环境、不超载——<Hl>协调</Hl>；兼顾经济社会——<Hl c={C.brown}>整体</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.lamarck;
const {la1, la2, la3, la4} = t.cue;

export const Lamarck: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">拉马克的进化学说</Header>
		<Rows
			style={{left: 90, right: 90, top: 180}}
			fontSize={32}
			gap={18}
			items={[
				{at: la1.from, color: C.orange, title: '主张', children: <>生物由更古老的生物进化而来，由低等到高等</>},
				{at: la2.from, color: C.red, title: '核心', children: <><Hl>用进废退</Hl>、<Hl>获得性遗传</Hl></>},
			]}
		/>
		<Flow
			style={{left: 90, top: 400}}
			fontSize={32}
			rows={[
				[
					{label: '经常伸长脖子吃高处树叶', at: la3.from, color: C.brown},
					{label: '脖子变长（用进）', at: la3.from + 40, color: C.orange},
					{label: '遗传给后代（获得性遗传）', at: la3.from + 80, color: C.red},
				],
			]}
		/>
		<Tip at={la4.from} top={580} label="解题方法" fontSize={33}>
			出现“<Hl>为了</Hl>”“<Hl>经常使用</Hl>”“<Hl>环境导致产生某种变异</Hl>” → 多为拉马克的观点
		</Tip>
		<Narration t={t} />
	</Scene>
);

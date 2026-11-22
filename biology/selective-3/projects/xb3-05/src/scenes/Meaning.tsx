import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.meaning;
const {mn1, mn2, mn3, mn4} = t.cue;

export const Meaning: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">植物体细胞杂交的意义</Header>
		<Cards
			top={190}
			height={330}
			titleSize={40}
			fontSize={33}
			gap={30}
			items={[
				{title: '意义', color: C.red, at: mn1.from, body: <><Hl>打破生殖隔离</Hl><br />实现<Hl>远缘杂交育种</Hl><br />培育植物新品种</>},
				{title: '实例', color: C.orange, at: mn2.from, body: <><Hl c={C.orange}>番茄—马铃薯</Hl><br />杂种植株</>},
				{title: '局限', color: C.brown, at: mn3.from, body: <>没有“地上结番茄、地下长马铃薯”<br /><span style={{color: C.muted}}>两套遗传物质的表达相互影响</span></>},
			]}
		/>
		<Tip at={mn4.from} top={580} label="解题方法">
			问意义，标准答法：<Hl>打破生殖隔离，实现远缘杂交育种</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

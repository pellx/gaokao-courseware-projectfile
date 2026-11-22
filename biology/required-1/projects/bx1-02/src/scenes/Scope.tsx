import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.scope;
const {sc1, sc2, sc3, sc4} = t.cue;

export const Scope: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">高倍显微镜的使用</Header>
		<Rows
			style={{left: 90, right: 90, top: 175}}
			fontSize={36}
			gap={20}
			items={[
				{at: sc1.from, color: C.red, title: '找', children: <>在<Hl>低倍镜</Hl>下找到要观察的物像</>},
				{at: sc2.from, color: C.orange, title: '移', children: <>把物像<Hl c={C.orange}>移到视野中央</Hl></>},
				{at: sc2.from + 45, color: C.orange, title: '转', children: <>转动<Hl c={C.orange}>转换器</Hl>，换上高倍物镜</>},
				{at: sc3.from, color: C.green, title: '调', children: <>视野变暗：调<Hl c={C.orange}>大光圈</Hl>或换<Hl c={C.orange}>凹面镜</Hl>；再调<Hl>细准焦螺旋</Hl>至物像清晰</>},
			]}
		/>
		<Tip at={sc4.from} top={660} label="易错">
			换高倍镜<Hl>前不升高镜筒</Hl>；换高倍镜<Hl>后只能调细准焦螺旋</Hl>，不能再动粗准焦螺旋
		</Tip>
		<Narration t={t} />
	</Scene>
);

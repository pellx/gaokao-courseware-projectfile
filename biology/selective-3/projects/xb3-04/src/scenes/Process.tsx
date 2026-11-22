import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Bullets, Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.process;
const {pr1, pr2, pr3, pr4, pr5} = t.cue;

export const Process: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">发酵工程的基本环节</Header>
		<Flow
			style={{left: 90, top: 200}}
			fontSize={32}
			rows={[
				[
					{label: '选育菌种', at: pr1.from},
					{label: '扩大培养', color: C.orange, note: '增加菌种数量', at: pr1.from + 30},
					{label: '配制培养基', at: pr2.from},
					{label: '灭菌', at: pr2.from + 10},
					{label: '接种', at: pr2.from + 20},
					{label: '发酵罐内发酵', color: C.red, note: '中心环节', at: pr3.from},
					{label: '分离、提纯', color: C.green, at: pr4.from},
				],
			]}
		/>
		<Bullets
			style={{left: 90, right: 90, top: 370}}
			fontSize={31}
			gap={20}
			items={[
				{at: pr1.from + 30, children: <><Hl c={C.orange}>扩大培养</Hl>：在接种前增加菌种的数量</>},
				{at: pr2.from, children: <>培养基和发酵设备都要经过<Hl c={C.orange}>严格灭菌</Hl>，防止杂菌污染</>},
				{at: pr3.from, color: C.red, children: <><Hl>发酵罐内发酵</Hl>是发酵工程的中心环节</>},
				{at: pr4.from, color: C.green, children: <><Hl c={C.green}>分离、提纯产物</Hl>，获得产品</>},
			]}
		/>
		<Tip at={pr5.from} top={720} label="易错">
			扩大培养的目的是<Hl>增加菌种数量</Hl>，不是获得产物；中心环节是<Hl>发酵罐内发酵</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

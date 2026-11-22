import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Chem} from '../components/chem';
import {Bullets, Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.microbe;
const {mi1, mi2, mi3, mi4} = t.cue;

export const Microbe: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">导入微生物细胞</Header>
		<Bullets
			style={{left: 90, right: 90, top: 185}}
			fontSize={36}
			items={[{at: mi1.from, children: <>原核生物作受体：<Hl c={C.orange}>繁殖快、多为单细胞、遗传物质相对较少</Hl></>}]}
		/>
		<Flow
			style={{left: 90, top: 320}}
			fontSize={42}
			arrows={[[undefined, '', '导入']]}
			rows={[
				[
					{label: '大肠杆菌', at: mi2.from},
					{label: <><Chem>Ca^2+</Chem> 处理</>, color: C.red, note: '能吸收周围环境中 DNA 的状态', at: mi2.from + 20},
					{label: '重组大肠杆菌', color: C.green, at: mi3.from},
				],
			]}
		/>
		<Tip at={mi4.from} top={560} label="易错">
			大肠杆菌<Hl>没有内质网、高尔基体</Hl>，不能加工蛋白质；需要加工的蛋白质可选<Hl c={C.orange}>酵母菌</Hl>等真核受体
		</Tip>
		<Narration t={t} />
	</Scene>
);

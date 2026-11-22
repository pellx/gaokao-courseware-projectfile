import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {F} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.others;
const {ot1, ot2, ot3, ot4} = t.cue;

export const Others: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">温度、水和矿质元素的影响</Header>
		<Rows
			style={{left: 90, right: 90, top: 175}}
			fontSize={32}
			gap={20}
			items={[
				{at: ot1.from, color: C.red, title: '温度', children: <>影响<Hl>酶的活性</Hl>，曲线先升后降</>},
				{at: ot2.from, color: C.orange, title: '水', children: <>缺水 → <Hl c={C.orange}>气孔关闭</Hl> → <F>CO2</F> 吸收减少</>},
				{at: ot3.from, color: C.green, title: '矿质元素', children: <><Hl c={C.green}>Mg</Hl>：叶绿素的成分；N：酶、ATP、NADPH 的组成元素</>},
			]}
		/>
		<Tip at={ot4.from} top={560} label="解题方法">
			多因素曲线：上升段限制因素是<Hl>横坐标所示因素</Hl>；平台段限制因素是<Hl c={C.orange}>其他因素</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

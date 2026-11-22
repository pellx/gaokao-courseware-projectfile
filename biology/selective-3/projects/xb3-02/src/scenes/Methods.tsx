import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.methods;
const {mt1, mt2, mt3, mt4, mt5} = t.cue;

export const Methods: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">常用的灭菌和消毒方法</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				head={['对象', '方法', '条件 / 说明']}
				cols="1.5fr 1.3fr 1.6fr"
				at={mt1.from}
				fontSize={29}
				rowHeight={62}
				rows={[
					{cells: ['接种环、接种针、试管口', <Hl>灼烧灭菌</Hl>, '酒精灯火焰'], at: mt1.from},
					{cells: ['玻璃器皿、金属用具', <Hl>干热灭菌</Hl>, '干热灭菌箱，物品要干燥'], at: mt2.from},
					{cells: ['培养基', <Hl>湿热灭菌</Hl>, '高压蒸汽：100 kPa、121 ℃、15～30 min'], at: mt3.from},
					{cells: ['牛奶', <Hl c={C.green}>巴氏消毒</Hl>, '较低温度处理，营养成分基本不被破坏'], at: mt4.from},
					{cells: ['操作者双手', <Hl c={C.green}>化学药剂消毒</Hl>, '酒精擦拭'], at: mt4.from + 15},
					{cells: ['接种室、超净工作台', <Hl c={C.green}>紫外线照射</Hl>, '物理消毒'], at: mt4.from + 30},
				]}
			/>
		</div>
		<Tip at={mt5.from} top={650} label="易错">
			培养基<Hl>不能用干热灭菌</Hl>（含水）；玻璃器皿要先<Hl c={C.orange}>干燥</Hl>再干热灭菌；红色是灭菌，绿色是消毒
		</Tip>
		<Narration t={t} />
	</Scene>
);

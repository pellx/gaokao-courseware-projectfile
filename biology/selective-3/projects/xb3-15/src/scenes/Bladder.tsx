import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.bladder;
const {bl1, bl2, bl3, bl4} = t.cue;

export const Bladder: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">乳腺生物反应器与膀胱生物反应器</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 180}}>
			<Table
				head={['比较项目', '乳腺生物反应器', '膀胱生物反应器']}
				cols="1fr 1.6fr 1.6fr"
				at={bl1.from}
				fontSize={31}
				rowHeight={78}
				rows={[
					{cells: ['受体细胞', <Hl>受精卵</Hl>, <Hl>受精卵</Hl>], at: bl1.from},
					{cells: ['启动子', '乳腺蛋白基因的启动子', '膀胱上皮细胞特异表达基因的启动子'], at: bl2.from},
					{cells: ['产物来源', <Hl c={C.orange}>乳汁</Hl>, <Hl c={C.green}>尿液</Hl>], at: bl2.from + 30},
					{cells: ['限制', <>只能是<Hl>雌性</Hl>，且要到<Hl>泌乳期</Hl></>, <Hl c={C.green}>不受性别和年龄限制</Hl>], at: bl3.from},
				]}
			/>
		</div>
		<Tip at={bl4.from} top={620} label="易错">
			两者区别在于<Hl>启动子</Hl>和<Hl>产物来源</Hl>；受体细胞都是受精卵，不是乳腺细胞或膀胱细胞
		</Tip>
		<Narration t={t} />
	</Scene>
);

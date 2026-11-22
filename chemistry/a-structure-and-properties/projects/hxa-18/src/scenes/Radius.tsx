import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Board, Rule} from '../components/board';
import {Rt} from './Frac';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.radius;
const {ra1, ra2, ra3, ra4, ra5, ra6} = t.cue;

export const Radius: React.FC = () => (
	<Board
		t={t}
		tag="考点七"
		title="原子半径与晶胞参数的关系"
		gap={18}
		callout={{label: '解题方法', at: ra6.from, text: <>找出<Hl>相切的那条线</Hl> → 数线上有几个半径 → 用 a 表示这条线的长度</>}}
	>
		<Appear at={ra1.from} style={{fontSize: 34, fontWeight: 800}}>原子沿哪条线<Hl>相切</Hl>，就在那条线上列方程</Appear>
		<Rule tag="简单立方" color={C.brown} at={ra2.from} size={36}>沿<Hl c={C.brown}>棱</Hl>相切：<Hl>a = 2r</Hl></Rule>
		<Rule tag="体心立方" color={C.orange} at={ra3.from} size={36}>沿<Hl c={C.orange}>体对角线</Hl>相切：<Hl><Rt>3</Rt>a = 4r</Hl></Rule>
		<Rule tag="面心立方" color={C.green} at={ra4.from} size={36}>沿<Hl c={C.green}>面对角线</Hl>相切：<Hl><Rt>2</Rt>a = 4r</Hl></Rule>
		<Rule tag="六方（课外）" color={C.red} at={ra5.from} size={36}>晶胞体积 V = (<Rt>3</Rt> / 2) · a<sup>2</sup> · c</Rule>
	</Board>
);

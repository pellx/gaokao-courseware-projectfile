import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.unit;
const {un1, un2, un3, un4} = t.cue;

export const Unit: React.FC = () => (
	<Board
		t={t}
		tag="考点四"
		title="单位换算"
		gap={24}
		callout={{label: '易错', at: un4.from, text: <>立方后 10<sup>−10</sup> 变 <Hl>10<sup>−30</sup></Hl>——指数也要乘 3</>}}
	>
		<Big at={un1.from} size={38}>ρ 的单位是 g/cm<sup>3</sup> → a 要换成 <Hl>cm</Hl></Big>
		<Big at={un2.from} size={46} color={C.red} soft={C.redSoft}>1 pm = <Hl>10<sup>−10</sup></Hl> cm　　1 nm = <Hl c={C.orange}>10<sup>−7</sup></Hl> cm</Big>
		<Big at={un3.from} size={42}>(a pm)<sup>3</sup> = <Hl>a<sup>3</sup> × 10<sup>−30</sup></Hl> cm<sup>3</sup></Big>
	</Board>
);

import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.apoptosis;
const {ap1, ap2, ap3, ap4} = t.cue;

export const Apoptosis: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">细胞凋亡</Header>
		<Def at={ap1.from} style={{left: 90, right: 90, top: 160}} fontSize={33} color={C.red} soft={C.redSoft}>
			由<Hl>基因所决定</Hl>的细胞自动结束生命的过程（细胞编程性死亡）
		</Def>
		<Rows
			style={{left: 90, right: 90, top: 290}}
			fontSize={31}
			gap={14}
			items={[
				{at: ap2.from, color: C.orange, title: '实例', children: <>蝌蚪尾的消失、胚胎手指间细胞的凋亡、<Hl c={C.orange}>被病原体感染的细胞的清除</Hl></>},
				{at: ap3.from, color: C.green, title: '意义', children: <>保证<Hl c={C.green}>正常发育</Hl>，维持<Hl c={C.green}>内部环境稳定</Hl>，抵御外界干扰</>},
			]}
		/>
		<Tip at={ap4.from} top={540} label="易错">
			细胞凋亡对生物体<Hl>有利</Hl>；被病原体感染的细胞的清除属于<Hl>凋亡</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

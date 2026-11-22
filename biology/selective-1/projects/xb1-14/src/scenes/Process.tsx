import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Humoral} from '../components/Humoral';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.process;
const {pr1, pr2, pr3, pr4, pr5, pr6} = t.cue;
const NEVER = 1e9;

export const Process: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">B细胞的激活</Header>
		<div style={{position: 'absolute', left: 90, top: 175}}>
			<Humoral at={[pr1.from, pr2.from, pr3.from, pr4.from, pr5.from, NEVER, NEVER, NEVER, NEVER]} />
		</div>
		<Appear at={pr6.from} style={{position: 'absolute', left: 90, right: 90, top: 720}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30, padding: '12px 24px'}}>
				B细胞需要<Hl>两个信号</Hl>才开始分裂、分化；<Hl c={C.green}>细胞因子</Hl>是“促进”，不是两个信号之一
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

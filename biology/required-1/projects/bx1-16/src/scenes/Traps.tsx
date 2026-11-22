import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.traps;
const {tp1, tp2, tp3, tp4} = t.cue;

export const Traps: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">易错辨析</Header>
		<Rows
			style={{left: 90, right: 90, top: 175}}
			fontSize={33}
			gap={20}
			items={[
				{at: tp1.from, color: C.red, children: <>ATP 含量<Hl>很少</Hl>，但与 ADP 的<Hl>转化非常迅速</Hl></>},
				{at: tp2.from, color: C.orange, children: <>ATP 脱去两个磷酸基团 → <Hl c={C.orange}>腺嘌呤核糖核苷酸</Hl>（RNA 的单体之一）</>},
				{at: tp3.from, color: C.green, children: <>安静和运动时 ATP 含量都<Hl c={C.green}>相对稳定</Hl>，变的是转化速率</>},
			]}
		/>
		<Tip at={tp4.from} top={560} label="解题方法">
			“ATP 含量大量增加”“ATP 大量储存”——一般都是<Hl>错</Hl>的
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.steps;
const {st1, st2, st3, st4, st5} = t.cue;

export const Steps: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">观察根尖分生区细胞的有丝分裂：实验步骤</Header>
		<Rows
			style={{left: 90, right: 90, top: 165}}
			fontSize={31}
			gap={14}
			items={[
				{at: st1.from, color: C.red, title: '解离', children: <>盐酸 ＋ 酒精（1∶1）→ 使细胞<Hl>相互分离</Hl></>},
				{at: st2.from, color: C.orange, title: '漂洗', children: <>清水 → <Hl c={C.orange}>洗去解离液</Hl>，防止解离过度，便于染色</>},
				{at: st3.from, color: C.brown, title: '染色', children: <>甲紫溶液或醋酸洋红液（碱性染料）→ 染色体着色</>},
				{at: st4.from, color: C.green, title: '制片', children: <>压片使细胞<Hl c={C.green}>分散开</Hl>；先低倍镜找分生区，再换高倍镜</>},
			]}
		/>
		<Tip at={st5.from} top={630} label="易错">
			顺序：<Hl>解离 → 漂洗 → 染色 → 制片</Hl>；分生区细胞<Hl c={C.orange}>呈正方形、排列紧密</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {Formula} from '../components/gene';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.calc2;
const {c21, c22, c23, c24} = t.cue;

export const Calc2: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">碱基计算（二）：A＋T 的比例处处相等</Header>
		<Formula at={c21.from} style={{left: 90, top: 180}} fontSize={40}>
			(A＋T)/(G＋C)：1 链 ＝ 2 链 ＝ 整个 DNA
		</Formula>
		<Rows
			style={{left: 90, right: 90, top: 320}}
			fontSize={32}
			gap={20}
			items={[
				{at: c22.from, color: C.orange, title: '同理', children: <>A＋T 占整个 DNA 的比例 ＝ 占每条单链的比例（40% → 每条链 40%）</>},
				{at: c23.from, color: C.green, title: '例', children: <>1 链中 A 占 20%，2 链中 A 占 30% → 整个 DNA 中 A ＝ (20%＋30%) ÷ 2 ＝ <Hl c={C.green}>25%</Hl></>},
			]}
		/>
		<Tip at={c24.from} top={620} label="易错" fontSize={34}>
			分清<Hl>占单链</Hl>还是<Hl>占双链</Hl>；单链中的比例换算成双链，要<Hl>除以 2</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

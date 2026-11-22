import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.pitfall;
const {pf1, pf2, pf3, pf4} = t.cue;

export const Pitfall: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">先天性疾病、家族性疾病与遗传病</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Table
				at={pf1.from}
				cols="260px 1fr 1fr"
				fontSize={31}
				rowHeight={96}
				head={['概念', '含义', '反例']}
				rows={[
					{at: pf1.from, cells: ['先天性疾病', '出生时就有', <><Hl>不一定是遗传病</Hl>：孕期感染风疹致先天性心脏病</>]},
					{at: pf2.from, cells: ['家族性疾病', '家族中多人患病', <><Hl>不一定是遗传病</Hl>：缺碘引起地方性甲状腺肿</>]},
					{at: pf3.from, cells: ['遗传病', '遗传物质改变', <>不一定出生就发病，不一定有家族史</>]},
				]}
			/>
		</div>
		<Tip at={pf4.from} top={620} label="解题方法" fontSize={35}>
			判断是否为遗传病，只看<Hl>遗传物质有没有改变</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

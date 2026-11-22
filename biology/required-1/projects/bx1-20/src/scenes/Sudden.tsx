import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.sudden;
const {sd1, sd2, sd3} = t.cue;

const up = <Hl>增加</Hl>;
const down = <Hl c={C.green}>减少</Hl>;

export const Sudden: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">条件骤变时物质含量的变化（短时间内）</Header>
		<Appear at={sd1.from} style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				at={sd1.from}
				cols="340px 1fr 1fr 1fr"
				fontSize={33}
				rowHeight={90}
				head={['条件变化', 'C3', 'C5', 'ATP 和 NADPH']}
				rows={[
					{at: sd1.from, cells: ['光照减弱', up, down, down]},
					{at: sd2.from, cells: ['CO2 供应减少', down, up, up]},
				]}
			/>
		</Appear>
		<Tip at={sd3.from} top={480} label="解题方法">
			抓 C<sub>3</sub>、C<sub>5</sub> 的<Hl>来路和去路</Hl>：条件只改变其中一条路，另一条暂时不变 → 推出增减
		</Tip>
		<Narration t={t} />
	</Scene>
);

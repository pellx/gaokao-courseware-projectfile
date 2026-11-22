import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.compare;
const {cp1, cp2, cp3, cp4} = t.cue;

const b = (s: string) => <span style={{fontWeight: 800}}>{s}</span>;

export const Compare: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">生态系统三大功能的比较</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190}}>
			<Table
				head={['比较项目', '能量流动', '物质循环', '信息传递']}
				cols="0.9fr 1.4fr 1.4fr 1.6fr"
				at={cp1.from}
				fontSize={29}
				rowHeight={92}
				rows={[
					{cells: [b('范围'), '食物链、食物网', '生物圈', '生物与生物、生物与环境'], at: cp2.from},
					{cells: [b('特点'), <Hl>单向流动、逐级递减</Hl>, <Hl c={C.green}>循环往复、全球性</Hl>, <Hl c={C.orange}>往往是双向的</Hl>], at: cp3.from},
				]}
			/>
		</div>
		<Appear at={cp4.from} style={{position: 'absolute', left: 90, right: 90, top: 520}}>
			<Callout label="考法" style={{fontSize: 30}}>
				三者把各组分联系成统一整体；<Hl>信息传递决定能量流动和物质循环的方向和状态</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

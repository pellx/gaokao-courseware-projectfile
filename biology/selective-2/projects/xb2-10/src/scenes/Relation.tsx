import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.relation;
const {rl1, rl2, rl3, rl4} = t.cue;

const b = (s: string) => <span style={{fontWeight: 800}}>{s}</span>;

export const Relation: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">能量流动与物质循环的关系</Header>
		<Appear at={rl1.from} style={{position: 'absolute', left: 90, right: 90, top: 175, fontSize: 32, fontWeight: 800}}>
			二者<Hl>同时进行、相互依存、不可分割</Hl>
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 90, top: 250}}>
			<Table
				head={['比较项目', '能量流动', '物质循环']}
				cols="1fr 2fr 2fr"
				at={rl2.from}
				fontSize={30}
				rowHeight={84}
				rows={[
					{cells: [b('联系'), <span><Hl c={C.orange}>能量是动力</Hl></span>, <span><Hl c={C.orange}>物质是载体</Hl></span>], at: rl2.from},
					{cells: [b('特点'), <span><Hl>单向流动、逐级递减</Hl></span>, <span><Hl c={C.green}>循环往复</Hl></span>], at: rl3.from},
					{cells: [b('范围'), '生态系统各营养级', <span><Hl c={C.green}>生物圈（全球性）</Hl></span>], at: rl3.from + 30},
				]}
			/>
		</div>
		<Appear at={rl4.from} style={{position: 'absolute', left: 90, right: 90, top: 620}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31}}>
				能量不能循环 → 生态系统需要<Hl>不断输入能量</Hl>；物质在生物圈范围内可以循环利用
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

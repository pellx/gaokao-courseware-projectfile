import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.detect;
const {de1, de2, de3, de4} = t.cue;

export const Detect: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">分子水平的检测</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190}}>
			<Table
				head={['检测内容', '检测对象', '方法']}
				cols="2fr 1fr 1.3fr"
				at={de1.from}
				fontSize={32}
				rowHeight={92}
				rows={[
					{cells: ['染色体 DNA 上是否插入了目的基因', 'DNA', <Hl>PCR</Hl>], at: de1.from},
					{cells: ['目的基因是否转录出了 mRNA', 'mRNA', <Hl>PCR 等</Hl>], at: de2.from},
					{cells: ['目的基因是否翻译成蛋白质', '蛋白质', <Hl c={C.orange}>抗原—抗体杂交</Hl>], at: de3.from},
				]}
			/>
		</div>
		<Tip at={de4.from} top={600} label="解题方法">
			按中心法则对号入座：<Hl>DNA、mRNA 用 PCR</Hl>，<Hl c={C.orange}>蛋白质用抗原—抗体杂交</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

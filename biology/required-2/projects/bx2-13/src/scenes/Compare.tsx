import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.compare;
const {cp1, cp2, cp3, cp4} = t.cue;

export const Compare: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">转录与 DNA 复制的比较</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				at={cp1.from}
				cols="220px 1fr 1fr"
				fontSize={31}
				rowHeight={70}
				head={['比较项目', 'DNA 复制', '转录']}
				rows={[
					{at: cp1.from, cells: ['模板', 'DNA 的两条链', <Hl>DNA 的一条链</Hl>]},
					{at: cp2.from, cells: ['原料', '4 种脱氧核苷酸', <Hl>4 种核糖核苷酸</Hl>]},
					{at: cp2.from + 60, cells: ['酶', '解旋酶、DNA 聚合酶', <Hl>RNA 聚合酶</Hl>]},
					{at: cp3.from, cells: ['特有配对', 'A—T', <Hl>A—U</Hl>]},
					{at: cp3.from + 50, cells: ['产物', '两个 DNA', '一条单链 RNA']},
				]}
			/>
		</div>
		<Tip at={cp4.from} top={640} label="易错" fontSize={34}>
			高度分化的细胞<Hl>不再进行 DNA 复制</Hl>，但仍能<Hl>转录和翻译</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.egg;
const {eg1, eg2, eg3, eg4, eg5} = t.cue;

export const Egg: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">精子与卵细胞形成的比较</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Table
				at={eg1.from}
				cols="260px 1fr 1fr"
				fontSize={33}
				rowHeight={92}
				head={['比较项目', '精子的形成', '卵细胞的形成']}
				rows={[
					{at: eg1.from, cells: ['场所', '睾丸（精巢）', '卵巢']},
					{at: eg2.from, cells: ['细胞质分裂', '均等分裂', <Hl>初级、次级卵母细胞不均等分裂</Hl>]},
					{at: eg3.from, cells: ['结果', '1 个精原细胞 → 4 个精子', <>1 个卵原细胞 → <Hl>1 个卵细胞</Hl> ＋ 3 个极体</>]},
					{at: eg4.from, cells: ['是否变形', <Hl c={C.green}>需要变形</Hl>, '不需要变形']},
				]}
			/>
		</div>
		<Tip at={eg5.from} top={650} label="解题方法" fontSize={33}>
			<Hl>细胞质不均等分裂</Hl> → 一定是卵细胞形成过程；均等分裂的减数分裂Ⅱ细胞：次级精母细胞或<Hl>第一极体</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

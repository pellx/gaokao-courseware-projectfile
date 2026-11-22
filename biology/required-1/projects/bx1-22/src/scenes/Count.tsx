import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.count;
const {ct1, ct2, ct3, ct4} = t.cue;

export const Count: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">有丝分裂中数目的变化（体细胞染色体数为 2N）</Header>
		<Appear at={ct1.from} style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				at={ct1.from}
				cols="230px 1fr 1fr 1fr 1fr 1fr"
				fontSize={32}
				rowHeight={84}
				head={['项目', '间期', '前期', '中期', '后期', '末期']}
				rows={[
					{at: ct1.from, cells: ['核 DNA', <Hl>2N → 4N</Hl>, '4N', '4N', '4N', <Hl>4N → 2N</Hl>]},
					{at: ct2.from, cells: ['染色体', '2N', '2N', '2N', <Hl>4N</Hl>, <Hl>4N → 2N</Hl>]},
					{at: ct3.from, cells: ['染色单体', <Hl c={C.orange}>0 → 4N</Hl>, '4N', '4N', <Hl c={C.orange}>0</Hl>, '0']},
				]}
			/>
		</Appear>
		<Tip at={ct4.from} top={560} label="解题方法">
			有染色单体时：<Hl>染色单体数 ＝ 核 DNA 数 ＝ 2 × 染色体数</Hl>；无染色单体时：核 DNA 数 ＝ 染色体数
		</Tip>
		<Narration t={t} />
	</Scene>
);

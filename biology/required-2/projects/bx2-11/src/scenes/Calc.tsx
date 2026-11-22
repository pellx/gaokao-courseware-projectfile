import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.calc;
const {ca1, ca2, ca3, ca4} = t.cue;

export const Calc: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">DNA 复制的相关计算（1 个 DNA 复制 n 次）</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Table
				at={ca1.from}
				cols="1fr 1fr 1fr"
				fontSize={33}
				rowHeight={84}
				head={['所求', '公式', '例：复制 3 次']}
				rows={[
					{at: ca1.from, cells: ['子代 DNA 数', <Hl>2<sup>n</sup></Hl>, '8 个']},
					{at: ca2.from, cells: ['含母链的 DNA', <Hl>2 个</Hl>, '2 个（占 1/4）']},
					{at: ca3.from, cells: ['共需某碱基（原有 m 个）', <Hl c={C.orange}>m(2<sup>n</sup> − 1)</Hl>, 'm ＝ 100 → 700 个']},
					{at: ca3.from + 90, cells: ['第 n 次复制需要', <Hl c={C.orange}>m · 2<sup>n−1</sup></Hl>, 'm ＝ 100 → 400 个']},
				]}
			/>
		</div>
		<Tip at={ca4.from} top={600} label="易错" fontSize={34}>
			分清“<Hl>复制 n 次</Hl>”（累计）和“<Hl>第 n 次复制</Hl>”（只算最后一次）
		</Tip>
		<Narration t={t} />
	</Scene>
);

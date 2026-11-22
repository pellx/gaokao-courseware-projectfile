import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.molecular;
const {mo1, mo2, mo3, mo4} = t.cue;

export const Molecular: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">细胞和分子水平的证据</Header>
		<Rows
			style={{left: 90, width: 820, top: 180}}
			fontSize={30}
			gap={18}
			items={[
				{at: mo1.from, color: C.orange, title: '细胞', children: <>生物都由细胞构成，有共同的物质和结构基础</>},
				{at: mo2.from, color: C.red, title: '分子', children: <>都以 DNA 为遗传物质，共用一套<Hl>遗传密码</Hl></>},
			]}
		/>
		<div style={{position: 'absolute', left: 980, right: 90, top: 180}}>
			<Table
				at={mo3.from}
				cols="1fr 1fr"
				fontSize={30}
				rowHeight={66}
				head={['与人比较', '细胞色素 c 差异']}
				rows={[
					{at: mo3.from, cells: ['黑猩猩', <Hl c={C.green}>0</Hl>]},
					{at: mo3.from + 20, cells: ['猕猴', '1']},
					{at: mo3.from + 40, cells: ['狗', '11']},
					{at: mo3.from + 60, cells: ['鸡', '13']},
					{at: mo3.from + 80, cells: ['酵母菌', <Hl>44</Hl>]},
				]}
			/>
			<div style={{fontSize: 22, color: C.muted, fontWeight: 700, marginTop: 8}}>氨基酸差异数，数据据教材资料</div>
		</div>
		<Tip at={mo4.from} top={620} label="解题方法" fontSize={34}>
			分子差异<Hl>越小</Hl> → 亲缘关系<Hl>越近</Hl>，在进化史上分开得越晚
		</Tip>
		<Narration t={t} />
	</Scene>
);

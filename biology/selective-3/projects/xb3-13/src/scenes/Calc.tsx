import React from 'react';
import {Appear, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Chem} from '../components/chem';
import {Bullets, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.calc;
const {ca1, ca2, ca3, ca4, ca5} = t.cue;

export const Calc: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">PCR 的条件与计算</Header>
		<Bullets
			style={{left: 90, width: 860, top: 175}}
			fontSize={29}
			gap={18}
			items={[
				{at: ca1.from, color: C.red, children: <>条件：<Hl>模板 DNA、两种引物、4 种脱氧核苷酸、耐高温的 DNA 聚合酶</Hl>，缓冲液中加 <Chem>Mg^2+</Chem></>},
				{at: ca2.from, children: <><Hl c={C.orange}>引物</Hl>：能与母链互补配对的短单链核酸，DNA 聚合酶从其 3′ 端开始延伸</>},
			]}
		/>
		<div style={{position: 'absolute', left: 1010, right: 90, top: 180}}>
			<Table
				head={['循环轮数', 'DNA 分子数', '消耗引物数']}
				cols="1fr 1fr 1.1fr"
				at={ca3.from}
				fontSize={29}
				rowHeight={60}
				rows={[
					{cells: ['1', '2', '2'], at: ca3.from},
					{cells: ['2', '4', '6'], at: ca3.from + 10},
					{cells: ['3', '8', '14'], at: ca3.from + 20},
					{cells: [<Hl>n</Hl>, <Hl><Chem>2^n</Chem></Hl>, <Hl><Chem>2^[n+1] − 2</Chem></Hl>], at: ca3.from + 30, key: true},
				]}
			/>
		</div>
		<Appear at={ca4.from} style={{position: 'absolute', left: 90, width: 860, top: 470}}>
			<Card style={{fontSize: 29, fontWeight: 700, lineHeight: 1.6, background: C.orangeSoft}}>
				第 <Hl c={C.orange}>3</Hl> 轮开始出现两条链等长的目的基因片段；n 轮后共 <Hl><Chem>2^n − 2n</Chem></Hl> 个
			</Card>
		</Appear>
		<Tip at={ca5.from} top={720} label="解题方法">
			引物数 = <Hl>新合成的子链数</Hl> = 总链数 <Chem>2^[n+1]</Chem> − 2 条母链
		</Tip>
		<Narration t={t} />
	</Scene>
);

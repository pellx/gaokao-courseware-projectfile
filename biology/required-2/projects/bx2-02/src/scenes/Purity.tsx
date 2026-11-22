import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.purity;
const {pu1, pu2, pu3, pu4} = t.cue;

export const Purity: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">纯合子与杂合子的鉴定</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Table
				at={pu1.from}
				cols="250px 1fr 1fr"
				fontSize={32}
				rowHeight={110}
				head={['方法', '操作', '结果判断']}
				rows={[
					{at: pu1.from, cells: ['自交法', '待测个体自交', <>出现性状分离 → <Hl>杂合子</Hl></>]},
					{at: pu2.from, cells: ['测交法', '与隐性纯合子杂交', <>出现隐性个体 → <Hl>杂合子</Hl></>]},
					{at: pu3.from, cells: ['花粉鉴定法', '花粉加碘液染色观察', <>两种花粉各占一半 → <Hl>杂合子</Hl></>]},
				]}
			/>
		</div>
		<Tip at={pu4.from} top={640} label="考法" fontSize={34}>
			植物最简便：<Hl>自交</Hl>；动物常用：<Hl>测交</Hl>（与多只隐性个体交配，保证子代数量多）
		</Tip>
		<Narration t={t} />
	</Scene>
);

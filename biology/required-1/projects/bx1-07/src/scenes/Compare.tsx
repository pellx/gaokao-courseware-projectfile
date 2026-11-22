import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.compare;
const {cm1, cm2, cm3, cm4} = t.cue;

export const Compare: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">DNA 与 RNA 的比较</Header>
		<Appear at={cm1.from} style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				at={cm1.from}
				cols="280px 1fr 1fr"
				fontSize={33}
				rowHeight={84}
				head={['比较项目', 'DNA', 'RNA']}
				rows={[
					{at: cm1.from, cells: ['基本单位', '脱氧核苷酸（4 种）', '核糖核苷酸（4 种）']},
					{at: cm2.from, cells: ['五碳糖', <Hl>脱氧核糖</Hl>, <Hl>核糖</Hl>]},
					{at: cm3.from, cells: ['共有碱基', 'A、G、C', 'A、G、C']},
					{at: cm3.from + 50, cells: ['特有碱基', <><Hl>T</Hl>（胸腺嘧啶）</>, <><Hl>U</Hl>（尿嘧啶）</>]},
				]}
			/>
		</Appear>
		<Tip at={cm4.from} top={620} label="解题方法">
			区分 DNA 和 RNA：看<Hl>五碳糖</Hl>（脱氧核糖 / 核糖），或看碱基<Hl>含 T 还是含 U</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

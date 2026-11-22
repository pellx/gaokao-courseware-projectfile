import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {chem} from '../components/chem';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.abnormal;
const {ab1, ab2, ab3, ab4, ab5} = t.cue;

export const Abnormal: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">异常配子分析</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				at={ab1.from}
				cols="250px 1fr 250px 360px"
				fontSize={30}
				rowHeight={84}
				head={['个体', '异常配子', '另一配子', '原因']}
				rows={[
					{at: ab1.from, cells: ['XXY', <>XY 精子（含<Hl>一对同源染色体</Hl>）</>, 'X 卵细胞', <Hl>父方减Ⅰ异常</Hl>]},
					{at: ab2.from, cells: ['XXY', 'XX 卵细胞', 'Y 精子', <Hl c={C.orange}>母方减Ⅰ或减Ⅱ异常</Hl>]},
					{at: ab3.from, cells: [chem('色盲 X^[b]X^[b]Y'), <>{chem('X^[b]X^[b]')} 卵细胞（<Hl>两条相同</Hl>）</>, 'Y 精子', <Hl>母方减Ⅱ异常</Hl>]},
					{at: ab4.from, cells: ['XYY', <>YY 精子（<Hl>两条相同</Hl>）</>, 'X 卵细胞', <Hl>父方减Ⅱ异常</Hl>]},
				]}
			/>
			<div style={{fontSize: 26, color: C.muted, fontWeight: 700, marginTop: 10}}>{chem('第三行：色觉正常的夫妇 X^[B]Y × X^[B]X^[b]')}</div>
		</div>
		<Tip at={ab5.from} top={650} label="解题方法" fontSize={33}>
			异常配子含<Hl>一对同源染色体</Hl>（XY、Aa）→ 减Ⅰ异常；含<Hl>两条相同染色体</Hl>（YY、AA）→ 减Ⅱ异常
		</Tip>
		<Narration t={t} />
	</Scene>
);

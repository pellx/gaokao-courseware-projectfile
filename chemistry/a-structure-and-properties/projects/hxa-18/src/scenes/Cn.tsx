import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Board} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.cn;
const {cn1, cn2, cn3, cn4, cn4b, cn5} = t.cue;
const n = (x: string) => <span>{x}</span>;

export const Cn: React.FC = () => (
	<Board
		t={t}
		tag="考点一"
		title="配位数的数法"
		callout={{label: '解题方法', at: cn5.from, text: <>选顶点或体心粒子作“中心”，把<Hl>相邻晶胞</Hl>也想出来，再数<Hl>最近的一圈</Hl></>}}
		overlay={
			<AnimeBeat k="box" from={cn4b.from} to={cn4b.to}>
				配位数：只数{'\n'}<span style={{color: C.red}}>挨得最近、距离一样</span>{'\n'}的那几个
			</AnimeBeat>
		}
	>
		<Appear at={cn1.from} style={{fontSize: 34, fontWeight: 800}}>配位数 = 一个粒子周围<Hl>最近且等距</Hl>的粒子数</Appear>
		<Table
			head={['晶体', '配位数', '晶体', '配位数']}
			cols="1.6fr 1fr 1.6fr 1fr"
			at={cn1.from}
			fontSize={32}
			rowHeight={62}
			rows={[
				{cells: [chem('NaCl'), <Hl>6</Hl>, chem('CsCl'), <Hl>8</Hl>], at: cn2.from},
				{cells: [chem('CaF2'), <>{chem('Ca^2+')} 8，{chem('F^-')} 4</>, 'ZnS', n('4')], at: cn2.from + 40},
				{cells: ['干冰', <Hl c={C.orange}>12</Hl>, '冰', <Hl c={C.orange}>4</Hl>], at: cn3.from},
				{cells: ['简单立方', n('6'), '体心立方', n('8')], at: cn4.from},
				{cells: ['面心立方', <Hl>12</Hl>, '六方最密', <Hl>12</Hl>], at: cn4.from + 30},
			]}
		/>
	</Board>
);

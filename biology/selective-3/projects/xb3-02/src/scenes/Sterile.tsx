import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.sterile;
const {st1, st2, st3, st4} = t.cue;

export const Sterile: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">消毒和灭菌</Header>
		<Def at={st1.from} fontSize={32} style={{left: 90, right: 90, top: 165}}>
			获得纯培养物的关键：<Hl>防止杂菌污染</Hl>（无菌技术）
		</Def>
		<div style={{position: 'absolute', left: 90, right: 90, top: 290}}>
			<Table
				head={['比较项目', '消毒', '灭菌']}
				cols="1fr 1.6fr 1.6fr"
				at={st2.from}
				fontSize={30}
				rowHeight={66}
				rows={[
					{cells: ['方法', '较为温和的理化或生物方法', <Hl>强烈的理化方法</Hl>], at: st2.from},
					{cells: ['杀死范围', '物体表面或内部一部分微生物', <Hl>物体内外所有的微生物</Hl>], at: st3.from},
					{cells: ['芽孢和孢子', '一般不能杀死', <Hl>能杀死</Hl>], at: st3.from + 25},
					{cells: ['适用对象', <Hl c={C.orange}>双手、牛奶、接种室</Hl>, <Hl c={C.orange}>培养基、培养皿、接种工具</Hl>], at: st4.from},
				]}
			/>
		</div>
		<Tip at={st4.from} top={690} label="解题方法">
			看对象能否耐受：操作者的双手、牛奶等<Hl c={C.orange}>不耐高温的只能消毒</Hl>；培养基和器具要<Hl>灭菌</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

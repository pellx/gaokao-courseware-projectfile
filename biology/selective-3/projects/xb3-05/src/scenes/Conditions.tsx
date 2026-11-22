import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.conditions;
const {cd1, cd2, cd3, cd4, cd5, cd6} = t.cue;

export const Conditions: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">植物组织培养的条件</Header>
		<Cards
			top={170}
			height={205}
			titleSize={36}
			fontSize={28}
			items={[
				{title: '无菌', color: C.red, at: cd1.from, body: '外植体消毒；培养基、器械灭菌'},
				{title: '营养', color: C.orange, at: cd2.from, body: 'MS 培养基：无机营养 + 蔗糖等有机营养'},
				{title: '光照', color: C.green, at: cd5.from, body: '诱导愈伤组织一般不需要光照；再分化后给予光照'},
			]}
		/>
		<div style={{position: 'absolute', left: 90, right: 90, top: 410}}>
			<Table
				head={['生长素 / 细胞分裂素（用量比值）', '结果']}
				cols="1.3fr 1.6fr"
				at={cd3.from}
				fontSize={31}
				rowHeight={70}
				rows={[
					{cells: [<Hl>比值高</Hl>, <>有利于<Hl c={C.green}>根</Hl>的分化</>], at: cd4.from},
					{cells: [<Hl>比值低</Hl>, <>有利于<Hl c={C.green}>芽</Hl>的分化</>], at: cd4.from + 40},
					{cells: [<Hl c={C.orange}>比值适中</Hl>, '促进愈伤组织的形成'], at: cd4.from + 80},
				]}
			/>
		</div>
		<Tip at={cd6.from} top={745} label="解题方法">
			口诀：<Hl>生长素多生根，细胞分裂素多生芽</Hl>，两者相当长愈伤
		</Tip>
		<Narration t={t} />
	</Scene>
);

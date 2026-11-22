import React from 'react';
import {Hl} from '../components/ui';
import {Board, Rule} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.opt3;
const {o31, o32, o33, o34, o34b, o35} = t.cue;

export const Opt3: React.FC = () => (
	<Board
		t={t}
		tag="考点七"
		title="选项判断（三）：键、杂化、氢键与沸点"
		gap={20}
		callout={{label: '解题方法', at: o35.from, text: <>每个选项只问一件事：<Hl>逐条对照规律</Hl>，不要凭印象</>}}
		overlay={
			<AnimeBeat k="zero" from={o34b.from} to={o34b.to}>
				推出“<span style={{color: C.red}}>0 = 2</span>”？{'\n'}多半某一步{'\n'}偷换了概念
			</AnimeBeat>
		}
	>
		<Rule tag="考查范围" color={C.brown} at={o31.from} size={32}>化学键类型、杂化与空间结构、氢键、简单氢化物沸点</Rule>
		<Rule tag="化学键" color={C.red} at={o32.from} size={32}>活泼金属 + 活泼非金属 → <Hl>离子键</Hl>；含铵根是离子化合物；过氧根含非极性键</Rule>
		<Rule tag="杂化" color={C.orange} at={o33.from} size={32}>按价层电子对数：{chem('NH3')} sp<sup>3</sup> 三角锥形；{chem('BF3')} sp<sup>2</sup> 平面三角形</Rule>
		<Rule tag="沸点" color={C.green} at={o34.from} size={32}>有<Hl c={C.green}>氢键</Hl>的 {chem('H2O')}、HF、{chem('NH3')} 反常高，{chem('H2O')} 最高</Rule>
	</Board>
);

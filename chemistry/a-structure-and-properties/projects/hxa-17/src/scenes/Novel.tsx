import React from 'react';
import {Hl} from '../components/ui';
import {Board, Rule} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.novel;
const {nv1, nv1b, nv2, nv3, nv4, nv5} = t.cue;

export const Novel: React.FC = () => (
	<Board
		t={t}
		tag="考点八"
		title="新情境题：陌生配合物 / 超分子结构图"
		gap={18}
		callout={{label: '解题方法', at: nv5.from, text: <>中心 → 配位键 → 配位原子 → 其他作用力；多齿配体：配位数<Hl>数配位原子</Hl>，不数配体</>}}
		overlay={
			<AnimeBeat k="find" from={nv1b.from} to={nv1b.to}>
				在陌生结构图里{'\n'}把<span style={{color: C.red}}>配位原子</span>{'\n'}一个个“找出来”
			</AnimeBeat>
		}
	>
		<Rule tag="常问" color={C.brown} at={nv1.from} size={32}>配位数、配位原子、作用力类型、杂化方式</Rule>
		<Rule tag="① 中心" color={C.red} at={nv2.from} size={32}>找<Hl>中心原子</Hl>，数它连的配位键 → 配位数</Rule>
		<Rule tag="② 配位原子" color={C.orange} at={nv3.from} size={32}>配位键另一端：常见 <Hl c={C.orange}>N、O、S、C</Hl></Rule>
		<Rule tag="③ 其他" color={C.green} at={nv4.from} size={32}>虚线常是<Hl c={C.green}>氢键</Hl>，箭头常是配位键，实线是普通共价键</Rule>
	</Board>
);

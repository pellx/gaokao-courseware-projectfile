import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.terms;
const {te1, te2, te3, te4} = t.cue;

export const Terms: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">遗传学基本概念</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Table
				at={te1.from}
				cols="240px 1fr 470px"
				fontSize={32}
				rowHeight={92}
				head={['概念', '含义', '实例']}
				rows={[
					{at: te1.from, cells: ['相对性状', <>一种生物的<Hl>同一种性状</Hl>的不同表现类型</>, '豌豆的高茎与矮茎']},
					{at: te2.from, cells: ['显性性状', <>杂种 F<sub>1</sub> <Hl>显现</Hl>出来的性状</>, '高茎']},
					{at: te2.from + 40, cells: ['隐性性状', <>杂种 F<sub>1</sub> <Hl c={C.green}>未显现</Hl>出来的性状</>, '矮茎']},
					{at: te3.from, cells: ['性状分离', <>杂种后代中<Hl c={C.orange}>同时出现</Hl>显性性状和隐性性状</>, <>F<sub>2</sub> 中既有高茎又有矮茎</>]},
				]}
			/>
		</div>
		<Tip at={te4.from} top={660} label="解题方法" fontSize={33}>
			相对性状抓三个关键词：<Hl>同种生物</Hl>、<Hl>同一性状</Hl>、<Hl>不同表现</Hl>。例：狗的长毛与兔的短毛不是相对性状
		</Tip>
		<Narration t={t} />
	</Scene>
);

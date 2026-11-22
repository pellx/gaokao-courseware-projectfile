import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.human;
const {hm1, hm2, hm3, hm4} = t.cue;

const Col: React.FC<{title: string; color: string; soft: string; items: string[]; result: string}> = ({title, color, soft, items, result}) => (
	<div style={{border: `5px solid ${color}`, background: soft, borderRadius: 24, padding: '22px 30px', height: 300, boxSizing: 'border-box'}}>
		<div style={{fontSize: 40, fontWeight: 900, color}}>{title}</div>
		<div style={{fontSize: 31, fontWeight: 700, marginTop: 18, lineHeight: 1.6}}>{items.join('、')}</div>
		<div style={{fontSize: 31, fontWeight: 900, marginTop: 14, color}}>→ {result}</div>
	</div>
);

export const Human: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">人类活动对群落演替的影响</Header>
		<Appear at={hm1.from} style={{position: 'absolute', left: 90, right: 90, top: 175, fontSize: 32, fontWeight: 800}}>
			人类活动使演替按照<Hl>不同于自然演替的速度和方向</Hl>进行
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 90, top: 260, display: 'flex', gap: 30}}>
			<Appear at={hm2.from} style={{flex: 1}}>
				<Col title="不合理" color={C.red} soft={C.redSoft} items={['乱砍滥伐', '过度放牧', '围湖造田']} result="群落退化，甚至荒漠化" />
			</Appear>
			<Appear at={hm3.from} style={{flex: 1}}>
				<Col title="合理" color={C.green} soft={C.greenSoft} items={['封山育林', '治理沙漠', '建立人工林']} result="加快演替，朝有利方向发展" />
			</Appear>
		</div>
		<Appear at={hm4.from} style={{position: 'absolute', left: 90, right: 90, top: 610}}>
			<Callout label="考法" style={{fontSize: 31}}>
				答清楚改变了演替的<Hl c={C.orange}>速度</Hl>还是<Hl c={C.orange}>方向</Hl>，以及是<Hl c={C.green}>有利</Hl>还是<Hl>不利</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Tip} from '../components/lib';
import {F} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.total;
const {tt1, tt2, tt3} = t.cue;

export const Total: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">光合作用的总反应式</Header>
		<Appear at={tt1.from} style={{position: 'absolute', left: 90, right: 90, top: 200, textAlign: 'center', fontSize: 60, fontWeight: 900}}>
			<F>CO2 + H2O</F>
			<span style={{display: 'inline-block', margin: '0 24px', verticalAlign: 'middle', textAlign: 'center'}}>
				<span style={{display: 'block', fontSize: 30, color: C.orange, lineHeight: 1.1}}>光能</span>
				<span style={{display: 'block', lineHeight: 1}}>⟶</span>
				<span style={{display: 'block', fontSize: 30, color: C.green, lineHeight: 1.1}}>叶绿体</span>
			</span>
			<F>(CH2O) + O2</F>
		</Appear>
		<Def at={tt2.from} style={{left: 90, right: 90, top: 420}} fontSize={33}>
			利用<Hl c={C.orange}>光能</Hl>，在<Hl c={C.green}>叶绿体</Hl>中把 <F>CO2</F> 和水转化成储存着能量的有机物，并释放 <F>O2</F>
		</Def>
		<Tip at={tt3.from} top={570} label="解题方法">
			箭头上注明<Hl>光能、叶绿体</Hl>；产物 <F>O2</F> 中的氧全部来自<Hl>水</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

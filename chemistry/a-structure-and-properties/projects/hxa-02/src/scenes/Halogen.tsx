import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Board} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.halogen;
const {hl1, hl2, hl2b, hl3, hl4, hl5} = t.cue;

const Sw: React.FC<{c: string; children: React.ReactNode}> = ({c, children}) => (
	<span style={{display: 'inline-flex', alignItems: 'center', gap: 10}}>
		<span style={{width: 30, height: 30, borderRadius: 8, background: c, border: '2px solid #00000022'}} />
		{children}
	</span>
);

export const Halogen: React.FC = () => (
	<Board
		t={t}
		tag="考点五"
		title="卤族元素的结构与性质"
		callout={{label: '易错', at: hl5.from, text: <>从上到下<Hl>非金属性减弱</Hl> → 氢化物越来越不稳定；熔沸点升高是因为<Hl c={C.orange}>分子变大</Hl>，与非金属性无关</>}}
		overlay={
			<AnimeBeat k="paint" from={hl2b.from} to={hl2b.to}>
				卤素单质的颜色{'\n'}<span style={{color: C.red}}>一路加深</span>！
			</AnimeBeat>
		}
	>
		<Table
			head={['单质', '颜色、状态', '与氢气化合', '氢化物稳定性']}
			cols="0.7fr 1.6fr 1.9fr 1.2fr"
			at={hl1.from}
			fontSize={32}
			rowHeight={84}
			rows={[
				{cells: ['F2', <Sw c="#e9efb0">淡黄绿色气体</Sw>, '暗处剧烈化合并爆炸', 'HF 最稳定'], at: hl2.from},
				{cells: ['Cl2', <Sw c="#c9d84a">黄绿色气体</Sw>, '光照或点燃', 'HCl'], at: hl2.from + 10},
				{cells: ['Br2', <Sw c="#9a3412">深红棕色液体</Sw>, '加热到一定温度', 'HBr'], at: hl2.from + 20},
				{cells: ['I2', <Sw c="#2a2326">紫黑色固体</Sw>, '持续加热，可逆', <Hl>HI 最不稳定</Hl>], at: hl2.from + 30},
			]}
		/>
		<div style={{display: 'flex', gap: 20, fontSize: 30, fontWeight: 800}}>
			<Appear at={hl2.from + 40} style={{flex: 1}}>
				<div style={{background: C.orangeSoft, borderRadius: 16, padding: '10px 18px'}}>颜色加深、熔沸点<Hl c={C.orange}>升高</Hl> ↓</div>
			</Appear>
			<Appear at={hl3.from} style={{flex: 1}}>
				<div style={{background: C.redSoft, borderRadius: 16, padding: '10px 18px'}}>与 H<sub>2</sub> 化合<Hl>越来越难</Hl> ↓</div>
			</Appear>
			<Appear at={hl4.from} style={{flex: 1}}>
				<div style={{background: C.redSoft, borderRadius: 16, padding: '10px 18px'}}>氢化物稳定性<Hl>减弱</Hl> ↓</div>
			</Appear>
		</div>
	</Board>
);

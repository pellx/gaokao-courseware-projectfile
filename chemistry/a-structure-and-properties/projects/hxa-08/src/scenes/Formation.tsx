import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Board, Rule} from '../components/board';
import {Lewis} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.formation;
const {fm1, fm2, fm3, fm4} = t.cue;
const R = C.red;
const K = C.text;
const Op: React.FC<{s: string}> = ({s}) => <span style={{fontSize: 46, fontWeight: 800, color: C.muted, margin: '0 18px'}}>{s}</span>;

export const Formation: React.FC = () => (
	<Board
		t={t}
		tag="考点四"
		title="用电子式表示形成过程"
		callout={{label: '易错', at: fm4.from, text: <>中间用 <Hl>“→”</Hl> 不用等号；离子化合物别漏<Hl>弯箭头</Hl>，共价化合物<Hl c={C.orange}>不画</Hl></>}}
	>
		<Rule tag="格式" color={C.brown} at={fm1.from} size={32}>左边：<Hl>原子</Hl>的电子式 → 右边：化合物的电子式</Rule>
		<Appear at={fm2.from}>
			<div style={{display: 'flex', alignItems: 'center', background: C.redSoft, borderRadius: 20, padding: '30px 30px 20px', fontSize: 52, fontWeight: 800}}>
				<span style={{fontSize: 30, color: C.red, width: 170}}>离子化合物</span>
				<div style={{position: 'relative', display: 'flex', alignItems: 'center'}}>
					<Lewis at={fm2.from} size={56} parts={[{sym: 'Na', d: [0, 1, 0, 0], dc: [K, R, K, K]}]} />
					<Op s="+" />
					<Lewis at={fm2.from} size={56} parts={[{sym: 'Cl', d: [2, 2, 2, 1]}]} />
					<svg width={190} height={70} viewBox="0 0 190 70" style={{position: 'absolute', left: 70, top: -50}}>
						<path d="M 10 60 Q 95 -10 175 58" fill="none" stroke={C.red} strokeWidth={5} />
						<polyline points="160,48 176,60 172,40" fill="none" stroke={C.red} strokeWidth={5} />
					</svg>
				</div>
				<Op s="→" />
				<span>
					Na<sup style={{fontSize: '0.5em'}}>+</sup>
				</span>
				<Lewis at={fm2.from} size={56} parts={[{bracket: [{sym: 'Cl', d: [2, 2, 2, 2], dc: [K, K, K, R]}], charge: '−'}]} />
			</div>
		</Appear>
		<Appear at={fm3.from}>
			<div style={{display: 'flex', alignItems: 'center', background: C.orangeSoft, borderRadius: 20, padding: '24px 30px', fontSize: 52, fontWeight: 800}}>
				<span style={{fontSize: 30, color: C.orange, width: 170}}>共价化合物</span>
				<Lewis at={fm3.from} size={56} parts={[{sym: 'H', d: [0, 1, 0, 0], dc: [K, R, K, K]}]} />
				<Op s="+" />
				<Lewis at={fm3.from} size={56} parts={[{sym: 'Cl', d: [2, 2, 2, 1]}]} />
				<Op s="→" />
				<Lewis at={fm3.from} size={56} parts={[{sym: 'H', d: [0, 1, 0, 0], dc: [K, R, K, K]}, {sym: 'Cl', d: [2, 2, 2, 1]}]} />
				<span style={{fontSize: 28, color: C.orange, marginLeft: 30}}>不画弯箭头</span>
			</div>
		</Appear>
	</Board>
);

import React from 'react';
import {Appear, Hl} from '../components/ui';
import {G} from '../components/kit';
import {Board, Col, Row, Rule} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.period;
const {pd1, pd2, pd3, pd4, pd5, pd6} = t.cue;
// 第三周期原子半径（pm），按比例画圆。
const R: [string, number][] = [['Na', 186], ['Mg', 160], ['Al', 143], ['Si', 117], ['P', 110], ['S', 104], ['Cl', 99]];

export const Period: React.FC = () => (
	<Board
		t={t}
		tag="考点一"
		title="周期性变化与微粒半径比较"
		callout={{label: '易错', at: pd6.from, text: <>电子层结构相同的离子：核电荷数越大，半径越小——<Hl>“序大径小”</Hl></>}}
	>
		<Row gap={30} align="center">
			<Col width={860}>
				<Appear at={pd1.from} style={{fontSize: 30, fontWeight: 800}}>
					1～18 号元素：最外层电子数 1 → 8 <Hl>周期性重复</Hl>
				</Appear>
				<svg width={860} height={250} viewBox="0 0 860 250">
					<G at={pd2.from}>
						{R.map(([s, r], i) => {
							const x = 60 + i * 122;
							const rr = r * 0.3;
							return (
								<g key={s}>
									<circle cx={x} cy={110} r={rr} fill={C.orangeSoft} stroke={C.orange} strokeWidth={4} />
									<text x={x} y={121} fontSize={32} fontWeight={900} fill={C.text} textAnchor="middle">{s}</text>
									<text x={x} y={200} fontSize={24} fontWeight={700} fill={C.muted} textAnchor="middle">{r}</text>
								</g>
							);
						})}
						<text x={430} y={242} fontSize={26} fontWeight={800} fill={C.red} textAnchor="middle">第三周期原子半径（pm）：从左到右逐渐减小</text>
					</G>
				</svg>
			</Col>
			<Col gap={14}>
				<Rule tag="一看" color={C.red} at={pd3.from} size={28}>电子层数：<Hl>层多半径大</Hl></Rule>
				<Rule tag="二看" color={C.orange} at={pd4.from} size={28}>核电荷数：<Hl c={C.orange}>核大半径小</Hl></Rule>
				<Rule tag="三看" color={C.green} at={pd5.from} size={28}>电子数：<Hl c={C.green}>电子多半径大</Hl></Rule>
			</Col>
		</Row>
		<Row gap={24}>
			<Appear at={pd4.from + 20} style={{flex: 1}}>
				<div style={{background: C.orangeSoft, borderRadius: 16, padding: '12px 20px', fontSize: 32, fontWeight: 800, textAlign: 'center'}}>{chem('Na^+ > Mg^2+ > Al^3+')}　{chem('O^2- > F^- > Na^+')}</div>
			</Appear>
			<Appear at={pd5.from + 20} style={{flex: 1}}>
				<div style={{background: C.greenSoft, borderRadius: 16, padding: '12px 20px', fontSize: 32, fontWeight: 800, textAlign: 'center'}}>{chem('Cl^- > Cl')}　{chem('Fe^2+ > Fe^3+')}</div>
			</Appear>
		</Row>
	</Board>
);

import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Board, Col, Row} from '../components/board';
import {Lewis as L, LAtom} from '../components/sci';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.lewis;
const {lw1, lw2, lw3, lw4, lw5} = t.cue;
const R = C.red;
const K = C.text;
const a = (sym: string, d: [number, number, number, number], dc?: string[]): LAtom => ({sym, d, dc});

const Cell: React.FC<{at: number; name: React.ReactNode; children: React.ReactNode}> = ({at, name, children}) => (
	<Appear at={at}>
		<div style={{background: '#fff', border: `3px solid ${C.line}`, borderRadius: 18, padding: '10px 18px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, minHeight: 150, justifyContent: 'center'}}>
			<div style={{display: 'flex', alignItems: 'center', gap: 8, fontSize: 44, fontWeight: 800}}>{children}</div>
			<div style={{fontSize: 26, fontWeight: 800, color: C.muted}}>{name}</div>
		</div>
	</Appear>
);
const Cat: React.FC<{s: string}> = ({s}) => (
	<span>
		{s}
		<sup style={{fontSize: '0.5em'}}>+</sup>
	</span>
);

export const Lewis: React.FC = () => (
	<Board
		t={t}
		tag="考点三"
		title="电子式"
		callout={{label: '易错', at: lw5.from, text: <>CO<sub>2</sub> 写成一对共用电子、HClO 写成 H—Cl—O、Cl<sup>−</sup> 漏方括号、N<sub>2</sub> 漏孤电子对</>}}
	>
		<Appear at={lw1.from} style={{fontSize: 32, fontWeight: 800}}>
			元素符号周围用“·”或“×”表示<Hl>最外层电子</Hl>
		</Appear>
		<Row gap={20}>
			<Col>
				<div style={{fontSize: 28, fontWeight: 900, color: C.red}}>离子化合物：阴离子加 [ ] 标电荷</div>
				<Cell at={lw2.from} name="NaCl">
					<Cat s="Na" />
					<L at={lw2.from} size={46} parts={[{bracket: [a('Cl', [2, 2, 2, 2])], charge: '−'}]} />
				</Cell>
				<Cell at={lw2.from + 30} name={<>{chem('Na2O2')} 过氧化钠</>}>
					<Cat s="Na" />
					<L at={lw2.from + 30} size={46} parts={[{bracket: [a('O', [2, 1, 2, 2], [K, R, K, K]), a('O', [2, 2, 2, 1], [K, K, K, R])], charge: '2−'}]} />
					<Cat s="Na" />
				</Cell>
			</Col>
			<Col>
				<div style={{fontSize: 28, fontWeight: 900, color: C.orange}}>共价化合物：不加 [ ]，孤电子对画全</div>
				<Cell at={lw3.from} name={chem('H2O')}>
					<L at={lw3.from} size={46} parts={[a('H', [0, 1, 0, 0], [K, R, K, K]), a('O', [2, 1, 2, 1], [K, R, K, R]), a('H', [0, 0, 0, 1], [K, K, K, R])]} />
				</Cell>
				<Cell at={lw3.from + 30} name={chem('CO2')}>
					<L at={lw3.from + 30} size={46} parts={[a('O', [2, 2, 2, 0], [K, R, K, K]), a('C', [0, 2, 0, 2], [K, R, K, R]), a('O', [2, 0, 2, 2], [K, K, K, R])]} />
				</Cell>
			</Col>
			<Col>
				<div style={{fontSize: 28, fontWeight: 900, color: C.green}}>高频易错</div>
				<Cell at={lw4.from} name={<>{chem('N2')} 三对共用电子</>}>
					<L at={lw4.from} size={46} parts={[a('N', [0, 3, 0, 2], [K, R, K, K]), a('N', [0, 2, 0, 3], [K, K, K, R])]} />
				</Cell>
				<Cell at={lw4.from + 30} name="HClO：O 在中间">
					<L at={lw4.from + 30} size={46} parts={[a('H', [0, 1, 0, 0], [K, R, K, K]), a('O', [2, 1, 2, 1], [K, R, K, R]), a('Cl', [2, 2, 2, 1], [K, K, K, R])]} />
				</Cell>
			</Col>
		</Row>
	</Board>
);

import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Board, Col, Row} from '../components/board';
import {Frac} from './Frac';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.reverse;
const {rv_1, rv_2, rv_3, rv_4} = t.cue;
const NA = (
	<span>
		N<sub style={{fontSize: '0.6em'}}>A</sub>
	</span>
);
const Box: React.FC<{at: number; title: string; c: string; children: React.ReactNode}> = ({at, title, c, children}) => (
	<Appear at={at}>
		<div style={{border: `4px solid ${c}`, borderRadius: 20, padding: '14px 20px', background: '#fff'}}>
			<div style={{fontSize: 30, fontWeight: 900, color: c}}>{title}</div>
			<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 54, fontWeight: 900}}>{children}</div>
		</div>
	</Appear>
);

export const Reverse: React.FC = () => (
	<Board
		t={t}
		tag="考点五"
		title="由密度反求边长或阿伏加德罗常数"
		callout={{label: '解题方法', at: rv_4.from, text: <>大题一般<Hl>只列表达式</Hl>；单位换算写进式子里，如 a<sup>3</sup> × 10<sup>−30</sup></>}}
	>
		<Appear at={rv_1.from} style={{fontSize: 34, fontWeight: 800}}>把 ρ = N·M / ({NA}·a<sup>3</sup>) <Hl>变形</Hl>：</Appear>
		<Row gap={24}>
			<Col>
				<Box at={rv_2.from} title="求边长 a（cm，再换 pm 或 nm）" c={C.red}>
					a<sup style={{fontSize: '0.6em'}}>3</sup> =
					<Frac n={<>N · M</>} d={<>ρ · {NA}</>} c={C.red} />
				</Box>
			</Col>
			<Col>
				<Box at={rv_3.from} title="求阿伏加德罗常数" c={C.orange}>
					{NA} =
					<Frac n={<>N · M</>} d={<>ρ · a<sup style={{fontSize: '0.6em'}}>3</sup></>} c={C.orange} />
				</Box>
			</Col>
		</Row>
	</Board>
);

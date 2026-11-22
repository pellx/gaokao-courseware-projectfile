import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Board, Col, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {Geo} from './Geo';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.model;
const {md1, md1b, md2, md3, md4, md5} = t.cue;

const Card: React.FC<{at: number; title: string; children: React.ReactNode}> = ({at, title, children}) => (
	<Appear at={at}>
		<div style={{background: '#fff', border: `3px solid ${C.line}`, borderRadius: 18, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '8px 10px'}}>
			{children}
			<div style={{fontSize: 30, fontWeight: 900}}>{title}</div>
		</div>
	</Appear>
);

export const Model: React.FC = () => (
	<Board
		t={t}
		tag="考点三"
		title="VSEPR 模型与分子的空间结构"
		callout={{label: '易错', at: md5.from, text: <>无孤电子对：两者<Hl c={C.green}>一致</Hl>；有孤电子对：<Hl>不一致</Hl>——问哪个答哪个</>}}
		overlay={
			<AnimeBeat k="sulk" from={md1b.from} to={md1b.to}>
				电子对<span style={{color: C.red}}>互相排斥</span>：{'\n'}离得越远越好
			</AnimeBeat>
		}
	>
		<Appear at={md1.from} style={{fontSize: 32, fontWeight: 800}}>
			价层电子对相互排斥、<Hl>尽量远离</Hl> → VSEPR 模型
		</Appear>
		<Row gap={16}>
			<Card at={md2.from} title="2 对：直线形"><Geo kind="linear" at={md2.from} center="A" lig="·" lp={false} size={230} /></Card>
			<Card at={md2.from + 15} title="3 对：平面三角形"><Geo kind="trigonal" at={md2.from + 15} center="A" lig="·" size={230} /></Card>
			<Card at={md2.from + 30} title="4 对：四面体形"><Geo kind="tetra" at={md2.from + 30} center="A" lig="·" size={230} /></Card>
			<Col gap={12}>
				<Appear at={md3.from} style={{fontSize: 32, fontWeight: 800, background: C.redSoft, borderRadius: 16, padding: '12px 18px'}}>
					略去<Hl>孤电子对</Hl> → 分子空间结构
				</Appear>
				<Appear at={md4.from} style={{display: 'flex', alignItems: 'center', gap: 6, fontSize: 28, fontWeight: 800}}>
					<Geo kind="bent4" at={md4.from} center="O" lig="H" size={200} />
					<div>
						H<sub>2</sub>O：模型<Hl c={C.orange}>四面体形</Hl>
						<br />
						分子 <Hl>V 形</Hl>
					</div>
				</Appear>
			</Col>
		</Row>
	</Board>
);

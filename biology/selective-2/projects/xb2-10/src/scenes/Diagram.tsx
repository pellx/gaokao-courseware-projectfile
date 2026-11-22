import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, Box, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';
import {co2} from './Carbon';

const t = T.diagram;
const {dg1, dg2, dg3, dg4, dg5} = t.cue;

const A = {x: 150, y: 260};
const B = {x: 560, y: 70};
const Cn = {x: 560, y: 440};
const D = {x: 970, y: 260};

const Node: React.FC<{p: {x: number; y: number}; letter: string; name: React.ReactNode; color: string; at: number}> = ({p, letter, name, color, at}) => (
	<>
		<Box x={p.x} y={p.y} w={150} h={90} label={letter} color={C.text} fontSize={44} />
		<G at={at}>
			<rect x={p.x - 75} y={p.y - 45} width={150} height={90} rx={16} fill="#fff" stroke={color} strokeWidth={6} />
			<text x={p.x} y={p.y - 2} fontSize={36} fontWeight={900} fill={color} textAnchor="middle">{letter}</text>
			<text x={p.x} y={p.y + 32} fontSize={23} fontWeight={800} fill={color} textAnchor="middle">{name}</text>
		</G>
	</>
);

export const Diagram: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">碳循环图解的判断</Header>
		<svg width={1120} height={500} viewBox="0 0 1120 500" style={{position: 'absolute', left: 90, top: 165}}>
			<Defs />
			<G at={dg1.from}>
				<Arrow x1={A.x + 50} y1={A.y - 50} x2={B.x - 80} y2={B.y + 20} color={C.muted} offset={-10} />
				<Arrow x1={B.x - 80} y1={B.y + 20} x2={A.x + 50} y2={A.y - 50} color={C.muted} offset={-10} />
				<Arrow x1={Cn.x} y1={Cn.y - 50} x2={B.x} y2={B.y + 50} color={C.muted} />
				<Arrow x1={D.x - 50} y1={D.y - 50} x2={B.x + 80} y2={B.y + 20} color={C.muted} />
				<Arrow x1={A.x + 50} y1={A.y + 50} x2={Cn.x - 80} y2={Cn.y - 10} color={C.muted} />
				<Arrow x1={A.x + 80} y1={A.y} x2={D.x - 80} y2={D.y} color={C.muted} />
				<Arrow x1={Cn.x + 80} y1={Cn.y - 10} x2={D.x - 50} y2={D.y + 50} color={C.muted} />
			</G>
			<G at={dg2.from}>
				<text x={300} y={120} fontSize={26} fontWeight={900} fill={C.red} textAnchor="middle">双向箭头</text>
			</G>
			<Node p={A} letter="A" name="生产者" color={C.green} at={dg3.from + 20} />
			<Node p={B} letter="B" name={co2('大气', '库')} color={C.orange} at={dg3.from} />
			<Node p={D} letter="D" name="分解者" color={C.brown} at={dg4.from} />
			<Node p={Cn} letter="C" name="消费者" color={C.red} at={dg4.from + 30} />
		</svg>
		<div style={{position: 'absolute', left: 1250, right: 80, top: 190, display: 'flex', flexDirection: 'column', gap: 22, fontSize: 28, fontWeight: 700, lineHeight: 1.5}}>
			<Appear at={dg2.from}>① 找<Hl>双向箭头</Hl>：生产者与大气CO<sub style={{fontSize: '0.6em'}}>2</sub>库</Appear>
			<Appear at={dg3.from}>② 其他成分都指向它：<Hl c={C.orange}>大气CO<sub style={{fontSize: '0.6em'}}>2</sub>库</Hl></Appear>
			<Appear at={dg4.from}>③ 生产者、消费者都指向它：<Hl c={C.brown}>分解者</Hl>；剩下的是消费者</Appear>
		</div>
		<Appear at={dg5.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				双向箭头定两者，箭头最多是大气，指向分解看遗体
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

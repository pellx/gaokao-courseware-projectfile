import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.transplant;
const {tp1, tp2, tp3, tp4, tp5} = t.cue;

// A cell drawn with HLA markers of a given shape.
const HlaCell: React.FC<{color: string; shape: 'sq' | 'tri'; label: string}> = ({color, shape, label}) => (
	<svg width={240} height={250} viewBox="0 0 240 250">
		<circle cx={120} cy={110} r={80} fill="#fbeedd" stroke={color} strokeWidth={5} />
		{[0, 60, 120, 180, 240, 300].map((a) => {
			const rad = (a * Math.PI) / 180;
			const x = 120 + Math.cos(rad) * 84;
			const y = 110 + Math.sin(rad) * 84;
			return shape === 'sq' ? (
				<rect key={a} x={x - 10} y={y - 10} width={20} height={20} fill={color} transform={`rotate(${a} ${x} ${y})`} />
			) : (
				<circle key={a} cx={x} cy={y} r={11} fill={color} />
			);
		})}
		<text x={120} y={240} fontSize={28} fontWeight={900} fill={color} textAnchor="middle">{label}</text>
	</svg>
);

export const Transplant: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">器官移植与免疫排斥</Header>
		<Appear at={tp1.from} style={{position: 'absolute', left: 90, top: 180, fontSize: 34, fontWeight: 900}}>
			最大问题：<Hl>免疫排斥</Hl>
		</Appear>
		<Appear at={tp2.from} style={{position: 'absolute', left: 90, width: 760, top: 250, fontSize: 30, fontWeight: 700, lineHeight: 1.6}}>
			细胞表面的“身份证”：<Hl>组织相容性抗原</Hl>
			<br />= 人类白细胞抗原（<Hl>HLA</Hl>），每个人各不相同
		</Appear>
		<div style={{position: 'absolute', left: 900, top: 190, display: 'flex', gap: 30, alignItems: 'center'}}>
			<Appear at={tp2.from}>
				<HlaCell color={C.brown} shape="sq" label="受者的细胞" />
			</Appear>
			<Appear at={tp3.from}>
				<HlaCell color={C.red} shape="tri" label="HLA差别大" />
			</Appear>
			<Appear at={tp4.from}>
				<HlaCell color={C.green} shape="sq" label="HLA一致或相近" />
			</Appear>
		</div>
		<Appear at={tp3.from} style={{position: 'absolute', left: 90, width: 760, top: 400, fontSize: 30, fontWeight: 700}}>
			HLA差别大 → 受者的<Hl>细胞毒性T细胞</Hl>攻击移植器官
		</Appear>
		<Appear at={tp4.from} style={{position: 'absolute', left: 90, width: 760, top: 470, fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
			成败取决于HLA<Hl c={C.green}>是否一致或相近</Hl>；术后长期用<Hl c={C.green}>免疫抑制剂</Hl>
		</Appear>
		<Appear at={tp5.from} style={{position: 'absolute', left: 90, right: 90, top: 620}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				免疫抑制剂使病人<Hl>免疫力降低</Hl>、易感染；用患者自身干细胞培养的器官可避免排斥
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

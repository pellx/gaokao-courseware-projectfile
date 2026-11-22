import React from 'react';
import {Appear, Callout, Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.allergy;
const {al2, al3, al4, al5, al6} = t.cue;

const Allergen: React.FC<{x: number; y: number}> = ({x, y}) => (
	<g>
		{[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
			<line key={a} x1={x} y1={y} x2={x + Math.cos((a * Math.PI) / 180) * 28} y2={y + Math.sin((a * Math.PI) / 180) * 28} stroke={C.orange} strokeWidth={6} strokeLinecap="round" />
		))}
		<circle cx={x} cy={y} r={14} fill={C.orange} />
	</g>
);

const Ab: React.FC<{x: number; y: number; rot?: number}> = ({x, y, rot = 0}) => (
	<path d={`M${x},${y} l0,-20 l-12,-14 M${x},${y - 20} l12,-14`} stroke={C.green} strokeWidth={6} strokeLinecap="round" fill="none" transform={`rotate(${rot} ${x} ${y})`} />
);

// Antibody-coated cell around (1200, 300): antibodies stick out of its surface.
const CELL = {x: 1180, y: 300, r: 110};
const surface = [-150, -110, -70, -30, 10, 50].map((a) => {
	const rad = (a * Math.PI) / 180;
	return {x: CELL.x + Math.cos(rad) * CELL.r, y: CELL.y + Math.sin(rad) * CELL.r, rot: a + 90};
});

export const Allergy: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">过敏反应的机理</Header>
		<svg width={1740} height={520} viewBox="0 0 1740 520" style={{position: 'absolute', left: 90, top: 165}}>
			<Defs />
			<G at={al2.from}>
				<Allergen x={90} y={110} />
				<text x={90} y={180} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">过敏原</text>
				<text x={90} y={215} fontSize={24} fontWeight={700} fill={C.muted} textAnchor="middle">（第一次）</text>
			</G>
			<G at={al3.from}>
				<Arrow x1={140} y1={110} x2={330} y2={110} color={C.muted} />
				<rect x={340} y={70} width={300} height={80} rx={40} fill="#fff" stroke={C.red} strokeWidth={5} />
				<text x={490} y={122} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">B细胞 → 浆细胞</text>
				<Arrow x1={650} y1={110} x2={770} y2={110} color={C.green} marker="arrow-green" />
				<Ab x={810} y={130} />
				<Ab x={850} y={125} />
				<text x={830} y={175} fontSize={28} fontWeight={900} fill={C.green} textAnchor="middle">抗体</text>
				<Arrow x1={880} y1={140} x2={1060} y2={220} color={C.green} marker="arrow-green" />
				<text x={940} y={230} fontSize={24} fontWeight={800} fill={C.green} textAnchor="middle">吸附</text>
				<circle cx={CELL.x} cy={CELL.y} r={CELL.r} fill="#fbeedd" stroke={C.brown} strokeWidth={5} />
				<text x={CELL.x} y={CELL.y + 8} fontSize={28} fontWeight={900} fill={C.brown} textAnchor="middle">某些细胞</text>
				<text x={CELL.x} y={CELL.y + 44} fontSize={22} fontWeight={700} fill={C.muted} textAnchor="middle">（皮肤、黏膜等处）</text>
				{surface.map((p, i) => (
					<Ab key={i} x={p.x} y={p.y} rot={p.rot} />
				))}
			</G>
			<G at={al4.from}>
				<Allergen x={1440} y={110} />
				<text x={1440} y={60} fontSize={26} fontWeight={900} fill={C.orange} textAnchor="middle">相同过敏原再次进入</text>
				<Arrow x1={1405} y1={140} x2={1290} y2={215} color={C.orange} marker="arrow-orange" />
				{[[1080, 430], [1120, 460], [1170, 440], [1210, 470], [1250, 435]].map(([x, y]) => (
					<circle key={`${x}${y}`} cx={x} cy={y} r={10} fill={C.red} />
				))}
				<text x={1330} y={470} fontSize={30} fontWeight={900} fill={C.red}>释放组胺等</text>
			</G>
		</svg>
		<Appear at={al5.from} style={{position: 'absolute', left: 90, width: 900, top: 450}}>
			<div style={{border: `4px solid ${C.red}`, borderRadius: 20, padding: '16px 24px', background: C.redSoft, fontSize: 29, fontWeight: 700, lineHeight: 1.55}}>
				组胺 → <Hl>毛细血管扩张、通透性增强</Hl>、平滑肌收缩、腺体分泌增多
				<br />→ 皮肤红肿、发疹、哮喘等
			</div>
		</Appear>
		<Appear at={al6.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 29, padding: '12px 24px'}}>
				过敏反应的抗体<Hl>吸附在细胞表面</Hl>（一般抗体主要在血清中）；<Hl>第一次</Hl>接触过敏原不发生过敏反应
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

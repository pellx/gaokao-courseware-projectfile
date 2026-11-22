import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.organs;
const {og1, og2, og3, og4, og5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const SKIN = '#f6e3cc';
const EDGE = C.brown;

// Body outline with the five immune organs, each labelled to the side.
// [name, x, y of organ, label x, label y, colour, shape]
const ORGANS: [string, number, number, number, number, string, number][] = [
	['扁桃体', 214, 128, 470, 120, C.orange, 0],
	['胸腺', 210, 250, 470, 250, C.red, 1],
	['淋巴结', 150, 160, 0, 200, C.orange, 0],
	['脾', 262, 365, 470, 380, C.orange, 2],
	['骨髓', 145, 600, 0, 600, C.red, 3],
];

const Body: React.FC<{show: number[]}> = ({show}) => (
	<svg width={620} height={720} viewBox="0 0 620 720">
		<g transform="translate(110,0)">
		<circle cx={200} cy={80} r={56} fill={SKIN} stroke={EDGE} strokeWidth={4} />
		<path d="M110,170 Q200,140 290,170 L310,420 Q200,450 90,420 Z" fill={SKIN} stroke={EDGE} strokeWidth={4} />
		<path d="M110,175 L60,400 M290,175 L340,400" stroke={SKIN} strokeWidth={40} strokeLinecap="round" />
		<path d="M110,175 L60,400 M290,175 L340,400" stroke={EDGE} strokeWidth={4} fill="none" opacity={0.25} />
		<path d="M150,430 L140,700 M250,430 L260,700" stroke={SKIN} strokeWidth={56} strokeLinecap="round" />
		{/* organs */}
		<G at={show[0]}>
			<ellipse cx={186} cy={128} rx={9} ry={7} fill={C.orange} />
			<ellipse cx={214} cy={128} rx={9} ry={7} fill={C.orange} />
		</G>
		<G at={show[1]}>
			<path d="M182,225 Q200,215 218,225 L214,275 Q200,285 186,275 Z" fill={C.red} />
		</G>
		<G at={show[2]}>
			{[[135, 268], [150, 160], [250, 160], [120, 420], [280, 420], [95, 330]].map(([x, y]) => (
				<circle key={`${x}-${y}`} cx={x} cy={y} r={9} fill={C.orange} stroke="#fff" strokeWidth={2} />
			))}
		</G>
		<G at={show[3]}>
			<ellipse cx={250} cy={360} rx={22} ry={34} fill={C.orange} transform="rotate(25 250 360)" />
		</G>
		<G at={show[4]}>
			<line x1={145} y1={480} x2={142} y2={660} stroke={C.red} strokeWidth={12} strokeLinecap="round" />
			<line x1={255} y1={480} x2={258} y2={660} stroke={C.red} strokeWidth={12} strokeLinecap="round" />
		</G>
		</g>
		{ORGANS.map(([name, x, y, lx, ly, color], i) => (
			<G key={name} at={show[i]}>
				<line x1={x + 110} y1={y} x2={lx < 200 ? lx + 100 : lx - 10} y2={ly - 10} stroke={color} strokeWidth={3} />
			</G>
		))}
	</svg>
);

export const Organs: React.FC = () => {
	const show = [at(og2.from, og2.to, 0.3), at(og2.from, og2.to, 0.42), at(og2.from, og2.to, 0.62), at(og2.from, og2.to, 0.52), at(og2.from, og2.to, 0.75)];
	const ROLES: [string, string, string, number][] = [
		['骨髓', '免疫细胞发生、分化、发育；B细胞成熟', C.red, og3.from],
		['胸腺', 'T细胞分化、发育、成熟（青春期后退化）', C.red, at(og3.from, og3.to, 0.5)],
		['脾', '内含大量淋巴细胞', C.orange, og4.from],
		['淋巴结', '沿淋巴管遍布全身，阻止和消灭微生物', C.orange, at(og4.from, og4.to, 0.3)],
		['扁桃体', '位于咽腭部，具有防御功能', C.orange, at(og4.from, og4.to, 0.15)],
	];
	return (
		<Scene duration={t.duration}>
			<Header tag="考点一">免疫器官</Header>
			<Appear at={og1.from} style={{position: 'absolute', left: 90, top: 175, fontSize: 32, fontWeight: 800}}>
				免疫系统 = <Hl>免疫器官</Hl> + <Hl c={C.orange}>免疫细胞</Hl> + <Hl c={C.green}>免疫活性物质</Hl>
			</Appear>
			<div style={{position: 'absolute', left: 40, top: 245, transform: 'scale(0.86)', transformOrigin: 'top left'}}>
				<Body show={show} />
				{ORGANS.map(([name, , , lx, ly, color], i) => (
					<Appear key={name} at={show[i]} dy={0} style={{position: 'absolute', left: lx, top: ly - 26, fontSize: 34, fontWeight: 900, color}}>
						{name}
					</Appear>
				))}
			</div>
			<div style={{position: 'absolute', left: 640, right: 90, top: 250, display: 'flex', flexDirection: 'column', gap: 14}}>
				{ROLES.map(([name, note, color, from]) => (
					<Appear key={name} at={from} dx={30} dy={0}>
						<div style={{display: 'flex', alignItems: 'center', gap: 18, border: `4px solid ${color}`, borderRadius: 16, padding: '10px 20px', background: '#fff'}}>
							<span style={{fontSize: 32, fontWeight: 900, color, width: 110}}>{name}</span>
							<span style={{fontSize: 28, fontWeight: 700}}>{note}</span>
						</div>
					</Appear>
				))}
			</div>
			<Appear at={og5.from} style={{position: 'absolute', left: 640, right: 90, top: 690}}>
				<Callout label="考法" style={{fontSize: 29, padding: '12px 22px'}}>
					骨髓、胸腺：<Hl>产生、成熟</Hl>；脾、淋巴结、扁桃体：<Hl c={C.orange}>集中分布</Hl>
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};

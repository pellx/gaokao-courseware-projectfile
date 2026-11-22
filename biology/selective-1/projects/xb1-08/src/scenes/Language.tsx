import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.language;
const {lg1, lg2, lg3, lg4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

// [letter, area x, y, name, damage, colour, cue start]
type Area = [string, number, number, string, string, string, number];

export const Language: React.FC = () => {
	const frame = useCurrentFrame();
	const AREAS: Area[] = [
		['W', 300, 150, '书写', '不能写字', C.orange, lg2.from],
		['V', 650, 210, '阅读', '看不懂文字', C.green, at(lg2.from, lg2.to, 0.5)],
		['S', 250, 280, '说话', '不能讲话', C.red, lg3.from],
		['H', 560, 340, '听', '听不懂话', C.brown, at(lg3.from, lg3.to, 0.55)],
	];
	return (
		<Scene duration={t.duration}>
			<Header tag="考点一">语言功能与言语区</Header>
			<Appear at={lg1.from} style={{position: 'absolute', left: 60, top: 170}}>
				<svg width={880} height={560} viewBox="0 0 880 560">
					{/* left hemisphere, front to the left */}
					<path d="M110,300 C70,170 190,50 380,40 C560,30 760,90 790,240 C810,330 760,400 690,420 C640,470 560,480 470,450 C400,470 330,430 300,380 C220,400 130,380 110,300 Z" fill="#f6dccb" stroke={C.brown} strokeWidth={5} />
					<ellipse cx={650} cy={460} rx={110} ry={55} fill="#ecc9b0" stroke={C.brown} strokeWidth={4} />
					<path d="M520,450 L540,550 L590,550 L590,450" fill="#efd6c0" stroke={C.brown} strokeWidth={4} />
					<path d="M300,330 C400,300 520,300 620,290" fill="none" stroke={C.brown} strokeWidth={5} />
					<path d="M470,48 C460,140 430,220 400,310" fill="none" stroke={C.brown} strokeWidth={4} strokeDasharray="10 8" />
					<text x={130} y={520} fontSize={24} fontWeight={800} fill={C.muted}>← 前（额叶）</text>
					<text x={420} y={30} fontSize={22} fontWeight={700} fill={C.muted}>中央沟</text>
					{AREAS.map(([k, x, y, , , color, from]) => (
						<g key={k} opacity={frame >= from ? 1 : 0.15}>
							<circle cx={x} cy={y} r={52} fill={color} opacity={0.85} />
							<text x={x} y={y + 18} fontSize={52} fontWeight={900} fill="#fff" textAnchor="middle">{k}</text>
						</g>
					))}
					<text x={250} y={360} fontSize={22} fontWeight={800} fill={C.red} textAnchor="middle">（布罗卡区）</text>
					<text x={560} y={420} fontSize={22} fontWeight={800} fill={C.brown} textAnchor="middle">（韦尼克区）</text>
				</svg>
			</Appear>
			<div style={{position: 'absolute', left: 990, right: 90, top: 175, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18}}>
				{AREAS.map(([k, , , job, damage, color, from]) => (
					<Appear key={k} at={from} dx={-20} dy={0}>
						<div style={{border: `4px solid ${color}`, borderRadius: 18, padding: '12px 20px', background: '#fff'}}>
							<div style={{fontSize: 36, fontWeight: 900, color}}>{k}区 · {job}</div>
							<div style={{fontSize: 28, fontWeight: 700}}>受损：{damage}</div>
						</div>
					</Appear>
				))}
			</div>
			<Appear at={lg3.from + 20} style={{position: 'absolute', left: 990, top: 470, width: 200, height: 260}}>
				<Photo src="images/broca.png" caption="布罗卡" style={{width: '100%', height: '100%'}} pos="center 20%" />
			</Appear>
			<Appear at={at(lg3.from, lg3.to, 0.6)} style={{position: 'absolute', left: 1220, top: 470, width: 200, height: 260}}>
				<Photo src="images/wernicke.jpg" caption="韦尼克" style={{width: '100%', height: '100%'}} pos="center 20%" />
			</Appear>
			<Appear at={lg4.from} style={{position: 'absolute', left: 1450, right: 90, top: 470}}>
				<Callout label="记忆" style={{fontSize: 30, lineHeight: 1.6, padding: '16px 22px'}}>
					<Hl c={C.orange}>W</Hl> write 写
					<br />
					<Hl c={C.green}>V</Hl> vision 看
					<br />
					<Hl>S</Hl> speak 说
					<br />
					<Hl c={C.brown}>H</Hl> hear 听
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};

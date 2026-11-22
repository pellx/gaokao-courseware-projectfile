import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Photo, Scene, useRamp} from '../components/ui';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.insulin;
const {is2, is3, is4, is5, is6, is7, is8, is9} = t.cue;
export const INSULIN_DUR = t.duration;

const ISLETS = [
	[250, 300],
	[340, 270],
	[430, 310],
	[520, 280],
	[610, 300],
	[700, 270],
	[300, 340],
	[560, 335],
];

// Pancreas with its duct; `shrink` 0..1 shows the exocrine part wasting away after ligation.
const Pancreas: React.FC<{labels: number; tie: number; shrink: number}> = ({labels, tie, shrink}) => (
	<svg width={900} height={430} viewBox="0 0 900 430" style={{position: 'absolute', left: 60, top: 160}}>
		{/* small intestine (duodenum) */}
		<path d="M110,90 C40,140 40,330 120,380" fill="none" stroke="#e8b48a" strokeWidth={46} strokeLinecap="round" />
		<text x={20} y={420} fontSize={28} fill={C.muted}>小肠</text>
		{/* exocrine tissue */}
		<g opacity={1 - 0.75 * shrink} transform={`translate(470,300) scale(${1 - 0.12 * shrink}) translate(-470,-300)`}>
			<path d="M150,300 C150,220 300,215 420,235 C560,255 700,200 800,240 C860,265 840,350 760,350 C640,350 560,380 420,370 C300,362 150,380 150,300 Z" fill="#f6d7b0" stroke={C.brown} strokeWidth={4} />
		</g>
		{/* pancreatic duct */}
		<path d="M800,295 C600,300 400,300 165,300 L95,300" fill="none" stroke={C.brown} strokeWidth={6} />
		{ISLETS.map(([x, y]) => (
			<circle key={`${x}-${y}`} cx={x} cy={y} r={15} fill={C.red} stroke="#fff" strokeWidth={3} />
		))}
		{/* ligature */}
		<g opacity={tie}>
			<line x1={190} y1={270} x2={190} y2={330} stroke={C.text} strokeWidth={10} strokeLinecap="round" />
			<text x={190} y={250} fontSize={30} fontWeight={800} textAnchor="middle" fill={C.text}>结扎</text>
		</g>
		<g opacity={labels}>
			<line x1={760} y1={250} x2={720} y2={150} stroke={C.muted} strokeWidth={2} />
			<text x={720} y={140} fontSize={30} fontWeight={700} textAnchor="middle" fill={C.brown}>外分泌部（分泌胰液）</text>
			<line x1={430} y1={310} x2={470} y2={110} stroke={C.muted} strokeWidth={2} />
			<text x={470} y={100} fontSize={30} fontWeight={700} textAnchor="middle" fill={C.red}>胰岛（内分泌部）</text>
			<text x={480} y={300 + 120} fontSize={26} fill={C.muted} textAnchor="middle">胰管：胰液 → 小肠</text>
		</g>
	</svg>
);

const Step: React.FC<{at: number; title: string; res: string; ok: boolean | null; tag?: string}> = ({at, title, res, ok, tag}) => (
	<Appear at={at} dx={30} dy={0}>
		<div style={{background: C.panel, border: `3px solid ${C.line}`, borderRadius: 18, padding: '14px 22px'}}>
			<div style={{fontSize: 32, fontWeight: 700}}>
				{title}
				{tag && <span style={{marginLeft: 12, background: C.orange, color: '#fff', fontSize: 24, padding: '2px 10px', borderRadius: 8}}>{tag}</span>}
			</div>
			<Appear at={at + 25} dy={8}>
				<div style={{fontSize: 30, fontWeight: 800, color: ok === null ? C.text : ok ? C.green : C.red}}>→ {res}</div>
			</Appear>
		</div>
	</Appear>
);

export const Insulin: React.FC = () => {
	const frame = useCurrentFrame();
	const labels = useRamp(is2.from + 10, 15);
	const tie = useRamp(is5.from + 20, 12);
	const shrink = interpolate(frame, [is5.from + 50, is5.from + 110], [0, 1], clamp);
	const steps = interpolate(frame, [is7.from - 15, is7.from], [1, 0], clamp);

	return (
		<Scene duration={INSULIN_DUR}>
			<Header tag="考点二">胰岛素的发现</Header>
			<Appear at={is2.from - 10}>
				<Pancreas labels={labels} tie={tie} shrink={shrink} />
			</Appear>
			<Appear at={is5.from + 60} style={{position: 'absolute', left: 90, top: 600, display: 'flex', alignItems: 'center', gap: 24}}>
				<Photo src="images/banting-best.jpg" style={{width: 200, height: 260}} zoom={{scale: 1.0, origin: '50% 50%'}} />
				<div style={{fontSize: 30, lineHeight: 1.6, width: 560}}>
					1921 年，<Hl>班廷</Hl>（右）与助手<Hl>贝斯特</Hl>（左）
					<br />
					用结扎胰管的方法提取到胰岛素
				</div>
			</Appear>

			<div style={{position: 'absolute', left: 1000, right: 80, top: 175, display: 'flex', flexDirection: 'column', gap: 16, opacity: steps}}>
				<Step at={is3.from} title="切除狗的胰腺" res="患糖尿病（胰腺中有降血糖物质）" ok={null} tag="减法" />
				<Step at={is4.from} title="直接研磨胰腺，制成提取液注射" res="收效甚微" ok={false} />
				<Step at={is5.from} title="结扎胰管 → 外分泌部萎缩，只剩胰岛 → 制备提取液注射" res="糖尿病狗血糖迅速下降" ok tag="加法" />
				<Appear at={is6.from + 30}>
					<div style={{fontSize: 40, fontWeight: 900, color: C.red, textAlign: 'center', marginTop: 6}}>降血糖的物质：胰岛素</div>
				</Appear>
			</div>

			<div style={{position: 'absolute', left: 1000, right: 80, top: 175, display: 'flex', flexDirection: 'column', gap: 22}}>
				<Appear at={is7.from}>
					<Callout label="考法" style={{fontSize: 32}}>
						问：直接研磨胰腺为何提取不到胰岛素？
						<br />
						答：胰岛素是<Hl>蛋白质</Hl>，被胰液中的<Hl>胰蛋白酶分解</Hl>。
					</Callout>
				</Appear>
				<Appear at={is8.from}>
					<Callout label="结扎目的" color={C.orange} soft={C.orangeSoft} style={{fontSize: 32}}>
						使外分泌部萎缩，不再产生胰蛋白酶，避免胰岛素被分解
					</Callout>
				</Appear>
				<Appear at={is9.from}>
					<Callout label="原理" color={C.brown} soft={C.panel} style={{fontSize: 32}}>
						切除胰腺 → <Hl>减法原理</Hl>；注射胰岛提取液 → <Hl c={C.green}>加法原理</Hl>
					</Callout>
				</Appear>
			</div>
			<Narration t={t} />
		</Scene>
	);
};

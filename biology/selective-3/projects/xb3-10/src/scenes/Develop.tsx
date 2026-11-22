import React from 'react';
import {Defs, Header, Hl, Narration, Scene} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.develop;
const {de1, de2, de3, de4, de5} = t.cue;

const Y = 170;
const R = 90;
const X = [130, 470, 810, 1150, 1530];
const ZONA = (x: number) => <circle cx={x} cy={Y} r={R} fill="#fdf3e4" stroke={C.orange} strokeWidth={8} />;
const Name: React.FC<{x: number; color?: string; children: React.ReactNode}> = ({x, color = C.text, children}) => (
	<text x={x} y={Y + R + 50} fontSize={30} fontWeight={900} fill={color} textAnchor="middle">{children}</text>
);
const Note: React.FC<{x: number; children: React.ReactNode}> = ({x, children}) => (
	<text x={x} y={Y + R + 88} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">{children}</text>
);

export const Develop: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">早期胚胎发育</Header>
		<svg width={1740} height={420} viewBox="0 0 1740 420" style={{position: 'absolute', left: 90, top: 230}}>
			<Defs />
			<G at={de1.from}>
				{ZONA(X[0])}
				<circle cx={X[0]} cy={Y} r={70} fill="#fde8d2" stroke={C.red} strokeWidth={3} />
				<Name x={X[0]}>受精卵</Name>
				<Arrow x1={X[0] + R + 10} y1={Y} x2={X[1] - R - 10} y2={Y} />
				{ZONA(X[1])}
				{[[-30, -30], [30, -30], [-30, 30], [30, 30]].map(([dx, dy], i) => (
					<circle key={i} cx={X[1] + dx} cy={Y + dy} r={34} fill="#fde8d2" stroke={C.red} strokeWidth={3} />
				))}
				<Name x={X[1]} color={C.orange}>卵裂期</Name>
				<Note x={X[1]}>数目↑ 总体积不增</Note>
			</G>
			<G at={de2.from}>
				<Arrow x1={X[1] + R + 10} y1={Y} x2={X[2] - R - 10} y2={Y} />
				{ZONA(X[2])}
				{Array.from({length: 19}, (_, i) => {
					const a = i * 2.39996;
					const r = 62 * Math.sqrt((i + 0.5) / 19);
					return <circle key={i} cx={X[2] + r * Math.cos(a)} cy={Y + r * Math.sin(a)} r={17} fill="#fde8d2" stroke={C.red} strokeWidth={2.5} />;
				})}
				<Name x={X[2]} color={C.orange}>桑葚胚</Name>
				<Note x={X[2]}>32 个细胞左右，实心</Note>
			</G>
			<G at={de3.from}>
				<Arrow x1={X[2] + R + 10} y1={Y} x2={X[3] - R - 10} y2={Y} />
				{ZONA(X[3])}
				<circle cx={X[3]} cy={Y} r={74} fill="#fff" stroke={C.orange} strokeWidth={10} />
				<path d={`M${X[3] - 52},${Y - 52} A74,74 0 0 1 ${X[3] + 52},${Y - 52} L${X[3] + 30},${Y - 20} Q${X[3]},${Y - 2} ${X[3] - 30},${Y - 20} z`} fill={C.red} opacity={0.75} />
				<Name x={X[3]} color={C.orange}>囊胚</Name>
				<Note x={X[3]}>出现囊胚腔，开始分化</Note>
			</G>
			<G at={de4.from}>
				<Arrow x1={X[3] + R + 10} y1={Y} x2={X[4] - R - 10} y2={Y} />
				<circle cx={X[4]} cy={Y} r={82} fill="#fff" stroke={C.orange} strokeWidth={10} />
				<path d={`M${X[4] - 60},${Y - 10} Q${X[4]},${Y - 70} ${X[4] + 60},${Y - 10} Q${X[4]},${Y + 20} ${X[4] - 60},${Y - 10} z`} fill={C.red} opacity={0.7} />
				<Name x={X[4]} color={C.orange}>原肠胚</Name>
				<Note x={X[4]}>胚层分化，出现原肠腔</Note>
			</G>
		</svg>
		<Tip at={de5.from} top={640} label="易错">
			卵裂期：单个细胞<Hl>体积变小</Hl>，DNA 总量增加，有机物总量<Hl>减少</Hl>；桑葚胚之前的细胞都有发育成完整胚胎的潜能
		</Tip>
		<Narration t={t} />
	</Scene>
);

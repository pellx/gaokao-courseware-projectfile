import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {G, Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.simulate;
const {si1, si2, si3, si4} = t.cue;

// A bucket (trapezoid) holding D and d balls in a grid.
const Bucket: React.FC<{x: number; label: string; n: number}> = ({x, label, n}) => {
	const balls = Array.from({length: n * 2}, (_, i) => (i % 2 ? 'd' : 'D'));
	const per = 4;
	return (
		<g>
			<path d={`M${x - 150},120 L${x + 150},120 L${x + 115},420 L${x - 115},420 Z`} fill={C.panel} stroke={C.brown} strokeWidth={5} />
			{balls.map((b, i) => {
				const r = Math.floor(i / per);
				const c = i % per;
				const cx = x - 90 + c * 60;
				const cy = 390 - r * 58;
				return (
					<g key={i}>
						<circle cx={cx} cy={cy} r={25} fill={b === 'D' ? C.red : C.green} />
						<text x={cx} y={cy + 10} fontSize={28} fontWeight={900} fill="#fff" textAnchor="middle">{b}</text>
					</g>
				);
			})}
			<text x={x} y={480} fontSize={32} fontWeight={900} fill={C.text} textAnchor="middle">{label}</text>
			<text x={x} y={522} fontSize={26} fontWeight={700} fill={C.muted} textAnchor="middle">D、d 各 {n} 个</text>
		</g>
	);
};

export const Simulate: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">性状分离比的模拟实验</Header>
		<svg width={760} height={540} viewBox="0 0 760 540" style={{position: 'absolute', left: 70, top: 150}}>
			<G at={si1.from}>
				<Bucket x={190} label="甲桶（雌）" n={4} />
				<Bucket x={560} label="乙桶（雄）" n={6} />
			</G>
		</svg>
		<div style={{position: 'absolute', left: 880, right: 90, top: 180}}>
			<Table
				at={si1.from}
				cols="300px 1fr"
				fontSize={31}
				rowHeight={84}
				head={['实验操作', '模拟的对象']}
				rows={[
					{at: si1.from, cells: ['甲、乙两个小桶', '雌、雄生殖器官']},
					{at: si1.from + 50, cells: ['桶内的彩球', '雌、雄配子']},
					{at: si2.from, cells: ['随机抓取并组合', <Hl>雌雄配子随机结合</Hl>]},
					{at: si3.from, cells: ['抓后放回、摇匀', <>保证每种配子<Hl c={C.orange}>概率不变</Hl></>]},
				]}
			/>
		</div>
		<Tip at={si4.from} top={720} label="易错" fontSize={32}>
			每个桶内 D、d <Hl>数量必须相等</Hl>；两个桶的彩球<Hl>总数可以不同</Hl>（雄配子多于雌配子）；重复次数要足够多
		</Tip>
		<Narration t={t} />
	</Scene>
);

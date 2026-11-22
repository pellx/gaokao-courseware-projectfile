import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {Defs} from '../components/ui';
import {Arrow, G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.polysome;
const {po1, po2, po3, po4} = t.cue;
const RIBO = [0, 1, 2, 3];

export const Polysome: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">多聚核糖体</Header>
		<svg width={1740} height={330} viewBox="0 0 1740 330" style={{position: 'absolute', left: 90, top: 160}}>
			<Defs />
			<G at={po1.from}>
				<path d="M40,240 C300,200 500,290 800,240 S1300,200 1600,240" fill="none" stroke={C.brown} strokeWidth={6} />
				<text x={40} y={290} fontSize={26} fontWeight={900} fill={C.brown}>5′</text>
				<text x={1600} y={290} fontSize={26} fontWeight={900} fill={C.brown}>3′ mRNA</text>
				{RIBO.map((i) => {
					const x = 300 + i * 340;
					const len = 1 + i * 2;
					return (
						<g key={i}>
							<ellipse cx={x} cy={215} rx={70} ry={42} fill={C.orangeSoft} stroke={C.orange} strokeWidth={4} />
							{Array.from({length: len}, (_, k) => (
								<circle key={k} cx={x - 10 + (k % 2 ? 14 : -14)} cy={160 - k * 20} r={10} fill={C.red} />
							))}
						</g>
					);
				})}
			</G>
			<G at={po3.from}>
				<Arrow x1={1250} y1={40} x2={1550} y2={40} marker="arrow-red" color={C.red} />
				<text x={1400} y={20} fontSize={24} fontWeight={900} fill={C.red} textAnchor="middle">核糖体移动方向</text>
			</G>
		</svg>
		<Rows
			style={{left: 90, right: 90, top: 480}}
			fontSize={29}
			gap={12}
			items={[
				{at: po1.from, color: C.red, children: <>一个 mRNA 上结合<Hl>多个核糖体</Hl>，同时合成<Hl>多条肽链</Hl></>},
				{at: po2.from, color: C.orange, children: <>少量 mRNA 可以<Hl c={C.orange}>迅速合成大量蛋白质</Hl></>},
				{at: po3.from, color: C.green, children: <>模板相同 → 多条肽链的<Hl c={C.green}>氨基酸序列相同</Hl></>},
			]}
		/>
		<Tip at={po4.from} top={745} label="易错" fontSize={31}>
			每个核糖体<Hl>各合成一条肽链</Hl>；缩短的是合成大量蛋白质的时间，不是合成一条肽链的时间
		</Tip>
		<Narration t={t} />
	</Scene>
);

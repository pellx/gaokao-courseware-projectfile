import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {Chromo} from '../components/gene';
import {Arrow, G} from '../components/kit';
import {Defs} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';
import {MAT, PAT} from './cells';

const t = T.homolog;
const {ho1, ho2, ho3, ho4, ho5} = t.cue;
const Y = 250;
const H = 220;

export const Homolog: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">同源染色体与四分体</Header>
		<svg width={900} height={540} viewBox="0 0 900 540" style={{position: 'absolute', left: 90, top: 160}}>
			<Defs />
			<G at={ho1.from}>
				<Chromo x={150} y={Y} h={H} w={28} color={PAT} double />
				<Chromo x={280} y={Y} h={H} w={28} color={MAT} double />
				<text x={150} y={Y - H / 2 - 22} fontSize={28} fontWeight={900} fill={PAT} textAnchor="middle">来自父方</text>
				<text x={280} y={Y - H / 2 - 22} fontSize={28} fontWeight={900} fill={MAT} textAnchor="middle">来自母方</text>
				<path d={`M120,${Y + H / 2 + 20} v16 h190 v-16`} fill="none" stroke={C.muted} strokeWidth={3} />
				<text x={215} y={Y + H / 2 + 72} fontSize={32} fontWeight={900} fill={C.red} textAnchor="middle">一对同源染色体</text>
				<text x={215} y={Y + H / 2 + 112} fontSize={24} fontWeight={700} fill={C.muted} textAnchor="middle">每条含 2 条姐妹染色单体</text>
			</G>
			<G at={ho2.from}>
				<Arrow x1={350} y1={Y} x2={500} y2={Y} marker="arrow-orange" color={C.orange} />
				<text x={425} y={Y - 20} fontSize={30} fontWeight={900} fill={C.orange} textAnchor="middle">联会</text>
			</G>
			<G at={ho3.from}>
				<Chromo x={610} y={Y} h={H} w={28} color={PAT} double tail={{from: 0.68, color: MAT, which: 'right'}} />
				<Chromo x={652} y={Y} h={H} w={28} color={MAT} double tail={{from: 0.68, color: PAT, which: 'left'}} />
				<path d={`M570,${Y + H / 2 + 20} v16 h122 v-16`} fill="none" stroke={C.muted} strokeWidth={3} />
				<text x={631} y={Y + H / 2 + 72} fontSize={32} fontWeight={900} fill={C.red} textAnchor="middle">四分体</text>
				<text x={631} y={Y + H / 2 + 112} fontSize={24} fontWeight={700} fill={C.muted} textAnchor="middle">非姐妹染色单体可互换</text>
			</G>
		</svg>
		<Rows
			style={{left: 1000, right: 90, top: 180}}
			fontSize={30}
			gap={18}
			items={[
				{at: ho1.from, color: C.red, title: '同源染色体', children: <>形状、大小一般相同，一条来自父方、一条来自母方</>},
				{at: ho2.from, color: C.orange, title: '联会', children: <>减数分裂Ⅰ前期，同源染色体两两配对</>},
				{at: ho3.from, color: C.red, title: '四分体', children: <>联会后的一对同源染色体（含 4 条染色单体）</>},
				{at: ho4.from, color: C.green, title: '数量', children: <>1 四分体 ＝ 1 对同源染色体 ＝ 2 条染色体 ＝ <Hl c={C.green}>4 条染色单体</Hl> ＝ 4 个 DNA</>},
			]}
		/>
		<Tip at={ho5.from} top={735} label="易错" fontSize={32}>
			同源染色体<Hl>不是复制形成的</Hl>（复制形成的是姐妹染色单体）；X 与 Y 大小不同，也是<Hl>同源染色体</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

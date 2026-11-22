import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';
import {LONG, MAT, MCell, PAT, SHORT} from './cells';

const t = T.identify;
const {id1, id2, id3, id4} = t.cue;
const CY = 160;
const LY = CY + 140 + 44;

export const Identify: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">分裂图像辨析：“三看”</Header>
		<svg width={1740} height={420} viewBox="0 0 1740 420" style={{position: 'absolute', left: 90, top: 160}}>
			<G at={id1.from}>
				<MCell
					x={1450}
					y={CY}
					rx={120}
					equator
					labelY={LY}
					label="减数分裂Ⅱ中期"
					sub={['无同源染色体']}
					chs={[
						{dx: 0, dy: -34, h: LONG, color: PAT, double: true, rotate: 90},
						{dx: 0, dy: 40, h: SHORT, color: MAT, double: true, rotate: 90},
					]}
				/>
			</G>
			<G at={id2.from}>
				<MCell
					x={870}
					y={CY}
					rx={140}
					equator
					labelY={LY}
					label="减数分裂Ⅰ中期"
					sub={['同源染色体成对排列']}
					chs={[
						{dx: -54, dy: -40, h: LONG, color: PAT, double: true, rotate: 90},
						{dx: 54, dy: -40, h: LONG, color: MAT, double: true, rotate: 90},
						{dx: -36, dy: 46, h: SHORT, color: MAT, double: true, rotate: 90},
						{dx: 36, dy: 46, h: SHORT, color: PAT, double: true, rotate: 90},
					]}
				/>
			</G>
			<G at={id3.from}>
				<MCell
					x={290}
					y={CY}
					rx={140}
					equator
					labelY={LY}
					label="有丝分裂中期"
					sub={['有同源染色体，不联会']}
					chs={[
						{dx: 0, dy: -84, h: LONG, color: PAT, double: true, rotate: 90},
						{dx: 0, dy: -30, h: LONG, color: MAT, double: true, rotate: 90},
						{dx: 0, dy: 24, h: SHORT, color: PAT, double: true, rotate: 90},
						{dx: 0, dy: 72, h: SHORT, color: MAT, double: true, rotate: 90},
					]}
				/>
			</G>
		</svg>
		<Flow
			style={{left: 90, top: 590}}
			fontSize={30}
			arrows={[[undefined, '有', '无']]}
			rows={[
				[
					{label: '一看：有无同源染色体', note: '无 → 减数分裂Ⅱ', at: id1.from, color: C.orange},
					{label: '二看：有无联会、四分体、同源分离', note: '有 → 减数分裂Ⅰ', at: id2.from, color: C.red},
					{label: '三看', note: '→ 有丝分裂', at: id3.from, color: C.green},
				],
			]}
		/>
		<Tip at={id4.from} top={735} label="易错" fontSize={32}>
			有丝分裂<Hl>全程都有同源染色体</Hl>，只是不联会；先找<Hl>形状、大小相同</Hl>的两条染色体
		</Tip>
		<Narration t={t} />
	</Scene>
);

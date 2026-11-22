import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Chromo} from '../components/gene';
import {G, Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.swap;
const {sw1, sw2, sw3, sw4} = t.cue;

export const Swap: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">易位与互换的区别</Header>
		<svg width={700} height={380} viewBox="0 0 700 380" style={{position: 'absolute', left: 90, top: 170}}>
			<G at={sw1.from}>
				<text x={160} y={30} fontSize={30} fontWeight={900} fill={C.green} textAnchor="middle">互换</text>
				<Chromo x={120} y={190} h={240} w={30} color={C.red} tail={{from: 0.65, color: C.orange, which: 'both'}} />
				<Chromo x={200} y={190} h={240} w={30} color={C.orange} tail={{from: 0.65, color: C.red, which: 'both'}} />
				<text x={160} y={350} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">同源染色体（大小相同）</text>
			</G>
			<G at={sw2.from}>
				<text x={520} y={30} fontSize={30} fontWeight={900} fill={C.red} textAnchor="middle">易位</text>
				<Chromo x={460} y={190} h={240} w={30} color={C.red} tail={{from: 0.7, color: C.green, which: 'both'}} />
				<Chromo x={580} y={210} h={160} w={30} color={C.green} tail={{from: 0.6, color: C.red, which: 'both'}} />
				<text x={520} y={350} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">非同源染色体（大小不同）</text>
			</G>
		</svg>
		<div style={{position: 'absolute', left: 860, right: 90, top: 180}}>
			<Table
				at={sw1.from}
				cols="200px 1fr 1fr"
				fontSize={30}
				rowHeight={80}
				head={['比较项目', '互换', '易位']}
				rows={[
					{at: sw1.from, cells: ['发生对象', <Hl c={C.green}>同源染色体</Hl>, <Hl>非同源染色体</Hl>]},
					{at: sw2.from, cells: ['变异类型', '基因重组', '染色体结构变异']},
					{at: sw3.from, cells: ['显微镜下', '观察不到', '可以观察到']},
				]}
			/>
		</div>
		<Tip at={sw4.from} top={650} label="解题方法" fontSize={33}>
			看交换片段的两条染色体<Hl>形态大小是否相同</Hl>：相同 → 互换；不同 → 易位
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {Chromo} from '../components/gene';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';
import {MAT, PAT} from './cells';

const t = T.model;
const {mo1, mo2, mo3, mo4} = t.cue;

export const Model: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">建立减数分裂中染色体变化的模型</Header>
		<svg width={700} height={520} viewBox="0 0 700 520" style={{position: 'absolute', left: 90, top: 165}}>
			<G at={mo1.from}>
				<Chromo x={110} y={170} h={220} w={34} color={PAT} />
				<Chromo x={230} y={170} h={220} w={34} color={MAT} />
				<text x={170} y={320} fontSize={28} fontWeight={900} fill={C.text} textAnchor="middle">两种颜色：父方 / 母方</text>
			</G>
			<G at={mo2.from}>
				<Chromo x={420} y={200} h={140} w={34} color={PAT} />
				<Chromo x={530} y={200} h={140} w={34} color={MAT} />
				<text x={475} y={320} fontSize={28} fontWeight={900} fill={C.text} textAnchor="middle">长短不同：非同源染色体</text>
				<Chromo x={300} y={430} h={120} w={30} color={PAT} double />
				<text x={350} y={420} fontSize={26} fontWeight={800} fill={C.muted}>两条相同的并在一起</text>
				<text x={350} y={458} fontSize={26} fontWeight={800} fill={C.muted}>＝ 复制后的姐妹染色单体</text>
			</G>
		</svg>
		<Rows
			style={{left: 850, right: 90, top: 180}}
			fontSize={30}
			gap={18}
			items={[
				{at: mo1.from, color: C.red, title: '颜色', children: <>两种颜色分别代表来自<Hl>父方</Hl>和<Hl c={C.orange}>母方</Hl></>},
				{at: mo2.from, color: C.orange, title: '长短', children: <>长短不同代表<Hl c={C.orange}>非同源染色体</Hl></>},
				{at: mo3.from, color: C.green, title: '操作', children: <>纸上画纺锤体，依次模拟联会、同源染色体分离、着丝粒分裂</>},
			]}
		/>
		<Tip at={mo4.from} top={720} label="考法" fontSize={33}>
			模拟非同源染色体自由组合，至少需要<Hl>两对同源染色体</Hl>；橡皮泥模型属于<Hl c={C.green}>物理模型</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {Chromo} from '../components/gene';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.modern;
const {mo1, mo2, mo3, mo4, mo5} = t.cue;
const P = C.red;
const M = C.orange;

export const Modern: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">孟德尔遗传规律的现代解释</Header>
		<svg width={640} height={540} viewBox="0 0 640 540" style={{position: 'absolute', left: 90, top: 165}}>
			<G at={mo1.from}>
				<text x={10} y={40} fontSize={30} fontWeight={900} fill={C.red}>分离定律</text>
				<Chromo x={170} y={150} h={160} w={26} color={P} bands={[{pos: 0.25, label: 'A', left: true}]} fontSize={32} />
				<Chromo x={260} y={150} h={160} w={26} color={M} bands={[{pos: 0.25, label: 'a'}]} fontSize={32} />
				<text x={215} y={262} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">等位基因随同源染色体分开</text>
			</G>
			<G at={mo3.from}>
				<text x={10} y={320} fontSize={30} fontWeight={900} fill={C.orange}>自由组合定律</text>
				<Chromo x={150} y={430} h={160} w={26} color={P} bands={[{pos: 0.25, label: 'A', left: true}]} fontSize={32} />
				<Chromo x={230} y={430} h={160} w={26} color={M} bands={[{pos: 0.25, label: 'a'}]} fontSize={32} />
				<Chromo x={400} y={445} h={110} w={26} color={P} bands={[{pos: 0.3, label: 'B', left: true}]} fontSize={32} />
				<Chromo x={480} y={445} h={110} w={26} color={M} bands={[{pos: 0.3, label: 'b'}]} fontSize={32} />
				<text x={315} y={535} fontSize={24} fontWeight={800} fill={C.muted} textAnchor="middle">两对基因位于两对同源染色体上</text>
			</G>
		</svg>
		<Rows
			style={{left: 780, right: 90, top: 175}}
			fontSize={29}
			gap={16}
			items={[
				{at: mo1.from, color: C.red, title: '分离', children: <>一对同源染色体上的等位基因具有一定的<Hl>独立性</Hl></>},
				{at: mo2.from, color: C.red, title: '分离', children: <>形成配子时，<Hl>等位基因随同源染色体的分开而分离</Hl></>},
				{at: mo3.from, color: C.orange, title: '组合', children: <><Hl c={C.orange}>非同源染色体上的非等位基因</Hl>，分离或组合互不干扰</>},
				{at: mo4.from, color: C.orange, title: '组合', children: <>等位基因分离的同时，非同源染色体上的非等位基因<Hl c={C.orange}>自由组合</Hl></>},
			]}
		/>
		<Tip at={mo5.from} top={735} label="易错" fontSize={33}>
			两个定律都发生在<Hl>减数分裂Ⅰ后期</Hl>；同源染色体上的非等位基因<Hl>不遵循</Hl>自由组合定律
		</Tip>
		<Narration t={t} />
	</Scene>
);

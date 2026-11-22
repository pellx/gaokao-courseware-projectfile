import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {PedLegend, Pedigree as Ped} from '../components/gene';
import {G} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.pedigree;
const {pd1, pd2, pd3, pd4, pd5} = t.cue;

export const Pedigree: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">系谱图中遗传方式的判断</Header>
		<svg width={640} height={540} viewBox="0 0 640 540" style={{position: 'absolute', left: 90, top: 165}}>
			<G at={pd3.from}>
				<text x={160} y={30} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">常染色体隐性</text>
				<Ped at={pd3.from} size={52} nodes={[{id: 'a', x: 80, y: 90, sex: 'm'}, {id: 'b', x: 240, y: 90, sex: 'f'}, {id: 'c', x: 160, y: 230, sex: 'f', ill: true}]} couples={[['a', 'b']]} kids={[{parents: ['a', 'b'], children: ['c']}]} />
				<text x={160} y={300} fontSize={22} fontWeight={700} fill={C.muted} textAnchor="middle">无中生有，女病父正常</text>
			</G>
			<G at={pd4.from}>
				<text x={480} y={30} fontSize={28} fontWeight={900} fill={C.orange} textAnchor="middle">常染色体显性</text>
				<Ped at={pd4.from} size={52} nodes={[{id: 'a', x: 400, y: 90, sex: 'm', ill: true}, {id: 'b', x: 560, y: 90, sex: 'f', ill: true}, {id: 'c', x: 480, y: 230, sex: 'f'}]} couples={[['a', 'b']]} kids={[{parents: ['a', 'b'], children: ['c']}]} />
				<text x={480} y={300} fontSize={22} fontWeight={700} fill={C.muted} textAnchor="middle">有中生无，男病女儿正常</text>
			</G>
			<PedLegend x={130} y={380} />
		</svg>
		<Rows
			style={{left: 780, right: 90, top: 175}}
			fontSize={29}
			gap={14}
			items={[
				{at: pd1.from, color: C.muted, title: '① 伴 Y？', children: <>患者全是男性、父子相传</>},
				{at: pd2.from, color: C.red, title: '② 显隐', children: <><Hl>无中生有为隐性</Hl>，<Hl>有中生无为显性</Hl></>},
				{at: pd3.from, color: C.red, title: '③ 隐性看女病', children: <>女病而父或子正常 → <Hl>常隐</Hl></>},
				{at: pd4.from, color: C.orange, title: '③ 显性看男病', children: <>男病而母或女正常 → <Hl c={C.orange}>常显</Hl></>},
			]}
		/>
		<Tip at={pd5.from} top={720} label="解题方法" fontSize={32}>
			<Hl>无中生有为隐性，隐性遗传看女病；有中生无为显性，显性遗传看男病</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {PedLegend, Pedigree} from '../components/gene';
import {G} from '../components/kit';
import {svgChem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.xr;
const {xr1, xr2, xr3, xr4} = t.cue;

export const Xr: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">伴 X 隐性遗传的特点</Header>
		<svg width={640} height={540} viewBox="0 0 640 540" style={{position: 'absolute', left: 90, top: 165}}>
			<text x={10} y={80} fontSize={30} fontWeight={900} fill={C.muted}>Ⅰ</text>
			<text x={10} y={250} fontSize={30} fontWeight={900} fill={C.muted}>Ⅱ</text>
			<text x={10} y={420} fontSize={30} fontWeight={900} fill={C.muted}>Ⅲ</text>
			<Pedigree
				at={xr2.from}
				size={60}
				fontSize={26}
				nodes={[
					{id: 'a', x: 150, y: 70, sex: 'm', ill: true, label: '外祖父'},
					{id: 'b', x: 330, y: 70, sex: 'f'},
					{id: 'c', x: 240, y: 240, sex: 'f', label: '母亲（携带）'},
					{id: 'd', x: 470, y: 240, sex: 'm'},
					{id: 'e', x: 355, y: 410, sex: 'm', ill: true, label: '外孙'},
				]}
				couples={[['a', 'b'], ['c', 'd']]}
				kids={[{parents: ['a', 'b'], children: ['c']}, {parents: ['c', 'd'], children: ['e']}]}
			/>
			<G at={xr2.from}>
				<text x={150} y={22} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">{svgChem('X^[b]Y', 28)}</text>
				<text x={110} y={240} fontSize={28} fontWeight={900} fill={C.orange} textAnchor="middle">{svgChem('X^[B]X^[b]', 28)}</text>
				<text x={470} y={410} fontSize={28} fontWeight={900} fill={C.red} textAnchor="middle">{svgChem('X^[b]Y', 28)}</text>
			</G>
			<PedLegend x={20} y={520} />
		</svg>
		<Rows
			style={{left: 800, right: 90, top: 180}}
			fontSize={31}
			gap={20}
			items={[
				{at: xr1.from, color: C.red, title: '男多于女', children: <>男性只要一个 X<sup>b</sup> 就患病</>},
				{at: xr2.from, color: C.orange, title: '交叉遗传', children: <>男性的致病基因<Hl c={C.orange}>来自母亲、传给女儿</Hl>（外祖父 → 外孙）</>},
				{at: xr3.from, color: C.red, title: '女病父子必病', children: <>女患者 X<sup>b</sup>X<sup>b</sup>：一个 X<sup>b</sup> 来自父亲，一定传给儿子</>},
			]}
		/>
		<Tip at={xr4.from} top={735} label="解题方法" fontSize={33}>
			有女患者的<Hl>父亲或儿子正常</Hl> → 一定<Hl>不是</Hl>伴 X 隐性遗传
		</Tip>
		<Narration t={t} />
	</Scene>
);

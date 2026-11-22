import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Punnett} from '../components/gene';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.colorblind;
const {cb1, cb2, cb3, cb4, cb5} = t.cue;
const tone = (g: string) => (g === 'X^[b]Y' ? C.red : g === 'X^[B]X^[b]' ? C.orange : C.green);
const note = (g: string) => (g === 'X^[b]Y' ? '色盲♂' : g === 'X^[B]X^[b]' ? '携带者♀' : g.includes('Y') ? '正常♂' : '正常♀');

export const Colorblind: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">人类红绿色盲（伴 X 隐性）</Header>
		<div style={{position: 'absolute', left: 90, width: 900, top: 170}}>
			<Table
				at={cb1.from}
				cols="160px 1fr 1fr"
				fontSize={32}
				rowHeight={78}
				head={['性别', '基因型', '表型']}
				rows={[
					{at: cb2.from, cells: ['女', 'X^[B]X^[B]', '正常']},
					{at: cb2.from + 30, cells: ['女', 'X^[B]X^[b]', <Hl c={C.orange}>正常（携带者）</Hl>]},
					{at: cb2.from + 60, cells: ['女', 'X^[b]X^[b]', <Hl>色盲</Hl>]},
					{at: cb3.from, cells: ['男', 'X^[B]Y', '正常']},
					{at: cb3.from + 30, cells: ['男', 'X^[b]Y', <Hl>色盲</Hl>]},
				]}
			/>
		</div>
		<Punnett
			style={{left: 1120, top: 230}}
			at={cb4.from}
			cell={130}
			fontSize={34}
			cols={['X^[B]', 'Y']}
			rows={['X^[B]', 'X^[b]']}
			cells={[['X^[B]X^[B]', 'X^[B]Y'], ['X^[B]X^[b]', 'X^[b]Y']]}
			color={tone}
			note={note}
		/>
		<Tip at={cb5.from} top={690} label="易错" fontSize={33}>
			色盲男孩（X<sup>b</sup>Y）的致病基因<Hl>一定来自母亲</Hl>；携带者 × 正常男：女儿全正常，儿子一半色盲
		</Tip>
		<Narration t={t} />
	</Scene>
);

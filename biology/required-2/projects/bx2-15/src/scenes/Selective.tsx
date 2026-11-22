import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.selective;
const {se1, se2, se3, se4} = t.cue;
const yes = <Hl c={C.green}>表达</Hl>;
const no = <span style={{color: C.muted}}>不表达</span>;

export const Selective: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">基因的选择性表达与细胞分化</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Table
				at={se1.from}
				cols="1fr 1fr 1fr 1fr"
				fontSize={32}
				rowHeight={80}
				head={['鸡的基因', '输卵管细胞', '红细胞', '胰岛细胞']}
				rows={[
					{at: se2.from, cells: ['核糖体蛋白基因', yes, yes, yes]},
					{at: se2.from + 60, cells: ['卵清蛋白基因', yes, no, no]},
					{at: se2.from + 90, cells: ['珠蛋白基因', no, yes, no]},
					{at: se2.from + 120, cells: ['胰岛素基因', no, no, yes]},
				]}
			/>
			<Appear at={se3.from} dy={10}>
				<div style={{fontSize: 36, fontWeight: 800, marginTop: 30}}>
					细胞分化的实质：<Hl>基因的选择性表达</Hl>
				</div>
			</Appear>
		</div>
		<Tip at={se4.from} top={700} label="易错" fontSize={33}>
			鸡的胰岛细胞中<Hl>也有</Hl>卵清蛋白、珠蛋白基因，只是不表达；细胞分化<Hl>不改变遗传物质</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

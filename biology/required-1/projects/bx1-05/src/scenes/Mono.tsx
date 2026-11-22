import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.mono;
const {mo1, mo2, mo3, mo4} = t.cue;

const both = <Hl c={C.red}>动植物细胞</Hl>;

export const Mono: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">单糖：不能水解的糖</Header>
		<Appear at={mo1.from} style={{position: 'absolute', left: 90, top: 155, fontSize: 32, fontWeight: 700, color: C.muted}}>
			可被细胞<Hl c={C.orange}>直接吸收</Hl>
		</Appear>
		<Appear at={mo2.from} style={{position: 'absolute', left: 90, right: 90, top: 215}}>
			<Table
				at={mo2.from}
				cols="200px 300px 1fr 1fr"
				fontSize={31}
				rowHeight={70}
				head={['类别', '名称', '分布', '作用']}
				rows={[
					{at: mo2.from, cells: ['六碳糖', <Hl>葡萄糖</Hl>, both, '主要的能源物质']},
					{at: mo2.from + 20, cells: ['六碳糖', '果糖', '植物细胞', '提供能量']},
					{at: mo2.from + 40, cells: ['六碳糖', '半乳糖', '动物细胞', '提供能量']},
					{at: mo2.from + 80, cells: ['五碳糖', <Hl>核糖</Hl>, both, <>组成 <Hl c={C.orange}>RNA</Hl></>]},
					{at: mo2.from + 100, cells: ['五碳糖', <Hl>脱氧核糖</Hl>, both, <>组成 <Hl c={C.orange}>DNA</Hl></>]},
				]}
			/>
		</Appear>
		<Tip at={mo4.from} top={660} label="解题方法">
			动植物细胞共有的糖：<Hl>葡萄糖、核糖、脱氧核糖</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

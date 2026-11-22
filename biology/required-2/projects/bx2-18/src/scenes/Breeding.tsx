import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.breeding;
const {br1, br2, br3, br4} = t.cue;

export const Breeding: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">几种育种方法的比较</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				at={br1.from}
				cols="220px 220px 1fr 1fr"
				fontSize={28}
				rowHeight={80}
				head={['方法', '原理', '常用方法', '优缺点']}
				rows={[
					{at: br1.from, cells: ['杂交育种', '基因重组', '杂交 → 自交 → 选优', <>操作简便；<Hl>育种时间长</Hl></>]},
					{at: br2.from, cells: ['诱变育种', '基因突变', '辐射、化学因素诱变', <>提高突变率；<Hl>有利变异少</Hl></>]},
					{at: br3.from, cells: ['单倍体育种', '染色体变异', '花药离体培养 ＋ 秋水仙素', <><Hl c={C.green}>明显缩短育种年限</Hl></>]},
					{at: br3.from + 60, cells: ['多倍体育种', '染色体变异', '秋水仙素处理萌发种子或幼苗', '器官大、营养物质含量高']},
				]}
			/>
		</div>
		<Tip at={br4.from} top={600} label="解题方法" fontSize={33}>
			“<Hl>最简便</Hl>”→ 杂交育种；“<Hl>最快</Hl>”→ 单倍体育种；“<Hl>产生新性状</Hl>”→ 诱变育种
		</Tip>
		<Narration t={t} />
	</Scene>
);

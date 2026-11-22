import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.feature;
const {fe1, fe2, fe3, fe4} = t.cue;

export const Feature: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">DNA 复制的特点与意义</Header>
		<Rows
			style={{left: 90, right: 90, top: 180}}
			fontSize={34}
			gap={24}
			items={[
				{at: fe1.from, color: C.red, title: '特点', children: <><Hl>边解旋边复制</Hl>；<Hl>半保留复制</Hl></>},
				{at: fe2.from, color: C.orange, title: '准确的原因', children: <>双螺旋结构提供<Hl c={C.orange}>精确的模板</Hl>；<Hl c={C.orange}>碱基互补配对</Hl>保证准确进行</>},
				{at: fe3.from, color: C.green, title: '意义', children: <>将遗传信息从亲代传给子代，保持了<Hl c={C.green}>遗传信息的连续性</Hl></>},
			]}
		/>
		<Tip at={fe4.from} top={560} label="易错" fontSize={34}>
			复制也可能出错 → <Hl>基因突变</Hl>；一个 DNA 复制一次得到的两个子代 DNA 一般<Hl>完全相同</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

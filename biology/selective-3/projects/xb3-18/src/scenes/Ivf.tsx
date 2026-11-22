import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ivf;
const {iv1, iv2, iv3, iv4, iv5} = t.cue;

export const Ivf: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">试管婴儿与设计试管婴儿</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 180}}>
			<Table
				head={['比较项目', '试管婴儿', '设计试管婴儿']}
				cols="1fr 1.6fr 1.6fr"
				at={iv1.from}
				fontSize={31}
				rowHeight={80}
				rows={[
					{cells: ['目的', <Hl c={C.orange}>解决不孕不育</Hl>, <Hl c={C.green}>避免遗传病、提供配型相合的造血干细胞</Hl>], at: iv1.from},
					{cells: ['移植前', '不需要诊断', <Hl>胚胎遗传学诊断</Hl>], at: iv2.from},
					{cells: ['技术', '体外受精、早期胚胎培养、胚胎移植', '同左 + 遗传学诊断'], at: iv3.from},
					{cells: ['生殖方式', <Hl c={C.orange}>有性生殖</Hl>, <Hl c={C.orange}>有性生殖</Hl>], at: iv4.from},
				]}
			/>
		</div>
		<Tip at={iv5.from} top={640} label="易错">
			区别在于设计试管婴儿多了<Hl>遗传学诊断</Hl>；不能借此<Hl>随意选择性别</Hl>等非医学需要的性状
		</Tip>
		<Narration t={t} />
	</Scene>
);

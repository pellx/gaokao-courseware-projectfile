import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.chromo;
const {ch1, ch2, ch3, ch4} = t.cue;

export const Chromo: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">染色体异常遗传病</Header>
		<Appear at={ch2.from} style={{position: 'absolute', left: 90, top: 170, width: 560, height: 520}}>
			<Photo src="images/karyotype.png" style={{width: '100%', height: '100%', background: '#fff'}} fit="contain" />
		</Appear>
		<Rows
			style={{left: 700, right: 90, top: 180}}
			fontSize={30}
			gap={16}
			items={[
				{at: ch1.from, color: C.red, title: '概念', children: <>由<Hl>染色体变异</Hl>引起的遗传病</>},
				{at: ch2.from, color: C.orange, title: '结构异常', children: <>猫叫综合征：5 号染色体部分缺失</>},
				{at: ch2.from + 90, color: C.red, title: '数目异常', children: <><Hl>唐氏综合征</Hl>（21 三体）：多一条 21 号染色体，共 47 条</>},
				{at: ch3.from, color: C.brown, title: '成因', children: <>减Ⅰ或减Ⅱ中 21 号染色体<Hl>未正常分离</Hl> → 异常配子</>},
			]}
		/>
		<Tip at={ch4.from} top={725} label="易错" fontSize={33}>
			患者<Hl>不一定携带致病基因</Hl>；可用<Hl>显微镜观察染色体</Hl>诊断，单基因病不能
		</Tip>
		<Narration t={t} />
	</Scene>
);

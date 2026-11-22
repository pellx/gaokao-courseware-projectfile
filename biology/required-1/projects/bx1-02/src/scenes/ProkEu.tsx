import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.prokeu;
const {pe1, pe2, pe3, pe4} = t.cue;

export const ProkEu: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">原核细胞与真核细胞的区别</Header>
		<Appear at={pe1.from} style={{position: 'absolute', left: 90, right: 90, top: 165}}>
			<Table
				at={pe1.from}
				cols="300px 1fr 1fr"
				fontSize={32}
				rowHeight={84}
				head={['比较项目', '原核细胞', '真核细胞']}
				rows={[
					{at: pe1.from, key: true, cells: ['细胞核', <><Hl>无</Hl>以核膜为界限的细胞核</>, <><Hl c={C.green}>有</Hl>成形的细胞核</>]},
					{at: pe2.from, key: true, cells: ['DNA', <>拟核区，<Hl c={C.orange}>裸露的环状 DNA</Hl>，无染色体</>, <>与蛋白质结合成<Hl c={C.orange}>染色体（质）</Hl></>]},
					{at: pe3.from, key: true, cells: ['细胞器', <>只有<Hl c={C.orange}>核糖体</Hl></>, <>线粒体、叶绿体、内质网等多种</>]},
					{at: pe4.from, cells: ['细胞壁', <>细菌有，主要成分是<Hl c={C.orange}>肽聚糖</Hl></>, <>植物：纤维素和果胶；动物无</>]},
				]}
			/>
		</Appear>
		<Tip at={pe4.from} top={600} label="易错">
			根本区别是<Hl>有无以核膜为界限的细胞核</Hl>，不是有无细胞壁；细菌和植物都有细胞壁，但成分不同
		</Tip>
		<Narration t={t} />
	</Scene>
);

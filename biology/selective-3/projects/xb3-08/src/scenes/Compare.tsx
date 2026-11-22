import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.compare;
const {cm1, cm2, cm3, cm4, cm5} = t.cue;

export const Compare: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">与植物体细胞杂交的比较</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Table
				head={['比较项目', '植物体细胞杂交', '动物细胞融合']}
				cols="1fr 1.7fr 1.7fr"
				at={cm1.from}
				fontSize={30}
				rowHeight={76}
				focus
				rows={[
					{cells: ['原理', '细胞膜的流动性、细胞的全能性', '细胞膜的流动性'], at: cm1.from},
					{cells: ['前处理', <Hl>纤维素酶、果胶酶去壁</Hl>, '胰蛋白酶分散成单个细胞'], at: cm2.from, key: true},
					{cells: ['诱导方法', 'PEG、电融合、离心、高 Ca^2+—高 pH', <>PEG、电融合、<Hl>灭活病毒</Hl></>], at: cm3.from, key: true},
					{cells: ['结果', <Hl c={C.green}>杂种植株</Hl>, <Hl>杂交细胞</Hl>], at: cm4.from, key: true},
					{cells: ['意义', '打破生殖隔离，远缘杂交育种', '制备单克隆抗体等'], at: cm4.from + 30},
				]}
			/>
		</div>
		<Tip at={cm5.from} top={650} label="解题方法">
			抓住三处不同：<Hl>是否去壁</Hl>、<Hl>能否用灭活病毒</Hl>、<Hl>能否得到个体</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

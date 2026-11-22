import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.summary;
const {sm1, sm2, sm3, sm4} = t.cue;

export const Summary: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">细胞器的归纳</Header>
		<Appear at={sm1.from} style={{position: 'absolute', left: 90, right: 90, top: 160}}>
			<Table
				at={sm1.from}
				cols="300px 1fr"
				fontSize={31}
				rowHeight={62}
				head={['分类依据', '细胞器']}
				rows={[
					{at: sm1.from, cells: ['双层膜', <Hl>线粒体、叶绿体</Hl>]},
					{at: sm1.from + 30, cells: ['单层膜', '内质网、高尔基体、溶酶体、液泡']},
					{at: sm1.from + 60, cells: ['无膜', <Hl c={C.orange}>核糖体、中心体</Hl>]},
					{at: sm2.from, cells: ['含 DNA 和 RNA', '线粒体、叶绿体']},
					{at: sm2.from + 40, cells: ['只含 RNA', '核糖体']},
					{at: sm3.from, cells: ['含色素', <Hl c={C.green}>叶绿体、液泡</Hl>]},
					{at: sm3.from + 50, cells: ['分布', <>叶绿体：绿色植物的光合细胞；液泡：主要在植物细胞；中心体：动物和某些低等植物</>]},
				]}
			/>
		</Appear>
		<Tip at={sm4.from} top={710} label="解题方法">
			按<Hl>膜层数、含核酸、含色素、分布</Hl>四个维度列表记忆，问哪个维度查哪一列
		</Tip>
		<Narration t={t} />
	</Scene>
);

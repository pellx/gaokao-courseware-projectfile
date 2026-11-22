import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.process;
const {pr1, pr2, pr3, pr4, pr5} = t.cue;

export const Process: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">DNA 复制的过程与条件</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				at={pr1.from}
				cols="200px 1fr"
				fontSize={31}
				rowHeight={70}
				head={['项目', '内容']}
				rows={[
					{at: pr1.from, cells: ['时间', '细胞分裂前的间期（随染色体复制而完成）']},
					{at: pr1.from + 50, cells: ['场所', <>主要在<Hl c={C.orange}>细胞核</Hl>（线粒体、叶绿体中也有）</>]},
					{at: pr2.from, cells: ['解旋', <><Hl>解旋酶</Hl>使两条链解开（断开氢键）</>]},
					{at: pr3.from, cells: ['模板', <>解开的<Hl>每一条母链</Hl></>]},
					{at: pr3.from + 40, cells: ['原料', '4 种游离的脱氧核苷酸']},
					{at: pr3.from + 80, cells: ['酶', <><Hl>DNA 聚合酶</Hl>等（连接脱氧核苷酸）</>]},
					{at: pr4.from, cells: ['能量', 'ATP']},
				]}
			/>
		</div>
		<Tip at={pr5.from} top={725} label="易错" fontSize={31}>
			解旋酶断开<Hl>氢键</Hl>；DNA 聚合酶形成<Hl>磷酸二酯键</Hl>；线粒体、叶绿体中也能进行 DNA 复制
		</Tip>
		<Narration t={t} />
	</Scene>
);

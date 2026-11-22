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
		<Header tag="考点八">几种酶的比较</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 180}}>
			<Table
				head={['酶', '作用的键', '作用对象 / 结果']}
				cols="1fr 1fr 2.2fr"
				at={cm1.from}
				fontSize={31}
				rowHeight={82}
				rows={[
					{cells: [<Hl>限制酶</Hl>, '断开磷酸二酯键', '在特定序列处切割 DNA'], at: cm1.from},
					{cells: [<Hl c={C.orange}>DNA 连接酶</Hl>, '形成磷酸二酯键', <>连接<Hl c={C.orange}>两个 DNA 片段</Hl></>], at: cm2.from},
					{cells: [<Hl c={C.green}>DNA 聚合酶</Hl>, '形成磷酸二酯键', <>把<Hl c={C.green}>单个脱氧核苷酸</Hl>加到已有链的 3′ 端</>], at: cm3.from},
					{cells: [<Hl c={C.brown}>解旋酶</Hl>, <Hl c={C.brown}>断开氢键</Hl>, '使 DNA 双链解开'], at: cm4.from},
				]}
			/>
		</div>
		<Tip at={cm5.from} top={630} label="解题方法">
			先问<Hl>作用的键</Hl>，再问<Hl c={C.orange}>作用的对象</Hl>：是 DNA 片段，还是单个核苷酸
		</Tip>
		<Narration t={t} />
	</Scene>
);

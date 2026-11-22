import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.clone;
const {cl1, cl2, cl3, cl4} = t.cue;

export const Clone: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">生殖性克隆与治疗性克隆</Header>
		<div style={{position: 'absolute', left: 90, width: 1180, top: 180}}>
			<Table
				head={['比较项目', '生殖性克隆', '治疗性克隆']}
				cols="1fr 1.5fr 1.7fr"
				at={cl1.from}
				fontSize={30}
				rowHeight={90}
				rows={[
					{cells: ['结果', <Hl>独立生存的新个体</Hl>, <Hl c={C.green}>特定的细胞、组织和器官</Hl>], at: cl1.from},
					{cells: ['目的', '产生新个体', <>修复或替代受损的细胞、组织和器官，<Hl c={C.green}>治疗疾病</Hl></>], at: cl2.from},
					{cells: ['共同技术', <Hl c={C.orange}>核移植</Hl>, <Hl c={C.orange}>核移植</Hl>], at: cl3.from},
				]}
			/>
		</div>
		<Appear at={cl1.from} style={{position: 'absolute', left: 1330, top: 180, width: 500, height: 420}}>
			<Photo src="images/biohazard.jpg" caption="生物危害标志" style={{width: '100%', height: '100%'}} />
		</Appear>
		<Tip at={cl4.from} top={680} label="解题方法">
			看结果：<Hl>产生个体</Hl>是生殖性克隆；<Hl c={C.green}>只得到细胞、组织、器官</Hl>是治疗性克隆
		</Tip>
		<Narration t={t} />
	</Scene>
);

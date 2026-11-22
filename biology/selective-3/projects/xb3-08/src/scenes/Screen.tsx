import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Bullets, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.screen;
const {sc1, sc2, sc3, sc4, sc5} = t.cue;

export const Screen: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">两次筛选</Header>
		<Bullets
			style={{left: 90, right: 90, top: 175}}
			fontSize={30}
			items={[{at: sc1.from, children: <>融合后的细胞：未融合的 B 细胞、骨髓瘤细胞；<Hl c={C.orange}>B—B、瘤—瘤</Hl>融合细胞；<Hl>B—瘤融合的杂交瘤细胞</Hl></>}]}
		/>
		<div style={{position: 'absolute', left: 90, right: 90, top: 280}}>
			<Table
				head={['比较项目', '第一次筛选', '第二次筛选']}
				cols="1fr 1.7fr 1.7fr"
				at={sc2.from}
				fontSize={30}
				rowHeight={80}
				rows={[
					{cells: ['方法', <Hl>特定的选择培养基</Hl>, <Hl>克隆化培养 + 抗体检测</Hl>], at: sc2.from},
					{cells: ['结果', '只有杂交瘤细胞能生长', <>得到<Hl>能分泌所需抗体</Hl>的杂交瘤细胞</>], at: sc2.from + 30},
					{cells: ['原因', '淘汰未融合和同种融合的细胞', <>B 细胞有多种，<Hl c={C.orange}>杂交瘤细胞产生的抗体各不相同</Hl></>], at: sc3.from},
				]}
			/>
		</div>
		<Tip at={sc5.from} top={660} label="易错">
			第一次靠<Hl>选择培养基</Hl>选出杂交瘤细胞；第二次靠<Hl>抗体检测</Hl>选出能产生特定抗体的细胞
		</Tip>
		<Narration t={t} />
	</Scene>
);

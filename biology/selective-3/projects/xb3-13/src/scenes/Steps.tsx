import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.steps;
const {st1, st2, st3, st4, st5} = t.cue;

export const Steps: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">基因工程的基本操作程序</Header>
		<Cards
			right={560}
			top={180}
			height={200}
			titleSize={34}
			fontSize={28}
			gap={20}
			items={[
				{title: '① 筛选与获取', color: C.orange, at: st1.from, body: '目的基因'},
				{title: '② 构建', color: C.red, at: st2.from, body: <>基因表达载体<br /><Hl>核心</Hl></>},
			]}
		/>
		<Cards
			right={560}
			top={410}
			height={200}
			titleSize={34}
			fontSize={28}
			gap={20}
			items={[
				{title: '③ 导入', color: C.orange, at: st3.from, body: '受体细胞'},
				{title: '④ 检测与鉴定', color: C.green, at: st4.from, body: '目的基因'},
			]}
		/>
		<Appear at={st1.from} style={{position: 'absolute', left: 1410, top: 180, width: 420, height: 430}}>
			<Photo src="images/tubes.jpg" caption="PCR 反应用的八联管" style={{width: '100%', height: '100%'}} />
		</Appear>
		<Tip at={st5.from} top={680} label="易错">
			核心是<Hl>构建基因表达载体</Hl>；四步中只有<Hl>导入受体细胞</Hl>不涉及碱基互补配对
		</Tip>
		<Narration t={t} />
	</Scene>
);

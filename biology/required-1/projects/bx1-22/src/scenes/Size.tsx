import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.size;
const {sz1, sz2, sz3, sz4} = t.cue;

export const Size: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">细胞增殖：细胞不能无限长大</Header>
		<Def at={sz1.from} style={{left: 90, right: 90, top: 165}} fontSize={33}>
			细胞增殖：通过<Hl>细胞分裂</Hl>增加细胞数量，是生物体<Hl c={C.orange}>生长、发育、繁殖和遗传的基础</Hl>
		</Def>
		<Cards
			top={300}
			height={230}
			fontSize={31}
			titleSize={38}
			items={[
				{title: '不能无限长大', color: C.red, at: sz2.from, body: <>体积越大 → <Hl>相对表面积越小</Hl> → 物质运输效率越低</>},
				{title: '增殖的过程与方式', color: C.orange, at: sz3.from, body: <>物质准备 ＋ 细胞分裂</>, note: '真核细胞：有丝分裂、无丝分裂、减数分裂'},
			]}
		/>
		<Tip at={sz4.from} top={580} label="易错">
			细胞也<Hl>不是越小越好</Hl>：要容纳酶、核糖体等物质和结构
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.pros;
const {pr1, pr2, pr3, pr4} = t.cue;

export const Pros: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">转基因成果与利弊</Header>
		<Cards
			right={760}
			top={180}
			height={200}
			titleSize={34}
			fontSize={28}
			items={[
				{title: '农业', color: C.green, at: pr1.from, body: <>抗虫棉、抗除草剂作物<br /><Hl c={C.green}>提高产量、减少农药使用</Hl></>},
				{title: '医药', color: C.green, at: pr2.from, body: <>胰岛素、干扰素等<br /><Hl c={C.green}>缓解药物短缺</Hl>、降低成本</>},
			]}
		/>
		<Cards
			right={760}
			top={410}
			height={170}
			titleSize={34}
			fontSize={28}
			items={[{title: '担忧', color: C.red, at: pr3.from, body: <>会不会<Hl>危害人体健康</Hl>？会不会<Hl>破坏生态环境</Hl>？</>}]}
		/>
		<Appear at={pr1.from} style={{position: 'absolute', left: 1220, top: 180, width: 610, height: 400}}>
			<Photo src="images/cotton.jpg" caption="转基因抗虫棉（左）与普通棉花（右）" style={{width: '100%', height: '100%'}} pos="center 70%" />
		</Appear>
		<Tip at={pr4.from} top={650} label="解题方法">
			<Hl c={C.green}>利</Hl>和<Hl>弊</Hl>都要写，不能只答一面
		</Tip>
		<Narration t={t} />
	</Scene>
);

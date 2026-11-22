import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Bullets, Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.culture;
const {cu1, cu2, cu3, cu4, cu5} = t.cue;

export const Culture: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">植物组织培养的过程</Header>
		<Flow
			style={{left: 90, top: 190}}
			fontSize={36}
			arrows={[[undefined, '脱分化', '再分化', '']]}
			rows={[
				[
					{label: '外植体', at: cu1.from},
					{label: '愈伤组织', color: C.red, at: cu2.from},
					{label: '芽、根', color: C.orange, at: cu4.from},
					{label: '完整植株', color: C.green, at: cu4.from + 20},
				],
			]}
		/>
		<Bullets
			style={{left: 90, width: 1260, top: 340}}
			fontSize={31}
			gap={20}
			items={[
				{at: cu1.from, children: <><Hl c={C.orange}>外植体</Hl>：离体的植物器官、组织或细胞</>},
				{at: cu2.from, color: C.red, children: <><Hl>脱分化</Hl>：失去特有的结构和功能，转变成未分化的细胞</>},
				{at: cu3.from, color: C.red, children: <><Hl>愈伤组织</Hl>：不定形的薄壁组织团块</>},
				{at: cu4.from, color: C.green, children: <><Hl c={C.green}>再分化</Hl>：愈伤组织重新分化成芽、根等器官</>},
			]}
		/>
		<Appear at={cu3.from} style={{position: 'absolute', left: 1430, top: 170, width: 400, height: 500}}>
			<Photo src="images/callus.jpg" caption="愈伤组织" style={{width: '100%', height: '100%'}} pos="center 45%" />
		</Appear>
		<Tip at={cu5.from} top={720} label="易错">
			脱分化 → <Hl>愈伤组织</Hl>；再分化 → <Hl>芽、根</Hl>。两个过程不要弄反
		</Tip>
		<Narration t={t} />
	</Scene>
);

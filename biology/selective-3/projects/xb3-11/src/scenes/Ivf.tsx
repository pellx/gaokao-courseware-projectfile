import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ivf;
const {iv1, iv2, iv3, iv4, iv5} = t.cue;

export const Ivf: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">体外受精</Header>
		<Flow
			style={{left: 90, top: 200}}
			fontSize={33}
			rowGap={40}
			arrows={[[undefined, '体外培养'], [undefined, '获能处理']]}
			rows={[
				[
					{label: '采集卵母细胞', at: iv1.from},
					{label: '培养到 MⅡ 期', color: C.red, at: iv2.from},
				],
				[
					{label: '采集精子', at: iv1.from + 15},
					{label: '获能的精子', color: C.red, at: iv3.from},
				],
			]}
		/>
		<Flow
			style={{left: 90, top: 450}}
			fontSize={33}
			arrows={[[undefined, '受精']]}
			rows={[[{label: '在适当的培养液中共同培养', color: C.orange, at: iv4.from}, {label: '受精卵 → 早期胚胎', color: C.green, at: iv4.from + 20}]]}
		/>
		<Appear at={iv1.from} style={{position: 'absolute', left: 1240, top: 175, width: 590, height: 460}}>
			<Photo src="images/calf.jpg" caption="胚胎移植产下的牛犊" style={{width: '100%', height: '100%'}} pos="35% center" />
		</Appear>
		<Tip at={iv5.from} top={700} label="解题方法">
			受精前处理两句话答全：卵母细胞<Hl>培养到 MⅡ 期</Hl>；精子<Hl>获能处理</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

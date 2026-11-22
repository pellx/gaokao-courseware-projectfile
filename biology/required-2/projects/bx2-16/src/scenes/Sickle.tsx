import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.sickle;
const {sk1, sk2, sk3, sk4} = t.cue;

export const Sickle: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">镰状细胞贫血的病因</Header>
		<Appear at={sk1.from} style={{position: 'absolute', left: 90, top: 170, width: 520, height: 420}}>
			<Photo src="images/sickle.jpg" caption="血涂片中的镰刀状红细胞" style={{width: '100%', height: '100%'}} />
		</Appear>
		<Flow
			style={{left: 660, top: 190}}
			fontSize={30}
			rowGap={36}
			arrows={[[undefined, '转录'], [undefined, '翻译']]}
			rows={[
				[
					{label: '模板链：CTC → CAC', note: '碱基对替换（T—A → A—T）', at: sk3.from, color: C.red},
					{label: 'mRNA：GAG → GUG', at: sk3.from + 40, color: C.red},
				],
				[
					{label: '谷氨酸 → 缬氨酸', note: '直接原因', at: sk2.from, color: C.orange},
					{label: '血红蛋白异常 → 红细胞镰刀状', at: sk1.from, color: C.brown},
				],
			]}
		/>
		<Tip at={sk4.from} top={650} label="考法" fontSize={33}>
			<Hl>直接原因</Hl>：血红蛋白中一个氨基酸被替换；<Hl>根本原因</Hl>：基因中一个碱基对被替换；可用显微镜观察红细胞形态诊断
		</Tip>
		<Narration t={t} />
	</Scene>
);

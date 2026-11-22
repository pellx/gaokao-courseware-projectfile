import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib';
import {Formula} from '../components/gene';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ratio;
const {ra1, ra2, ra3, ra4} = t.cue;

export const Ratio: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">基因表达中的数量关系</Header>
		<Flow
			style={{left: 90, top: 190}}
			fontSize={40}
			arrows={[[undefined, '转录（一条链）', '翻译（3 个碱基 → 1 个）']]}
			rows={[
				[
					{label: 'DNA（基因）', note: '6 个碱基', at: ra1.from, color: C.brown},
					{label: 'mRNA', note: '3 个碱基', at: ra1.from + 30, color: C.red},
					{label: '氨基酸', note: '1 个', at: ra1.from + 60, color: C.orange},
				],
			]}
		/>
		<Formula at={ra2.from} style={{left: 90, top: 360}} fontSize={46}>
			DNA 碱基数 ∶ mRNA 碱基数 ∶ 氨基酸数 ＝ 6 ∶ 3 ∶ 1
		</Formula>
		<Formula at={ra3.from} style={{left: 90, top: 490}} fontSize={36} color={C.orange}>
			例：100 个氨基酸 → mRNA 至少 300 个碱基 → 基因至少 600 个碱基
		</Formula>
		<Tip at={ra4.from} top={640} label="易错" fontSize={33}>
			要写“<Hl>至少</Hl>”（未算终止密码子等）；氨基酸数 ＝ tRNA 转运的<Hl>次数</Hl>，不是 tRNA 的种类
		</Tip>
		<Narration t={t} />
	</Scene>
);

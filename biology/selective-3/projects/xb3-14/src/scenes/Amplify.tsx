import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Bullets, Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.amplify;
const {am1, am2, am3, am4, am5} = t.cue;

export const Amplify: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">实验：DNA 片段的扩增及电泳鉴定</Header>
		<Flow
			style={{left: 90, top: 185}}
			fontSize={30}
			rows={[
				[
					{label: '缓冲液', at: am1.from},
					{label: '模板 DNA', at: am1.from + 8},
					{label: '引物', at: am1.from + 16},
					{label: '4 种脱氧核苷酸', at: am1.from + 24},
					{label: '耐高温的 DNA 聚合酶', color: C.red, at: am1.from + 32},
				],
			]}
		/>
		<Flow
			style={{left: 90, top: 300}}
			fontSize={32}
			arrows={[[undefined, '', '']]}
			rows={[
				[
					{label: 'PCR 仪', at: am2.from},
					{label: '变性 → 复性 → 延伸', color: C.orange, note: '循环扩增', at: am2.from + 15},
				],
			]}
		/>
		<Bullets
			style={{left: 90, right: 90, top: 430}}
			fontSize={31}
			gap={20}
			items={[
				{at: am3.from, color: C.red, children: <>DNA 带<Hl>负电荷</Hl>，在电场中向<Hl>正极</Hl>移动</>},
				{at: am4.from, color: C.green, children: <>迁移速率与<Hl c={C.orange}>凝胶浓度、DNA 分子大小和构象</Hl>有关；分子越小，迁移越<Hl c={C.green}>快</Hl></>},
			]}
		/>
		<Tip at={am5.from} top={650} label="易错">
			加样孔放在<Hl>负极</Hl>一侧；离心管、枪头和蒸馏水都要<Hl c={C.orange}>高压灭菌</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

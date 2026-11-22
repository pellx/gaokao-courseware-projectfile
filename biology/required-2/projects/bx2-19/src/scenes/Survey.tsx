import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {Formula} from '../components/gene';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.survey;
const {su1, su2, su3, su4, su5} = t.cue;

export const Survey: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">调查人群中的遗传病</Header>
		<Def at={su1.from} style={{left: 90, right: 90, top: 165}} fontSize={32}>
			选择群体中<Hl>发病率较高的单基因遗传病</Hl>（红绿色盲、白化病、高度近视等）
		</Def>
		<Cards
			top={280}
			height={220}
			fontSize={33}
			titleSize={40}
			items={[
				{title: '调查发病率', color: C.orange, at: su2.from, body: <>在<Hl c={C.orange}>人群中随机抽样</Hl>，群体足够大</>},
				{title: '调查遗传方式', color: C.green, at: su3.from, body: <>在<Hl c={C.green}>患者家系</Hl>中调查，绘制系谱图</>},
			]}
		/>
		<Formula at={su4.from} style={{left: 90, top: 530}} fontSize={36} color={C.brown}>
			发病率 ＝ 患病人数 ÷ 被调查人数 × 100%
		</Formula>
		<Tip at={su5.from} top={660} label="解题方法" fontSize={36}>
			<Hl>发病率在人群，遗传方式在家系</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

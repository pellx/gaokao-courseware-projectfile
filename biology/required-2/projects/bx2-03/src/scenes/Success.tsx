import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.success;
const {su1, su2, su3, su4, su5} = t.cue;

export const Success: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">孟德尔获得成功的原因</Header>
		<Cards
			top={190}
			height={360}
			fontSize={32}
			titleSize={42}
			items={[
				{title: '① 选材', color: C.red, at: su1.from, body: <>正确选用<Hl>豌豆</Hl>作实验材料</>, note: '自花传粉、闭花受粉、性状易区分'},
				{title: '② 由简到繁', color: C.orange, at: su2.from, body: <>先研究<Hl c={C.orange}>一对</Hl>，再研究多对相对性状</>},
				{title: '③ 统计', color: C.green, at: su3.from, body: <>对结果进行<Hl c={C.green}>统计学分析</Hl></>, note: '发现 3∶1、9∶3∶3∶1'},
				{title: '④ 程序', color: C.brown, at: su4.from, body: <>科学设计实验程序：<Hl c={C.brown}>假说—演绎法</Hl></>},
			]}
		/>
		<Tip at={su5.from} top={610} label="易错" fontSize={34}>
			孟德尔当时<Hl>并不知道基因和染色体</Hl>，他提出的是“遗传因子”
		</Tip>
		<Narration t={t} />
	</Scene>
);

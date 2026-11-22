import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.apply;
const {ap1, ap2, ap3, ap4, ap5} = t.cue;

export const Apply: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">核移植技术的应用</Header>
		<Cards
			top={180}
			height={380}
			titleSize={36}
			fontSize={29}
			gap={22}
			items={[
				{title: '畜牧业', color: C.orange, at: ap1.from, body: <><Hl c={C.orange}>加速家畜遗传改良</Hl><br />促进优良畜群繁育</>},
				{title: '医药卫生', color: C.red, at: ap2.from, body: <>转基因克隆动物作<Hl>生物反应器</Hl>，生产医用蛋白<br />提供异种移植的器官</>},
				{title: '治疗性克隆', color: C.red, at: ap3.from, body: <>病人体细胞核移植 → <Hl>胚胎干细胞</Hl> → 分化成所需细胞、组织</>},
				{title: '保护濒危物种', color: C.green, at: ap4.from, body: <>增加存活数量<br />体细胞克隆猴<Hl c={C.green}>“中中”“华华”</Hl></>},
			]}
		/>
		<Tip at={ap5.from} top={620} label="易错">
			核移植技术还不成熟：<Hl>成功率非常低</Hl>，克隆动物存在健康问题
		</Tip>
		<Narration t={t} />
	</Scene>
);

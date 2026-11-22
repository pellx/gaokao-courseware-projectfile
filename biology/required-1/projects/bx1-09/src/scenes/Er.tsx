import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.er;
const {er1, er2, er3, er4} = t.cue;

export const Er: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">内质网与高尔基体（单层膜）</Header>
		<Cards
			top={170}
			height={260}
			fontSize={32}
			titleSize={44}
			items={[
				{
					title: '内质网',
					color: C.orange,
					at: er1.from,
					body: <>蛋白质等大分子的<Hl c={C.orange}>合成、加工场所和运输通道</Hl></>,
					note: <>粗面内质网：附着核糖体<br />光面内质网：合成脂质</>,
				},
				{
					title: '高尔基体',
					color: C.red,
					at: er3.from,
					body: <>对蛋白质进行<Hl>加工、分类和包装</Hl>（“车间”及“发送站”）</>,
				},
			]}
		/>
		<Tip at={er4.from} top={480} label="易错">
			高尔基体：植物细胞中与<Hl>细胞壁的形成</Hl>有关，动物细胞中与<Hl>分泌物的形成</Hl>有关
		</Tip>
		<Narration t={t} />
	</Scene>
);

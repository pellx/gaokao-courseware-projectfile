import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.traps;
const {tp1, tp2, tp3, tp4} = t.cue;

export const Traps: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">易错辨析</Header>
		<Rows
			style={{left: 90, right: 90, top: 175}}
			fontSize={32}
			gap={20}
			items={[
				{at: tp1.from, color: C.red, children: <>线粒体<Hl>不能直接分解葡萄糖</Hl>，进入线粒体的是丙酮酸</>},
				{at: tp2.from, color: C.orange, children: <>原核生物<Hl c={C.orange}>无线粒体</Hl>，有的也能有氧呼吸（醋酸菌、蓝细菌）</>},
				{at: tp3.from, color: C.brown, children: <>哺乳动物<Hl c={C.brown}>成熟红细胞</Hl>无线粒体，只进行无氧呼吸</>},
			]}
		/>
		<Tip at={tp4.from} top={560} label="解题方法">
			能否有氧呼吸：看有没有<Hl>与有氧呼吸有关的酶</Hl>，不能只看有没有线粒体
		</Tip>
		<Narration t={t} />
	</Scene>
);

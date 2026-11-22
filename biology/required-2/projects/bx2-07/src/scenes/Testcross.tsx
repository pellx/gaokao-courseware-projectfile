import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.testcross;
const {tc1, tc3, tc4} = t.cue;

export const Testcross: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">测交验证</Header>
		<Cards
			top={185}
			height={400}
			fontSize={32}
			titleSize={38}
			items={[
				{
					title: <>① F<sub>1</sub> 红眼雌 × 白眼雄</>,
					color: C.orange,
					at: tc1.from,
					body: (
						<>
							{chem('X^[W]X^[w] × X^[w]Y')}
							<br />
							红♀∶白♀∶红♂∶白♂ ＝ 1∶1∶1∶1
						</>
					),
					note: <>常染色体遗传也是 1∶1∶1∶1 → <Hl>无法区分</Hl></>,
				},
				{
					title: '② 白眼雌 × 红眼雄',
					color: C.red,
					at: tc3.from,
					body: (
						<>
							{chem('X^[w]X^[w] × X^[W]Y')}
							<br />
							<Hl>雌全红眼，雄全白眼</Hl>
						</>
					),
					note: <>性状与性别相关联 → <Hl>证明基因在 X 上</Hl></>,
				},
			]}
		/>
		<Tip at={tc4.from} top={640} label="解题方法" fontSize={34}>
			判断基因在 X 上还是常染色体上：选<Hl>隐性雌性 × 显性雄性</Hl>，看子代性状是否与性别相关联
		</Tip>
		<Narration t={t} />
	</Scene>
);

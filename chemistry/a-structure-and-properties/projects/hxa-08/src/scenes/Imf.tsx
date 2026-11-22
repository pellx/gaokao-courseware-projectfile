import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Items} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.imf;
const {im1, im2, im3, im4} = t.cue;

export const Imf: React.FC = () => (
	<Board
		t={t}
		tag="考点七"
		title="分子间作用力初识"
		gap={26}
		callout={{label: '易错', at: im4.from, text: <>分子间作用力、氢键<Hl>都不是化学键</Hl>；{chem('H2O')} 比 {chem('H2S')} 稳定，是因为 <Hl>O—H 键更牢固</Hl></>}}
	>
		<Big at={im1.from} size={38}>
			分子之间：比化学键<Hl>弱得多</Hl>的作用 —— 分子间作用力（范德华力）
		</Big>
		<Items
			size={34}
			gap={18}
			items={[
				{at: im2.from, node: <>影响<Hl c={C.orange}>熔点、沸点</Hl>：组成结构相似，相对分子质量越大，熔沸点越高</>},
				{at: im2.from + 50, node: <>{chem('F2 < Cl2 < Br2 < I2')}（熔沸点升高）</>},
				{at: im3.from, node: <>{chem('H2O')}、{chem('NH3')}、{chem('HF')} 分子间还有<Hl>氢键</Hl> → 沸点反常地高</>},
			]}
		/>
	</Board>
);

import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Board} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {ec} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.group;
const {gr1, gr2, gr3, gr4, gr4b, gr5} = t.cue;

export const Group: React.FC = () => (
	<Board
		t={t}
		tag="考点三"
		title="族与价层电子排布"
		callout={{label: '易错', at: gr5.from, text: <>ⅠB、ⅡB 只看 <Hl>ns 电子数</Hl>：Cu 是ⅠB，不是“ⅪB”</>}}
		overlay={
			<AnimeBeat k="sisters" from={gr4b.from} to={gr4b.to}>
				同族元素 = <span style={{color: C.red}}>一家姐妹</span>{'\n'}价层电子排布相同{'\n'}性质相似
			</AnimeBeat>
		}
	>
		<Table
			head={['族', '怎么定族序数', '例子']}
			cols="1.2fr 2.6fr 2.4fr"
			at={gr1.from}
			fontSize={32}
			rowHeight={76}
			rows={[
				{cells: [<Hl>主族 A</Hl>, '价层电子数（最外层电子数）', <>S {ec('3s2 3p4')} → 6 → ⅥA</>], at: gr1.from},
				{cells: [<Hl c={C.orange}>ⅢB～ⅦB</Hl>, '(n−1)d 电子数 + ns 电子数', <>Mn {ec('3d5 4s2')} → 7 → ⅦB</>], at: gr2.from},
				{cells: [<Hl>第Ⅷ族</Hl>, '(n−1)d + ns = 8、9、10', <>Fe、Co、Ni</>], at: gr3.from, key: true},
				{cells: [<Hl c={C.green}>ⅠB、ⅡB</Hl>, <>只看 <Hl c={C.green}>ns 电子数</Hl></>, <>Cu {ec('3d10 4s1')} → ⅠB；Zn → ⅡB</>], at: gr4.from},
			]}
			focus
		/>
	</Board>
);

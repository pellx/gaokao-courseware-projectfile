import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ferment;
const {fe1, fe2, fe3, fe4, fe5} = t.cue;

export const Ferment: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">发酵与传统发酵技术</Header>
		<Def at={fe1.from} fontSize={30} style={{left: 90, width: 820, top: 170}}>
			<Hl>发酵</Hl>：利用<Hl c={C.orange}>微生物</Hl>，在适宜条件下，将原料通过微生物的<Hl c={C.orange}>代谢</Hl>转化为人类所需产物的过程
		</Def>
		<Def at={fe2.from} fontSize={30} color={C.red} soft={C.redSoft} style={{left: 960, right: 90, top: 170}}>
			<Hl>传统发酵技术</Hl>：直接利用原材料中<Hl c={C.orange}>天然存在的微生物</Hl>，或前一次发酵保存的面团、卤汁中的微生物
		</Def>
		<div style={{position: 'absolute', left: 90, right: 90, top: 430}}>
			<Table
				head={['比较项目', '传统发酵技术', '发酵工程（第3节）']}
				cols="1fr 1.6fr 1.6fr"
				at={fe3.from}
				fontSize={30}
				rowHeight={64}
				focus
				rows={[
					{cells: ['发酵方式', '固体、半固体发酵为主', '液体发酵（发酵罐）'], at: fe3.from},
					{cells: ['生产规模', '家庭式、作坊式', '工业化、大规模'], at: fe3.from + 15},
					{cells: ['菌种', <Hl>天然混合菌种</Hl>, '选育的优良单一菌种'], at: fe4.from, key: true},
					{cells: ['产品品质', '不够稳定', '稳定'], at: fe4.from + 20, key: true},
				]}
			/>
		</div>
		<Tip at={fe5.from} top={760} label="易错">
			传统发酵用的是<Hl>天然的混合菌种</Hl>，不是经过选育的单一菌种
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.select;
const {se1, se2, se3, se4, se5} = t.cue;

export const Select: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">选择培养基</Header>
		<Def at={se1.from} fontSize={32} style={{left: 90, right: 90, top: 165}}>
			<Hl>选择培养基</Hl>：<Hl c={C.green}>允许特定种类的微生物生长</Hl>，同时<Hl>抑制或阻止其他种类微生物生长</Hl>
		</Def>
		<div style={{position: 'absolute', left: 90, right: 90, top: 300}}>
			<Table
				head={['培养基的设计', '筛选出的微生物', '原理']}
				cols="1.3fr 1.2fr 1.6fr"
				at={se2.from}
				fontSize={31}
				rowHeight={84}
				rows={[
					{cells: [<>以<Hl>尿素</Hl>为唯一氮源</>, '分解尿素的细菌', '只有它能利用尿素中的氮'], at: se2.from},
					{cells: [<>加入<Hl>青霉素</Hl></>, '酵母菌、霉菌等真菌', '青霉素抑制细菌'], at: se3.from},
					{cells: [<><Hl>不加</Hl>氮源</>, '固氮微生物', '只有它能利用空气中的氮气'], at: se4.from},
				]}
			/>
		</div>
		<Tip at={se5.from} top={680} label="解题方法">
			抓住目的菌<Hl>独有的能力</Hl>：把相应物质设为<Hl>唯一碳源或唯一氮源</Hl>，或加入只抑制杂菌的物质
		</Tip>
		<Narration t={t} />
	</Scene>
);

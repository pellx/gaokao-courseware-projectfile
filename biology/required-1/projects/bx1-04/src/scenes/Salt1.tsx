import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.salt1;
const {sa1, sa2, sa3, sa4} = t.cue;

export const Salt1: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">无机盐：组成复杂化合物</Header>
		<Def at={sa1.from} style={{left: 90, right: 90, top: 165}} fontSize={34}>
			细胞中大多数无机盐以<Hl>离子</Hl>的形式存在
		</Def>
		<Appear at={sa2.from} style={{position: 'absolute', left: 90, right: 90, top: 280}}>
			<Table
				at={sa2.from}
				cols="200px 1fr 1fr"
				fontSize={31}
				rowHeight={70}
				head={['元素', '组成的化合物', '缺乏时']}
				rows={[
					{at: sa2.from, cells: [<Hl c={C.green}>Mg</Hl>, '叶绿素', <Hl>叶片发黄</Hl>]},
					{at: sa2.from + 60, cells: [<Hl>Fe</Hl>, '血红素（血红蛋白）', <Hl>缺铁性贫血</Hl>]},
					{at: sa3.from, cells: [<Hl c={C.orange}>I</Hl>, '甲状腺激素', <Hl>地方性甲状腺肿</Hl>]},
					{at: sa3.from + 50, cells: [<Hl c={C.brown}>P</Hl>, '磷脂、核酸、ATP 等', '影响膜结构和遗传物质的合成']},
				]}
			/>
		</Appear>
		<Tip at={sa4.from} top={680} label="解题方法">
			先说它组成了<Hl>哪种化合物</Hl>，再推缺乏的后果
		</Tip>
		<Narration t={t} />
	</Scene>
);

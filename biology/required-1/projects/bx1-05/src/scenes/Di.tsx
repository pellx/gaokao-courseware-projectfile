import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.di;
const {di1, di2, di3, di4} = t.cue;

export const Di: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">二糖：水解成单糖才能被吸收</Header>
		<Appear at={di1.from} style={{position: 'absolute', left: 90, top: 155, fontSize: 32, fontWeight: 700, color: C.muted}}>
			两分子单糖脱水缩合而成
		</Appear>
		<Appear at={di2.from} style={{position: 'absolute', left: 90, right: 90, top: 215}}>
			<Table
				at={di2.from}
				cols="220px 220px 1fr 260px"
				fontSize={32}
				rowHeight={80}
				head={['二糖', '分布', '水解产物', '还原糖？']}
				rows={[
					{at: di2.from, cells: [<Hl>蔗糖</Hl>, '植物细胞', <>葡萄糖 ＋ <Hl c={C.orange}>果糖</Hl></>, <Hl>不是</Hl>]},
					{at: di2.from + 60, cells: ['麦芽糖', '植物细胞', <>葡萄糖 ＋ 葡萄糖</>, <Hl c={C.green}>是</Hl>]},
					{at: di3.from, cells: ['乳糖', '动物细胞', <>葡萄糖 ＋ <Hl c={C.orange}>半乳糖</Hl></>, <Hl c={C.green}>是</Hl>]},
				]}
			/>
		</Appear>
		<Tip at={di4.from} top={600} label="易错">
			<Hl>蔗糖不是还原糖</Hl>，麦芽糖、乳糖是；三种二糖的水解产物都含<Hl c={C.orange}>葡萄糖</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

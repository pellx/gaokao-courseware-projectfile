import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.essence;
const {es1, es3, es4} = t.cue;

const yes = <Hl c={C.green}>✓ 表达</Hl>;
const no = <span style={{color: C.muted}}>不表达</span>;

export const Essence: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">细胞分化的实质：基因的选择性表达</Header>
		<Def at={es1.from} style={{left: 90, right: 90, top: 165}} fontSize={33} color={C.red} soft={C.redSoft}>
			遗传物质<Hl>相同</Hl>，表达的基因不同 → mRNA 和蛋白质<Hl>不完全相同</Hl>
		</Def>
		<Appear at={es3.from} style={{position: 'absolute', left: 90, right: 90, top: 300}}>
			<Table
				at={es3.from}
				cols="320px 1fr 1fr 1fr"
				fontSize={31}
				rowHeight={72}
				head={['基因', '红细胞', '胰岛 B 细胞', '肌细胞']}
				rows={[
					{at: es3.from, cells: ['血红蛋白基因', yes, no, no]},
					{at: es3.from + 30, cells: ['胰岛素基因', no, yes, no]},
					{at: es3.from + 60, cells: ['呼吸酶基因', yes, yes, yes]},
				]}
			/>
		</Appear>
		<Tip at={es4.from} top={630} label="解题方法">
			判断是否分化：看是否合成了<Hl>特定的蛋白质</Hl>（血红蛋白、胰岛素、抗体等）
		</Tip>
		<Narration t={t} />
	</Scene>
);

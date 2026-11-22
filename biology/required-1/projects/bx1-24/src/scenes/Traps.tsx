import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.traps;
const {tr1, tr2, tr3, tr4} = t.cue;

export const Traps: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">易错辨析：怎样才算体现全能性</Header>
		<Def at={tr1.from} style={{left: 90, right: 90, top: 160}} fontSize={33} color={C.red} soft={C.redSoft}>
			起点：<Hl>单个细胞或细胞核</Hl>；终点：<Hl>完整个体或各种细胞</Hl>
		</Def>
		<Appear at={tr2.from} style={{position: 'absolute', left: 90, right: 90, top: 290}}>
			<Table
				at={tr2.from}
				cols="1fr 300px"
				fontSize={31}
				rowHeight={72}
				head={['实例', '体现全能性？']}
				rows={[
					{at: tr2.from, cells: ['种子萌发长成植株（种子是器官）', <Hl>否</Hl>]},
					{at: tr3.from, cells: ['造血干细胞形成各种血细胞', <Hl>否</Hl>]},
					{at: tr4.from, cells: ['植物组织培养得到完整植株', <Hl c={C.green}>是</Hl>]},
					{at: tr4.from + 30, cells: ['核移植培育出克隆动物', <Hl c={C.green}>是（细胞核）</Hl>]},
				]}
			/>
		</Appear>
		<Tip at={tr4.from + 60} top={690} label="解题方法">
			看<Hl>“起点是不是细胞，终点是不是个体”</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

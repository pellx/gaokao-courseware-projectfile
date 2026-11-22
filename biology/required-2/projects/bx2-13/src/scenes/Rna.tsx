import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.rna;
const {rn1, rn2, rn3, rn4} = t.cue;

export const Rna: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">RNA 的组成和结构（与 DNA 比较）</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Table
				at={rn1.from}
				cols="260px 1fr 1fr"
				fontSize={33}
				rowHeight={86}
				head={['比较项目', 'DNA', 'RNA']}
				rows={[
					{at: rn1.from, cells: ['基本单位', '脱氧核苷酸', <Hl>核糖核苷酸</Hl>]},
					{at: rn1.from + 50, cells: ['五碳糖', '脱氧核糖', <Hl>核糖</Hl>]},
					{at: rn2.from, cells: ['特有碱基', 'T', <Hl>U</Hl>]},
					{at: rn3.from, cells: ['结构', '双链（双螺旋）', <Hl c={C.orange}>一般为单链，较短，能通过核孔</Hl>]},
				]}
			/>
		</div>
		<Tip at={rn4.from} top={640} label="易错" fontSize={34}>
			tRNA 的单链折叠后<Hl>局部形成碱基对</Hl>，所以 tRNA 中也有<Hl>氢键</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

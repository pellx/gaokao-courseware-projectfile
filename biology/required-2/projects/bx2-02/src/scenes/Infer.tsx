import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.infer;
const {if1, if2, if3, if4} = t.cue;

export const Infer: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">由子代推亲代</Header>
		<div style={{position: 'absolute', left: 240, right: 240, top: 175}}>
			<Table
				at={if1.from}
				cols="1fr 1fr"
				fontSize={38}
				rowHeight={92}
				head={['子代表现', '亲代基因型']}
				rows={[
					{at: if1.from, cells: ['显性∶隐性 = 3∶1', <Hl>Aa × Aa</Hl>]},
					{at: if2.from, cells: ['显性∶隐性 = 1∶1', <Hl>Aa × aa</Hl>]},
					{at: if3.from, cells: ['全为显性', <Hl c={C.orange}>AA × 任意</Hl>]},
					{at: if3.from + 50, cells: ['全为隐性', <Hl c={C.green}>aa × aa</Hl>]},
				]}
			/>
		</div>
		<Tip at={if4.from} top={680} label="解题方法" fontSize={34}>
			<Hl>隐性纯合突破法</Hl>：子代出现 aa → 双亲<Hl>各提供一个 a</Hl>，先填确定的 a，再推其余
		</Tip>
		<Narration t={t} />
	</Scene>
);

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
		<Header tag="考点三">由子代比例推亲代</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 175}}>
			<Table
				at={if1.from}
				cols="300px 380px 1fr"
				fontSize={34}
				rowHeight={100}
				head={['子代比例', '拆分', '亲本基因型']}
				rows={[
					{at: if1.from, cells: ['9∶3∶3∶1', '(3∶1)(3∶1)', <Hl>AaBb × AaBb</Hl>]},
					{at: if2.from, cells: ['1∶1∶1∶1', '(1∶1)(1∶1)', <><Hl c={C.orange}>AaBb × aabb</Hl> 或 <Hl c={C.orange}>Aabb × aaBb</Hl></>]},
					{at: if3.from, cells: ['3∶3∶1∶1', '(3∶1)(1∶1)', <><Hl c={C.orange}>AaBb × Aabb</Hl> 或 <Hl c={C.orange}>AaBb × aaBb</Hl></>]},
				]}
			/>
		</div>
		<Tip at={if4.from} top={640} label="解题方法" fontSize={34}>
			把子代比例<Hl>拆成每对性状的比例</Hl>，分别反推再组合；注意可能有<Hl>两种答案</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

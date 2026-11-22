import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.quality;
const {qu1, qu2, qu3, qu4} = t.cue;

export const Quality: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">改良品质、提高生长速度</Header>
		<div style={{position: 'absolute', left: 90, width: 1080, top: 190}}>
			<Table
				head={['转基因生物', '转入的基因', '获得的性状']}
				cols="1fr 1.2fr 1.4fr"
				at={qu1.from}
				fontSize={30}
				rowHeight={100}
				rows={[
					{cells: ['黄金大米', '合成 β-胡萝卜素的相关基因', <Hl c={C.orange}>胚乳富含 β-胡萝卜素</Hl>], at: qu1.from},
					{cells: ['奶牛', <Hl>肠乳糖酶基因</Hl>, '乳汁中乳糖含量大大降低'], at: qu2.from},
					{cells: ['鲤鱼等', <Hl>外源生长激素基因</Hl>, <Hl c={C.green}>生长速度明显加快</Hl>], at: qu3.from},
				]}
			/>
		</div>
		<Appear at={qu1.from} style={{position: 'absolute', left: 1230, top: 180, width: 600, height: 440}}>
			<Photo src="images/rice.jpg" caption="黄金大米（右）与普通大米" style={{width: '100%', height: '100%'}} pos="65% center" />
		</Appear>
		<Tip at={qu4.from} top={690} label="解题方法">
			先看转入的是什么基因、想得到什么<Hl>性状</Hl>，就能判断属于哪一类应用
		</Tip>
		<Narration t={t} />
	</Scene>
);

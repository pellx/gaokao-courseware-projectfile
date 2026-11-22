import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Bullets, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.sign;
const {si1, si2, si3, si4} = t.cue;

export const Sign: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">受精的标志</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190}}>
			<Table
				head={['比较项目', '受精的标志', '受精完成的标志']}
				cols="1fr 2fr 1.6fr"
				at={si1.from}
				fontSize={32}
				rowHeight={100}
				rows={[
					{cells: ['观察到', <>透明带和卵细胞膜之间有<Hl>两个极体</Hl>，或<Hl>雌、雄原核</Hl></>, <Hl c={C.green}>雌、雄原核融合</Hl>], at: si1.from},
				]}
			/>
		</div>
		<Bullets
			style={{left: 90, right: 90, top: 400}}
			fontSize={31}
			gap={22}
			items={[
				{at: si2.from, children: <>第一极体：减数分裂Ⅰ排出；<Hl c={C.orange}>第二极体</Hl>：受精时（减数分裂Ⅱ）排出</>},
				{at: si3.from, color: C.green, children: <>雌、雄原核融合形成合子 → 受精过程<Hl c={C.green}>完成</Hl></>},
			]}
		/>
		<Tip at={si4.from} top={620} label="易错">
			区分“<Hl>受精的标志</Hl>”（两个极体或雌雄原核）和“<Hl c={C.green}>受精完成的标志</Hl>”（雌雄原核融合）
		</Tip>
		<Narration t={t} />
	</Scene>
);

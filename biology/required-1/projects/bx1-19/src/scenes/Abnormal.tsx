import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.abnormal;
const {ab1, ab2, ab3, ab4} = t.cue;

export const Abnormal: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">异常结果分析</Header>
		<Appear at={ab1.from} style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				at={ab1.from}
				cols="400px 1fr"
				fontSize={31}
				rowHeight={92}
				head={['异常现象', '可能原因']}
				rows={[
					{at: ab1.from, cells: ['色素带颜色都很浅', '研磨不充分、未加 SiO2、无水乙醇过多、画线次数少']},
					{at: ab2.from, cells: [<Hl>叶绿素带很窄或没有</Hl>, <><Hl>未加 CaCO<sub>3</sub></Hl>（叶绿素被破坏），或选用了发黄的叶片</>]},
					{at: ab3.from, cells: [<Hl>没有色素带</Hl>, <><Hl>层析液没及滤液细线</Hl>；或用水代替了无水乙醇</>]},
				]}
			/>
		</Appear>
		<Tip at={ab4.from} top={600} label="解题方法">
			对照每一步的作用：<Hl>缺了哪一步，就出现哪种异常</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

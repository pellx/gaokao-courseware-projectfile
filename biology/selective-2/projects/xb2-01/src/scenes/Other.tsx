import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.other;
const {ot1, ot2, ot3, ot4, ot5} = t.cue;

const b = (s: string) => <span style={{color: C.orange, fontWeight: 800}}>{s}</span>;

export const Other: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">其他调查方法</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 185}}>
			<Table
				head={['方法', '适用对象', '实例']}
				cols="1.3fr 1.6fr 1.4fr"
				at={ot1.from}
				fontSize={32}
				rowHeight={88}
				rows={[
					{cells: [b('逐个计数'), '分布范围较小、个体较大', '某山坡上的珙桐'], at: ot1.from},
					{cells: [b('黑光灯诱捕'), '有趋光性的昆虫', '农田中的趋光性害虫'], at: ot2.from},
					{cells: [b('红外触发相机'), '大型、警觉性强、难以接近', '东北豹、东北虎'], at: ot3.from},
					{cells: [b('粪便 / 声音计数'), '难以直接观察的动物', '粪便中的DNA、鸟类鸣叫'], at: ot4.from},
				]}
			/>
		</div>
		<Appear at={ot5.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="解题方法" style={{fontSize: 31}}>
				先问<Hl c={C.orange}>动不动、跑多远</Hl>（样方法 / 标记重捕法），再看<Hl c={C.orange}>有无趋光性、是否难以接近</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

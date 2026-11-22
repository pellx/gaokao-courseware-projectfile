import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.compare;
const {cm1, cm2, cm3, cm4, cm5} = t.cue;

const c = (s: string, color: string) => <span style={{color, fontWeight: 800}}>{s}</span>;

export const Compare: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">三类免疫失调的比较</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 185}}>
			<Table
				head={['类型', '免疫功能', '针对对象', '属于哪种功能异常', '实例']}
				cols="1.2fr 0.9fr 1fr 1.3fr 1.6fr"
				at={cm1.from}
				fontSize={30}
				rowHeight={84}
				rows={[
					{cells: [c('过敏反应', C.orange), c('过强', C.orange), '外来过敏原', '免疫防御', '花粉过敏、青霉素过敏'], at: cm2.from},
					{cells: [c('自身免疫病', C.red), c('过强', C.red), '自身成分', '免疫自稳', '风湿性心脏病、类风湿关节炎'], at: cm3.from},
					{cells: [c('免疫缺陷病', C.green), c('不足', C.green), '—', '防御、监视低下', '艾滋病'], at: cm4.from},
				]}
			/>
		</div>
		<Appear at={cm5.from} style={{position: 'absolute', left: 90, right: 90, top: 600}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				第一步：功能<Hl>过强</Hl>还是<Hl c={C.green}>不足</Hl>？第二步：针对<Hl c={C.orange}>外来物质</Hl>还是<Hl>自身成分</Hl>？
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

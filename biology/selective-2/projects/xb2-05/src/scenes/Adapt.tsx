import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.adapt;
const {ad1, ad2, ad3, ad4} = t.cue;

const b = (s: string, c: string) => <span style={{color: c, fontWeight: 800}}>{s}</span>;

export const Adapt: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">群落中的生物适应环境</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 180}}>
			<Table
				head={['群落', '环境', '结构', '生物的适应特点']}
				cols="0.8fr 1fr 1.3fr 2.6fr"
				at={ad1.from}
				fontSize={29}
				rowHeight={80}
				rows={[
					{cells: [b('荒漠', C.orange), '极度干旱', '非常简单', '肉质茎、针状叶、根系发达；角质鳞片、排尿酸盐'], at: ad2.from},
					{cells: [b('草原', C.gold), '半干旱', '相对简单', '旱生草本，叶窄有茸毛或蜡质层；动物挖洞、奔跑'], at: ad2.from + 50},
					{cells: [b('森林', C.green), '湿润', '复杂、相对稳定', '分层明显；树栖攀缘动物多；林下阴生植物'], at: ad2.from + 100},
				]}
			/>
		</div>
		<Appear at={ad3.from} style={{position: 'absolute', left: 90, right: 90, top: 520, fontSize: 31, fontWeight: 800}}>
			生物都适应所处的非生物环境，但不同群落中生物适应环境的<Hl>方式不尽相同</Hl>
		</Appear>
		<Appear at={ad4.from} style={{position: 'absolute', left: 90, right: 90, top: 610}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				答题三步：<Hl c={C.orange}>环境特点</Hl> → 对应的<Hl c={C.orange}>结构特征</Hl> → 它的<Hl c={C.orange}>作用</Hl>（结构与功能相适应、生物与环境相适应）
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

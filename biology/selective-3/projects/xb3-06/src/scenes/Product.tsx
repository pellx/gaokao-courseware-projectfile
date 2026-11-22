import React from 'react';
import {Appear, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Flow, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.product;
const {pd1, pd2, pd3, pd4, pd5} = t.cue;

export const Product: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">细胞产物的工厂化生产</Header>
		<Def at={pd1.from} fontSize={31} style={{left: 90, width: 1060, top: 170}}>
			<Hl>次生代谢物</Hl>：酚类、萜类、含氮化合物等；<Hl c={C.orange}>不是植物基本生命活动所必需的</Hl>，含量往往很低
		</Def>
		<Appear at={pd3.from} style={{position: 'absolute', left: 1210, right: 90, top: 170}}>
			<Card style={{fontSize: 30, fontWeight: 700, lineHeight: 1.6, textAlign: 'center'}}>
				<div style={{fontSize: 44, fontWeight: 900, color: C.red}}>紫杉醇</div>
				<div>来自红豆杉</div>
				<div style={{color: C.muted}}>抗肿瘤药物</div>
			</Card>
		</Appear>
		<Flow
			style={{left: 90, top: 380}}
			fontSize={34}
			rows={[
				[
					{label: '外植体', at: pd4.from},
					{label: '愈伤组织', color: C.orange, at: pd4.from + 15},
					{label: '细胞培养（增殖）', color: C.red, at: pd4.from + 30},
					{label: '提取细胞产物', color: C.green, at: pd4.from + 45},
				],
			]}
		/>
		<Appear at={pd4.from + 45} style={{position: 'absolute', left: 90, top: 500, fontSize: 31, fontWeight: 800}}>
			优点：<Hl c={C.green}>不占用耕地</Hl>，几乎不受季节、天气等限制
		</Appear>
		<Tip at={pd5.from} top={650} label="易错">
			细胞产物的生产<Hl>不需要培养成完整植株</Hl>，培养到细胞（愈伤组织）阶段就可以提取
		</Tip>
		<Narration t={t} />
	</Scene>
);

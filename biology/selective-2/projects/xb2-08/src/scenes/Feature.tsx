import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.feature;
const {fe1, fe2, fe3, fe4, fe5} = t.cue;

const Col: React.FC<{title: string; what: React.ReactNode; why: React.ReactNode; whyAt: number}> = ({title, what, why, whyAt}) => (
	<div style={{border: `5px solid ${C.red}`, borderRadius: 24, padding: '22px 28px', height: 390, boxSizing: 'border-box', background: '#fff'}}>
		<div style={{fontSize: 44, fontWeight: 900, color: C.red}}>{title}</div>
		<div style={{fontSize: 30, fontWeight: 700, marginTop: 14, lineHeight: 1.55}}>{what}</div>
		<Appear at={whyAt}>
			<div style={{fontSize: 29, fontWeight: 700, marginTop: 16, lineHeight: 1.55, background: C.orangeSoft, borderRadius: 14, padding: '12px 18px'}}>
				<Hl c={C.orange}>原因</Hl>：{why}
			</div>
		</Appear>
	</div>
);

export const Feature: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">能量流动的特点</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 180, display: 'flex', gap: 30}}>
			<Appear at={fe1.from} style={{flex: 1}}>
				<Col title="单向流动" what={<>只能由低营养级流向高营养级，不可逆转，不能循环</>} why={<>捕食关系是自然选择的结果，<Hl>不可逆转</Hl>；散失的<Hl>热能</Hl>不能再利用</>} whyAt={fe2.from} />
			</Appear>
			<Appear at={fe3.from} style={{flex: 1}}>
				<Col title="逐级递减" what={<>相邻两个营养级之间的传递效率约 <Hl c={C.green}>10%～20%</Hl></>} why={<>每个营养级都有<Hl>呼吸散失</Hl>，一部分流向<Hl>分解者</Hl>，一部分<Hl>未被利用</Hl></>} whyAt={fe4.from} />
			</Appear>
		</div>
		<Appear at={fe5.from} style={{position: 'absolute', left: 90, right: 90, top: 620}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				传递效率是<Hl>相邻两个营养级</Hl>之间的，不是两个个体之间的：一只狼吃一只兔，可能获得兔的大部分能量
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

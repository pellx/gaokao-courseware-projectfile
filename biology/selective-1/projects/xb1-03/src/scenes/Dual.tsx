import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.dual;
const {du1, du2, du3, du4, du5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const o = (s: string) => <span style={{color: C.orange, fontWeight: 800}}>{s}</span>;
const g = (s: string) => <span style={{color: C.green, fontWeight: 800}}>{s}</span>;

export const Dual: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">交感神经与副交感神经</Header>
		<div style={{position: 'absolute', left: 90, top: 170, width: 900}}>
			<Appear at={du1.from} style={{fontSize: 34, fontWeight: 800, marginBottom: 14}}>
				对同一器官的作用通常<Hl>相反</Hl>
			</Appear>
			<Table
				head={['器官', '交感神经', '副交感神经']}
				cols="1fr 1fr 1fr"
				at={du2.from - 10}
				fontSize={36}
				rowHeight={84}
				rows={[
					{cells: ['瞳孔', o('扩张'), g('收缩')], at: at(du2.from, du2.to, 0.05)},
					{cells: ['心跳', o('加快'), g('减慢')], at: at(du2.from, du2.to, 0.15)},
					{cells: ['支气管', o('扩张'), g('收缩')], at: at(du2.from, du2.to, 0.25)},
					{cells: ['胃肠蠕动', o('减弱'), g('加强')], at: at(du2.from, du2.to, 0.38)},
				]}
			/>
		</div>
		<div style={{position: 'absolute', left: 1060, right: 90, top: 170}}>
			<Appear at={du3.from}>
				<div style={{border: `4px solid ${C.orange}`, background: C.orangeSoft, borderRadius: 20, padding: '14px 24px', fontSize: 32, lineHeight: 1.5}}>
					<b>兴奋状态</b> → <Hl c={C.orange}>交感神经</Hl>活动占优势
				</div>
			</Appear>
			<Appear at={at(du3.from, du3.to, 0.4)} style={{marginTop: 16}}>
				<div style={{border: `4px solid ${C.green}`, background: C.greenSoft, borderRadius: 20, padding: '14px 24px', fontSize: 32, lineHeight: 1.5}}>
					<b>安静状态</b> → <Hl c={C.green}>副交感神经</Hl>活动占优势
					<br />
					<span style={{fontSize: 28, color: C.muted}}>有利于食物的消化和营养物质的吸收</span>
				</div>
			</Appear>
			<Appear at={du4.from} style={{marginTop: 22}}>
				<div style={{background: C.panel, border: `3px solid ${C.line}`, borderRadius: 20, padding: '14px 24px', fontSize: 32, lineHeight: 1.5}}>
					<b style={{color: C.red}}>意义：</b>使机体对外界刺激作出<Hl>更精确的反应</Hl>，更好地适应环境变化
				</div>
			</Appear>
		</div>
		<Appear at={du5.from} style={{position: 'absolute', left: 90, right: 90, top: 680}}>
			<Callout label="考法" style={{fontSize: 32}}>
				考试紧张：心跳加快、食欲下降 → <Hl c={C.orange}>交感神经</Hl>占优势；饭后安静休息、利于消化 → <Hl c={C.green}>副交感神经</Hl>占优势
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

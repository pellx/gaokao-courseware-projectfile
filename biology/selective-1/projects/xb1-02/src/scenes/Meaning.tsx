import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.meaning;
const {mn1, mn2, mn3, mn4, mn5, mn6, mn7} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const LEVELS = [
	{name: '分子水平', color: C.red, items: ['基因表达的稳态', '激素分泌的稳态', '酶活性的稳态'], at: mn4.from},
	{name: '细胞水平', color: C.orange, items: ['细胞分裂和分化的稳态'], at: mn5.from},
	{name: '器官水平', color: C.green, items: ['心脏活动的稳态（血压、心率）', '消化腺分泌消化液的稳态'], at: at(mn5.from, mn5.to, 0.4)},
	{name: '群体水平', color: C.brown, items: ['种群数量变化的稳态', '生态系统结构和功能的稳态'], at: mn6.from},
];

export const Meaning: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六、七">稳态的意义与稳态概念的发展</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 165}}>
			<Appear at={mn1.from}>
				<div style={{border: `4px solid ${C.red}`, borderRadius: 20, padding: '14px 26px', background: '#fff'}}>
					<div style={{fontSize: 36, fontWeight: 900}}>
						意义：内环境稳态是机体进行<Hl>正常生命活动的必要条件</Hl>
					</div>
					<div style={{display: 'flex', gap: 24, marginTop: 12, fontSize: 30}}>
						<Appear at={mn2.from} dy={10}>
							<span style={{background: C.orangeSoft, borderRadius: 12, padding: '6px 16px', display: 'inline-block'}}>
								酶的活性 ← <b>适宜的温度和 pH</b>
							</span>
						</Appear>
						<Appear at={at(mn2.from, mn2.to, 0.5)} dy={10}>
							<span style={{background: C.orangeSoft, borderRadius: 12, padding: '6px 16px', display: 'inline-block'}}>
								细胞呼吸供能 ← <b>血糖和 <Chem>O2</Chem> 稳定供应</b>
							</span>
						</Appear>
					</div>
				</div>
			</Appear>
			<Appear at={mn3.from} style={{marginTop: 28, fontSize: 34, fontWeight: 800}}>
				稳态概念的发展：生命系统的<Hl c={C.orange}>各个层次</Hl>都普遍存在稳态
			</Appear>
			<div style={{display: 'flex', gap: 20, marginTop: 16}}>
				{LEVELS.map((l) => (
					<Appear key={l.name} at={l.at} style={{flex: 1}}>
						<div style={{borderTop: `12px solid ${l.color}`, background: C.panel, borderRadius: 18, padding: '14px 20px', height: 230, boxSizing: 'border-box'}}>
							<div style={{fontSize: 36, fontWeight: 900, color: l.color}}>{l.name}</div>
							{l.items.map((s) => (
								<div key={s} style={{fontSize: 28, lineHeight: 1.45, marginTop: 8}}>{s}</div>
							))}
						</div>
					</Appear>
				))}
			</div>
			<Appear at={mn7.from} style={{marginTop: 24}}>
				<Callout label="考法" style={{fontSize: 32}}>
					“稳态只存在于人体内环境中”——<Hl>错</Hl>。
				</Callout>
			</Appear>
		</div>
		<Narration t={t} />
	</Scene>
);

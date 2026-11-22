import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.change;
const {cg1, cg2, cg3, cg4, cg5} = t.cue;

const ROWS: [string, string, React.ReactNode, number][] = [
	['第一营养级减少', C.red, <>其他生物都因食物减少而<Hl>减少</Hl></>, cg2.from],
	['天敌减少', C.orange, <>被捕食者先<Hl c={C.green}>增加</Hl>，后因种内竞争<Hl>减少</Hl>，最后趋于稳定</>, cg3.from],
	['中间营养级减少（如蛇）', C.green, <>鹰更多捕食鼠，营养级<Hl c={C.green}>降低</Hl>、获能更多 → 鹰<Hl c={C.green}>增加</Hl></>, cg4.from],
];

export const Change: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">食物网中生物数量变化的分析</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 180, display: 'flex', flexDirection: 'column', gap: 22}}>
			{ROWS.map(([head, color, body, at]) => (
				<Appear key={head} at={Math.max(at, cg1.from)} dx={-20} dy={0}>
					<div style={{display: 'flex', alignItems: 'center', gap: 26, border: `5px solid ${color}`, borderRadius: 22, padding: '18px 26px', background: '#fff'}}>
						<div style={{fontSize: 34, fontWeight: 900, color, width: 420, flexShrink: 0}}>{head}</div>
						<div style={{fontSize: 31, fontWeight: 700, lineHeight: 1.5}}>{body}</div>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={cg5.from} style={{position: 'absolute', left: 90, right: 90, top: 620}}>
			<Callout label="解题方法" style={{fontSize: 30}}>
				先看处在<Hl c={C.orange}>哪个营养级</Hl>；中间环节变化时，抓住<Hl>食物来源是否多样</Hl>和<Hl>营养级越低获能越多</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

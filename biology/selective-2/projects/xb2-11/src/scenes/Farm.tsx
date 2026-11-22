import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.farm;
const {fm1, fm2, fm3, fm4} = t.cue;

const Item: React.FC<{at: number; children: React.ReactNode}> = ({at, children}) => (
	<Appear at={at} dx={-16} dy={0}>
		<div style={{fontSize: 30, fontWeight: 700, lineHeight: 1.5, marginTop: 16}}>· {children}</div>
	</Appear>
);

export const Farm: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">信息传递在农业生产中的应用</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190, display: 'flex', gap: 30}}>
			<Appear at={fm1.from} style={{flex: 1}}>
				<div style={{border: `5px solid ${C.green}`, borderRadius: 24, padding: '22px 30px', height: 340, boxSizing: 'border-box'}}>
					<div style={{fontSize: 40, fontWeight: 900, color: C.green}}>提高农畜产品产量</div>
					<Item at={fm2.from}>模拟动物信息吸引传粉动物 → 提高<Hl c={C.green}>结实率</Hl></Item>
					<Item at={fm2.from + 40}><Hl c={C.green}>延长光照</Hl> → 提高家禽产蛋率</Item>
				</div>
			</Appear>
			<Appear at={fm3.from} style={{flex: 1}}>
				<div style={{border: `5px solid ${C.orange}`, borderRadius: 24, padding: '22px 30px', height: 340, boxSizing: 'border-box'}}>
					<div style={{fontSize: 40, fontWeight: 900, color: C.orange}}>控制有害动物</div>
					<Item at={fm3.from + 10}><Hl c={C.orange}>性引诱剂</Hl>诱捕害虫</Item>
					<Item at={fm3.from + 40}>干扰交配 → <Hl>出生率降低</Hl></Item>
				</div>
			</Appear>
		</div>
		<Appear at={fm4.from} style={{position: 'absolute', left: 90, right: 90, top: 600}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31}}>
				利用信息素防治害虫属于<Hl c={C.green}>生物防治</Hl>，不是化学防治；对环境<Hl c={C.green}>无污染</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

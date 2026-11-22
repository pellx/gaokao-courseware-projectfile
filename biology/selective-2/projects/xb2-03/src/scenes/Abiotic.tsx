import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.abiotic;
const {ab1, ab2, ab3, ab4, ab5} = t.cue;

const CARDS: [string, string, React.ReactNode, number][] = [
	['阳光', C.orange, <>林下植物的种群密度，主要取决于林冠层的郁闭度（<Hl>林下光照强度</Hl>）</>, ab2.from],
	['温度', C.red, <>寒冷季节到来，蚊类等昆虫一般会<Hl>全部死亡</Hl></>, ab3.from],
	['水', C.green, <>干旱使许多植物死亡率升高；但<Hl>干旱</Hl>是东亚飞蝗<Hl>爆发</Hl>的主要原因</>, ab4.from],
];

export const Abiotic: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">非生物因素</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190, display: 'flex', gap: 28}}>
			{CARDS.map(([title, color, note, from]) => (
				<Appear key={title} at={Math.max(from, ab1.from)} style={{flex: 1}}>
					<div style={{border: `5px solid ${color}`, borderRadius: 24, background: '#fff', height: 330, boxSizing: 'border-box', padding: '26px 30px'}}>
						<div style={{fontSize: 48, fontWeight: 900, color}}>{title}</div>
						<div style={{fontSize: 31, fontWeight: 700, marginTop: 20, lineHeight: 1.55}}>{note}</div>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={ab5.from} style={{position: 'absolute', left: 90, right: 90, top: 600}}>
			<Callout label="考法" style={{fontSize: 31}}>
				影响往往是<Hl>综合性</Hl>的：春夏种群迅速增长，除气温升高外，<Hl c={C.orange}>日照延长、降水增多</Hl>也是重要原因
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.density;
const {dn1, dn2, dn3, dn4, dn5} = t.cue;

const Col: React.FC<{title: string; color: string; soft: string; lines: React.ReactNode[]}> = ({title, color, soft, lines}) => (
	<div style={{border: `5px solid ${color}`, borderRadius: 24, background: soft, padding: '22px 30px', height: 300, boxSizing: 'border-box'}}>
		<div style={{fontSize: 42, fontWeight: 900, color}}>{title}</div>
		{lines.map((l, i) => (
			<div key={i} style={{fontSize: 30, fontWeight: 700, marginTop: 18, lineHeight: 1.45}}>
				{l}
			</div>
		))}
	</div>
);

export const Density: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">密度制约因素与非密度制约因素</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190, display: 'flex', gap: 30}}>
			<Appear at={Math.max(dn1.from, dn2.from)} style={{flex: 1}}>
				<Col title="密度制约因素" color={C.red} soft={C.redSoft} lines={[<>作用强度与种群密度<Hl>相关</Hl></>, <>食物、天敌等<Hl>生物因素</Hl></>]} />
			</Appear>
			<Appear at={dn3.from} style={{flex: 1}}>
				<Col title="非密度制约因素" color={C.green} soft={C.greenSoft} lines={[<>作用强度与种群密度<Hl c={C.green}>无关</Hl></>, <>气温、干旱等<Hl c={C.green}>气候因素</Hl>；地震、火灾等<Hl c={C.green}>自然灾害</Hl></>]} />
			</Appear>
		</div>
		<Appear at={dn4.from} style={{position: 'absolute', left: 90, right: 90, top: 520, fontSize: 31, fontWeight: 700}}>
			例：一场寒潮，不论种群密度大小，冻死的<Hl c={C.orange}>比例差不多</Hl> → 非密度制约因素
		</Appear>
		<Appear at={dn5.from} style={{position: 'absolute', left: 90, right: 90, top: 610}}>
			<Callout label="解题方法" style={{fontSize: 31}}>
				问一句：“种群越密，它的影响越大吗？”是 → <Hl>密度制约</Hl>；不是 → <Hl c={C.green}>非密度制约</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

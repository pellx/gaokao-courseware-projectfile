import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.physics;
const {ph2, ph3, ph4, ph5, ph6, ph7} = t.cue;

const Card: React.FC<{title: string; big: React.ReactNode; color: string; at: number; children?: React.ReactNode}> = ({title, big, color, at, children}) => (
	<Appear at={at} style={{flex: 1}}>
		<div style={{borderTop: `12px solid ${color}`, background: C.panel, borderRadius: 20, padding: '18px 26px', height: 330, boxSizing: 'border-box'}}>
			<div style={{fontSize: 40, fontWeight: 900, color}}>{title}</div>
			<div style={{fontSize: 34, fontWeight: 800, marginTop: 10, lineHeight: 1.4}}>{big}</div>
			<div style={{fontSize: 29, lineHeight: 1.55, marginTop: 10}}>{children}</div>
		</div>
	</Appear>
);

export const Physics: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六～八">内环境的理化性质</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 170, display: 'flex', gap: 26}}>
			<Card title="渗透压" big="取决于溶质微粒的数目" color={C.red} at={ph2.from}>
				<Appear at={ph3.from} dy={10}>
					血浆：主要与<Hl c={C.orange}>无机盐、蛋白质</Hl>有关
					<br />
					细胞外液：90%以上来自 <Hl c={C.orange}><Chem>Na^+</Chem>、<Chem>Cl^-</Chem></Hl>
				</Appear>
			</Card>
			<Card title="酸碱度" big={<span style={{fontSize: 52, color: C.orange}}>pH 7.35～7.45</span>} color={C.orange} at={ph4.from}>
				缓冲物质：<Hl c={C.green}><Chem>HCO3^-</Chem>、<Chem>H2CO3</Chem></Hl> 等
			</Card>
			<Card title="温度" big={<span style={{fontSize: 52, color: C.green}}>37 ℃左右</span>} color={C.green} at={ph5.from}>
				人体细胞外液的温度
			</Card>
		</div>
		<Appear at={ph6.from} style={{position: 'absolute', left: 90, right: 90, top: 530}}>
			<Callout label="考法" style={{fontSize: 33}}>
				输液用 <Hl>0.9% <Chem>NaCl</Chem></Hl> 溶液：与血浆<Hl>等渗</Hl>，维持细胞的正常形态。
			</Callout>
		</Appear>
		<Appear at={ph7.from} style={{position: 'absolute', left: 90, right: 90, top: 670}}>
			<Callout label="考法" style={{fontSize: 33}}>
				乳酸 + <Chem>NaHCO3</Chem> → 乳酸钠 + <Chem>H2CO3</Chem>；<Chem>H2CO3</Chem> → <Chem>CO2</Chem> + <Chem>H2O</Chem>，<Chem>CO2</Chem> 经呼吸排出
				<br />
				→ 血浆 pH <Hl>不会明显下降</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.confuse;
const {cf1, cf2, cf3, cf4, cf5, cf6} = t.cue;

const b = (s: string, c: string) => <span style={{color: c, fontWeight: 900}}>{s}</span>;
const list = (items: string[]) => items.map((s, i) => <React.Fragment key={s}>{i > 0 && '、'}{chem(s)}</React.Fragment>);

export const Confuse: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">“四同”与等电子微粒</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 160}}>
			<Table
				head={['概念', '研究对象', '判断要点', '实例']}
				cols="1.1fr 0.9fr 2fr 1.6fr"
				at={cf1.from}
				fontSize={28}
				rowHeight={60}
				rows={[
					{cells: [b('同位素', C.red), '原子', '质子数同，中子数不同', '氕、氘、氚'], at: cf1.from},
					{cells: [b('同素异形体', C.orange), '单质', '同种元素形成的不同单质', 'O2 与 O3；金刚石与石墨'], at: cf1.from + 40},
					{cells: [b('同分异构体', C.green), '化合物', '分子式相同，结构不同', '正丁烷与异丁烷'], at: cf2.from},
					{cells: [b('同系物', C.brown), '有机物', '结构相似，相差若干个 CH2', '甲烷与乙烷'], at: cf2.from + 60},
				]}
			/>
		</div>
		<div style={{position: 'absolute', left: 90, right: 90, top: 488, display: 'flex', gap: 20, fontSize: 28, fontWeight: 700, lineHeight: 1.6}}>
			<Appear at={cf3.from} style={{flex: 1}}>
				<div style={{background: C.redSoft, borderRadius: 18, padding: '12px 22px', height: 196, boxSizing: 'border-box'}}>
					<div style={{fontSize: 30, fontWeight: 900, color: C.red}}>10 电子微粒</div>
					<div>分子：{list(['Ne', 'HF', 'H2O', 'NH3', 'CH4'])}</div>
					<Appear at={cf4.from} dy={0}>
						<div>离子：{list(['Na^+', 'Mg^2+', 'Al^3+', 'F^-', 'O^2-', 'OH^-', 'NH4^+', 'H3O^+'])}</div>
					</Appear>
				</div>
			</Appear>
			<Appear at={cf5.from} style={{flex: 1}}>
				<div style={{background: C.orangeSoft, borderRadius: 18, padding: '12px 22px', height: 196, boxSizing: 'border-box'}}>
					<div style={{fontSize: 30, fontWeight: 900, color: C.orange}}>18 电子微粒</div>
					<div>分子：{list(['Ar', 'HCl', 'H2S', 'PH3', 'SiH4', 'H2O2'])}</div>
					<div>离子：{list(['K^+', 'Ca^2+', 'Cl^-', 'S^2-', 'HS^-'])}</div>
				</div>
			</Appear>
		</div>
		<Appear at={cf6.from} style={{position: 'absolute', left: 90, right: 90, top: 718}}>
			<Callout label="解题方法" color={C.orange} soft={C.orangeSoft} style={{fontSize: 31, padding: '16px 26px'}}>
				四同先看<Hl>研究对象</Hl>（原子、单质、化合物、有机物）；电子数用<Hl>质子数加减电荷</Hl>来算
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Appear, Callout, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';
import {Nuclide as N} from './parts';
import {AnimeBeat} from '../components/anime';

const t = T.nuclide;
const {nc1, nc2, nc3, nc4, nc4b, nc4c, nc5} = t.cue;

const H = [
	{a: '1', name: '氕', alias: '', n: 0, at: nc3.from},
	{a: '2', name: '氘', alias: '也写作 D', n: 1, at: nc4.from},
	{a: '3', name: '氚', alias: '也写作 T', n: 2, at: nc4.from + 25},
];

export const NuclideScene: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">核素与同位素</Header>
		<Appear at={nc1.from} style={{position: 'absolute', left: 90, top: 170, width: 660}}>
			<Card style={{display: 'flex', alignItems: 'center', gap: 36, padding: '22px 32px'}}>
				<N a="A" z="Z" x="X" size={130} aColor={C.red} zColor={C.orange} />
				<div style={{fontSize: 30, fontWeight: 700, lineHeight: 1.7}}>
					<div>
						左上 <Hl>A</Hl>：质量数
					</div>
					<div>
						左下 <Hl c={C.orange}>Z</Hl>：质子数
					</div>
					<div style={{color: C.muted}}>中子数 N = A − Z</div>
				</div>
			</Card>
		</Appear>
		<Appear at={nc2.from} style={{position: 'absolute', left: 90, top: 440, width: 660, fontSize: 29, fontWeight: 600, lineHeight: 1.55}}>
			<div style={{background: C.panel, border: `3px solid ${C.line}`, borderRadius: 18, padding: '14px 24px'}}>
				<div>
					<Hl>核素</Hl>：一定质子数和中子数的<b>一种原子</b>
				</div>
				<div>
					<Hl c={C.orange}>元素</Hl>：质子数相同的<b>一类原子</b>的总称
				</div>
			</div>
		</Appear>
		<Appear at={nc3.from} style={{position: 'absolute', left: 800, right: 90, top: 170, fontSize: 32, fontWeight: 800}}>
			氢元素的三种核素，互为<Hl>同位素</Hl>（质子数同、中子数不同）
		</Appear>
		<div style={{position: 'absolute', left: 800, right: 90, top: 230, display: 'flex', gap: 20}}>
			{H.map((h) => (
				<Appear key={h.name} at={h.at} style={{flex: 1}}>
					<Card style={{textAlign: 'center', padding: '16px 10px'}}>
						<N a={h.a} z="1" x="H" size={70} aColor={C.red} />
						<div style={{fontSize: 36, fontWeight: 900, marginTop: 6}}>{h.name}</div>
						<div style={{fontSize: 27, fontWeight: 700, color: C.brown}}>{h.n} 个中子</div>
						<div style={{fontSize: 24, fontWeight: 600, color: C.muted, height: 32}}>{h.alias}</div>
					</Card>
				</Appear>
			))}
		</div>
		<Appear at={nc5.from} style={{position: 'absolute', left: 800, right: 90, top: 520}}>
			<div style={{display: 'flex', alignItems: 'center', gap: 18, background: C.orangeSoft, borderRadius: 18, padding: '14px 22px', fontSize: 28, fontWeight: 800}}>
				<N a="1" z="1" x="H" size={44} />
				<N a="2" z="1" x="H" size={44} />
				<N a="14" z="6" x="C" size={44} />
				<N a="14" z="7" x="N" size={44} />
				<N a="16" z="8" x="O" size={44} />
				<span style={{marginLeft: 8}}>
					→ <Hl>4</Hl> 种元素、<Hl>5</Hl> 种核素
				</span>
			</div>
		</Appear>
		<Appear at={nc5.from} style={{position: 'absolute', left: 90, right: 90, top: 718}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31, padding: '16px 26px'}}>
				同位素说的是<Hl>原子</Hl>：H<sub style={{fontSize: '0.66em'}}>2</sub>、D<sub style={{fontSize: '0.66em'}}>2</sub>、T<sub style={{fontSize: '0.66em'}}>2</sub> 不是同位素，它们都是氢气（同一种物质）
			</Callout>
		</Appear>
		<AnimeBeat k="three" from={nc4b.from} to={nc4c.to}>
			同一个人 → <span style={{color: C.red}}>同一元素</span>
			{'\n'}（质子数相同）
			{'\n'}各不相同 → <span style={{color: C.orange}}>不同核素</span>
			{'\n'}（中子数不同）
			{'\n'}合起来 → 互为<span style={{color: C.red}}>同位素</span>
		</AnimeBeat>
		<Narration t={t} />
	</Scene>
);

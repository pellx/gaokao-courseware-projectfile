import React from 'react';
import {Appear, Callout, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';
import {Nuclide as N} from './parts';

const t = T.isotope;
const {is1, is2, is3, is4, is5} = t.cue;

export const Isotope: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">同位素的性质和应用</Header>
		<Appear at={is1.from} style={{position: 'absolute', left: 90, top: 170, width: 700}}>
			<div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
				<div style={{background: C.greenSoft, borderRadius: 18, padding: '16px 24px'}}>
					<div style={{fontSize: 34, fontWeight: 900}}>
						化学性质：<Hl c={C.green}>几乎完全相同</Hl>
					</div>
					<div style={{fontSize: 26, fontWeight: 600, color: C.muted}}>核外电子排布相同</div>
				</div>
				<div style={{background: C.orangeSoft, borderRadius: 18, padding: '16px 24px'}}>
					<div style={{fontSize: 34, fontWeight: 900}}>
						物理性质：<Hl c={C.orange}>有差异</Hl>
					</div>
					<div style={{fontSize: 26, fontWeight: 600, color: C.muted}}>质量数不同（如密度、放射性）</div>
				</div>
			</div>
		</Appear>
		<div style={{position: 'absolute', left: 850, right: 90, top: 170}}>
			<Table
				head={['同位素', '用途']}
				cols="1.1fr 1.6fr"
				at={is2.from}
				fontSize={30}
				rowHeight={80}
				rows={[
					{cells: [<N a="14" z="6" x="C" size={44} color={C.red} />, '测定文物年代'], at: is2.from},
					{cells: [<span style={{display: 'flex', gap: 14}}><N a="2" z="1" x="H" size={44} color={C.red} /><N a="3" z="1" x="H" size={44} color={C.red} /></span>, '制造氢弹'], at: is2.from + 25},
					{cells: ['放射性同位素', '疾病的诊断和治疗'], at: is2.from + 50},
				]}
			/>
		</div>
		<Appear at={is3.from} style={{position: 'absolute', left: 90, right: 90, top: 470}}>
			<Card style={{padding: '18px 30px'}}>
				<div style={{fontSize: 30, fontWeight: 700}}>
					元素的相对原子质量 = 各核素按所占<Hl c={C.orange}>百分比</Hl>算出的<Hl>平均值</Hl>
				</div>
				<Appear at={is4.from} dy={10}>
					<div style={{display: 'flex', alignItems: 'center', gap: 16, fontSize: 36, fontWeight: 900, marginTop: 12}}>
						<span>Cl：</span>
						<N a="35" z="17" x="Cl" size={44} />
						<span style={{color: C.muted, fontSize: 28}}>约 75%</span>
						<N a="37" z="17" x="Cl" size={44} />
						<span style={{color: C.muted, fontSize: 28}}>约 25%</span>
						<span style={{marginLeft: 12}}>
							35 × 0.75 + 37 × 0.25 ≈ <Hl>35.5</Hl>
						</span>
					</div>
				</Appear>
			</Card>
		</Appear>
		<Appear at={is5.from} style={{position: 'absolute', left: 90, right: 90, top: 718}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31, padding: '16px 26px'}}>
				质量数对<Hl c={C.orange}>某一种核素</Hl>而言，是整数；相对原子质量对<Hl>元素</Hl>而言，是平均值
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Big, Board} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.parts;
const {pa1, pa2, pa3, pa4} = t.cue;

export const Parts: React.FC = () => (
	<Board
		t={t}
		tag="考点二"
		title="配合物的组成"
		callout={{label: '考法', at: pa4.from, text: <>1 mol 配合物与足量 {chem('AgNO3')} 生成几 mol AgCl → 判断<Hl>内界外界</Hl></>}}
	>
		<Appear at={pa1.from}>
			<div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: 30}}>
				<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
					<div style={{border: `5px solid ${C.red}`, borderRadius: 18, padding: '4px 22px', fontSize: 76, fontWeight: 900, whiteSpace: 'nowrap'}}>
						[<span style={{color: C.red}}>Cu</span>
						<span style={{color: C.orange}}>
							(<span style={{color: C.green}}>N</span>H<sub style={{fontSize: '0.5em'}}>3</sub>)
						</span>
						<sub style={{fontSize: '0.5em', color: C.brown}}>4</sub>]
					</div>
					<div style={{fontSize: 28, fontWeight: 900, color: C.red, marginTop: 6}}>内界（配离子）</div>
				</div>
				<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
					<div style={{fontSize: 76, fontWeight: 900, padding: '4px 0'}}>{chem('SO4')}</div>
					<div style={{fontSize: 28, fontWeight: 900, color: C.muted, marginTop: 6}}>外界</div>
				</div>
			</div>
		</Appear>
		<Appear at={pa2.from}>
			<div style={{display: 'flex', justifyContent: 'center', gap: 18, fontSize: 30, fontWeight: 800}}>
				<span style={{background: C.redSoft, color: C.red, borderRadius: 12, padding: '6px 16px'}}>中心离子 {chem('Cu^2+')}</span>
				<span style={{background: C.orangeSoft, color: C.orange, borderRadius: 12, padding: '6px 16px'}}>配体 {chem('NH3')}</span>
				<span style={{background: C.greenSoft, color: C.green, borderRadius: 12, padding: '6px 16px'}}>配位原子 N</span>
				<span style={{background: C.panel, color: C.brown, borderRadius: 12, padding: '6px 16px'}}>配位数 4</span>
			</div>
		</Appear>
		<Big at={pa3.from} size={32}>
			{chem('[Co(NH3)5Cl]Cl2')}：内界的 Cl 不电离，只有<Hl>外界 2 个 {chem('Cl^-')}</Hl> 与 {chem('Ag^+')} 沉淀 → 2 mol AgCl
		</Big>
	</Board>
);

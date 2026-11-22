import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {CellFlow} from '../components/CellFlow';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.process;
const {cp1, cp2, cp3, cp4, cp5, cp6} = t.cue;
const NEVER = 1e9;

export const Process: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">细胞免疫的过程</Header>
		<Appear at={cp1.from} style={{position: 'absolute', left: 90, top: 170, fontSize: 30, fontWeight: 800}}>
			病原体进入细胞内 → 抗体进不去 → 靠<Hl>细胞免疫</Hl>
		</Appear>
		<div style={{position: 'absolute', left: 90, top: 200}}>
			<CellFlow at={[cp2.from, cp3.from, cp3.from + 40, cp4.from, cp5.from, NEVER, NEVER]} />
		</div>
		<Appear at={cp6.from} style={{position: 'absolute', left: 90, right: 90, top: 772}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 29, padding: '10px 24px'}}>
				活化需要<Hl>靶细胞的信号</Hl>和<Hl c={C.green}>细胞因子</Hl>；靶细胞裂解死亡属于<Hl>细胞凋亡</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

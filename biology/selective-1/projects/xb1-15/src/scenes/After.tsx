import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {CellFlow} from '../components/CellFlow';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.after;
const {af2, af3, af4} = t.cue;
const NEVER = 1e9;

export const After: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">靶细胞裂解之后</Header>
		<div style={{position: 'absolute', left: 90, top: 190}}>
			<CellFlow at={[0, 0, 0, 0, 0, af2.from, NEVER]} />
		</div>
		<Appear at={af3.from} style={{position: 'absolute', left: 1330, top: 560, width: 500, fontSize: 28, fontWeight: 800, color: C.green, lineHeight: 1.5}}>
			最终清除病原体：抗体 + 其他免疫细胞
		</Appear>
		<Appear at={af4.from} style={{position: 'absolute', left: 90, right: 90, top: 765}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30, padding: '12px 24px'}}>
				细胞毒性T细胞只使靶细胞<Hl>裂解</Hl>，<Hl>不能直接消灭</Hl>病原体
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

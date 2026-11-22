import React from 'react';
import {Hl} from '../components/ui';
import {Board, Mark} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.fescn;
const {fe1, fe2, fe3, fe4} = t.cue;

export const FeScn: React.FC = () => (
	<Board
		t={t}
		tag="考点五"
		title="其他配合物实验"
		gap={20}
		callout={{label: '易错', at: fe4.from, text: <>配离子性质≠中心离子性质：{chem('K3[Fe(CN)6]')} 含铁，却<Hl>检验不出 {chem('Fe^3+')}</Hl></>}}
	>
		<Mark ok at={fe1.from} size={34}>{chem('Fe^3+')} + {chem('SCN^-')} → <Hl>红色</Hl>（检验 {chem('Fe^3+')}）</Mark>
		<Mark ok at={fe2.from} size={34}>AgCl 溶于氨水 → <Hl c={C.orange}>{chem('[Ag(NH3)2]^+')}</Hl></Mark>
		<Mark ok={false} at={fe3.from} size={34}>{chem('K3[Fe(CN)6]')} + KSCN → <Hl>不变红</Hl>：{chem('Fe^3+')} 被 {chem('CN^-')} 牢牢配位</Mark>
	</Board>
);

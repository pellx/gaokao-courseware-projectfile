import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.traps;
const {tp1, tp2, tp3, tp4} = t.cue;

export const Traps: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">易错辨析</Header>
		<Rows
			style={{left: 90, right: 90, top: 175}}
			fontSize={33}
			gap={20}
			items={[
				{at: tp1.from, color: C.red, children: <>分泌蛋白以<Hl>胞吐</Hl>方式出细胞，穿过 <Hl>0 层</Hl>膜</>},
				{at: tp2.from, color: C.orange, children: <>囊泡与膜融合 → 体现生物膜的<Hl c={C.orange}>流动性</Hl>；生物膜可以相互转化</>},
				{at: tp3.from, color: C.green, children: <>内质网膜与核膜、细胞膜<Hl c={C.green}>直接相连</Hl>；与高尔基体膜通过囊泡间接联系</>},
			]}
		/>
		<Tip at={tp4.from} top={560} label="解题方法">
			问“穿过几层膜”：囊泡运输、胞吞、胞吐都是 <Hl>0 层</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

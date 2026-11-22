import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Mark} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {ec} from '../components/sci';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.period;
const {pe1, pe1b, pe2, pe3} = t.cue;

export const Period: React.FC = () => (
	<Board
		t={t}
		tag="考点二"
		title="周期与能层"
		gap={26}
		callout={{label: '易错', at: pe3.from, text: <>看<Hl>最高能层</Hl>，不看排布式里最后写的能级：Fe 的 3d 写在 4s 前，仍是第四周期</>}}
		overlay={
			<AnimeBeat k="stairs" from={pe1b.from} to={pe1b.to}>
				周期 = <span style={{color: C.red}}>楼层</span>{'\n'}最外面的电子{'\n'}排到第几能层？
			</AnimeBeat>
		}
	>
		<Big at={pe1.from} size={44} color={C.red} soft={C.redSoft}>
			周期序数 = <Hl>能层数</Hl>（最高能层序数）
		</Big>
		<Mark ok at={pe2.from} size={34}>Fe：{ec('[Ar]3d6 4s2', {'4s': C.red})} → 最高能层 4 → <Hl>第四周期</Hl></Mark>
		<Mark ok at={pe2.from + 40} size={34}>Br：{ec('[Ar]3d10 4s2 4p5', {'4s': C.red, '4p': C.red})} → <Hl>第四周期</Hl></Mark>
	</Board>
);

import React from 'react';
import {Hl} from '../components/ui';
import {Board, Mark} from '../components/board';
import {chem} from '../components/chem';
import {T} from '../timeline';

const t = T.trap;
const {tp1, tp2, tp3, tp4, tp5} = t.cue;

export const Trap: React.FC = () => (
	<Board
		t={t}
		tag="考点六"
		title="易错辨析"
		gap={18}
		callout={{label: '易错', at: tp5.from, text: <>问“<Hl>VSEPR 模型</Hl>”还是“<Hl>空间结构</Hl>”，答案可能不同——审题圈出来</>}}
	>
		<Mark ok={false} at={tp1.from}>{chem('H2O')} 的 VSEPR 模型是 V 形 —— 是<Hl>四面体形</Hl></Mark>
		<Mark ok={false} at={tp2.from}>{chem('NH3')} 是平面三角形 —— <Hl>三角锥形</Hl>（N 上 1 对孤电子对）</Mark>
		<Mark ok={false} at={tp3.from}>{chem('SO3')} 与 {chem('SO3^2-')} 结构相同 —— {chem('SO3^2-')} 是<Hl>三角锥形</Hl></Mark>
		<Mark ok={false} at={tp4.from}>{chem('CH4')} 与 {chem('P4')} 键角都是 109°28′ —— {chem('P4')} 是 <Hl>60°</Hl></Mark>
	</Board>
);

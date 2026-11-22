import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Items} from '../components/board';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ionic;
const {io1, io2, io3, io4} = t.cue;

export const Ionic: React.FC = () => (
	<Board
		t={t}
		tag="考点二"
		title="离子晶体的性质"
		gap={24}
		callout={{label: '易错', at: io4.from, text: <>能导电不一定是离子晶体（金属、石墨）；判断看<Hl>熔融状态能否导电</Hl></>}}
	>
		<Big at={io1.from} size={38}>阴、阳离子通过<Hl>离子键</Hl>结合</Big>
		<Items
			size={34}
			gap={18}
			items={[
				{at: io2.from, node: <>硬度较大、熔点较高、难挥发</>},
				{at: io2.from + 40, node: <>固体<Hl>不导电</Hl>，<Hl>熔融或溶于水</Hl>后导电</>},
				{at: io3.from, node: <>可能含共价键：{chem('NaOH')}（O—H）、{chem('Na2O2')}（O—O）、{chem('NH4Cl')}（N—H）</>},
			]}
		/>
	</Board>
);

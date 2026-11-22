import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Board, Col, Panel, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {chem} from '../components/chem';
import {Geo} from './Geo';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.angle2;
const {a21, a22, a22b, a23, a24, a25} = t.cue;

export const Angle2: React.FC = () => (
	<Board
		t={t}
		tag="考点七"
		title="键角比较（二）：杂化相同"
		callout={{label: '易错', at: a25.from, text: <><Hl>中心</Hl>原子电负性大 → 键角<Hl>大</Hl>；<Hl c={C.orange}>配位</Hl>原子电负性大 → 键角<Hl c={C.orange}>小</Hl></>}}
		overlay={
			<AnimeBeat k="squeeze" from={a22b.from} to={a22b.to}>
				孤电子对一挤进来，{'\n'}成键电子对被挤得更近：{'\n'}<span style={{color: C.red}}>键角变小</span>
			</AnimeBeat>
		}
	>
		<Panel title="① 先比孤电子对数：孤对越多，键角越小" color={C.red} at={a21.from} size={30}>
			<Appear at={a22.from}>
				<Row gap={10} align="center" style={{justifyContent: 'center', fontSize: 40, fontWeight: 800}}>
					<Geo kind="tetra" at={a22.from} center="C" lig="H" size={200} angle="109°28′" />
					<span>&gt;</span>
					<Geo kind="pyramid" at={a22.from} center="N" lig="H" size={200} angle="107°" />
					<span>&gt;</span>
					<Geo kind="bent4" at={a22.from} center="O" lig="H" size={200} angle="105°" />
				</Row>
			</Appear>
		</Panel>
		<Row gap={22}>
			<Col>
				<Panel title="② 中心原子电负性大 → 键角大" color={C.orange} at={a23.from} size={30}>
					<Hl>{chem('NH3 > PH3')}</Hl>（N 比 P 电负性大）
				</Panel>
			</Col>
			<Col>
				<Panel title="③ 配位原子电负性大 → 键角小" color={C.green} at={a24.from} size={30}>
					<Hl>{chem('NH3 > NF3')}</Hl>，{chem('H2O > OF2')}
				</Panel>
			</Col>
		</Row>
	</Board>
);

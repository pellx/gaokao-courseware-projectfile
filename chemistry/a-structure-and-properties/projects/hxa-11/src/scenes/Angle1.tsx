import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Big, Board, Row} from '../components/board';
import {chem} from '../components/chem';
import {Geo} from './Geo';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.angle1;
const {a11, a12, a13, a14} = t.cue;

export const Angle1: React.FC = () => (
	<Board
		t={t}
		tag="考点六"
		title="键角比较（一）：杂化方式不同"
		callout={{label: '解题方法', at: a14.from, text: <>先分别判断<Hl>中心原子的杂化方式</Hl>，不同就直接下结论</>}}
	>
		<Big at={a11.from} size={36}>杂化不同 → 直接比杂化</Big>
		<Big at={a12.from} size={44} color={C.red} soft={C.redSoft}>
			<Hl>sp（180°）&gt; sp<sup>2</sup>（120°）&gt; sp<sup>3</sup>（109°28′）</Hl>
		</Big>
		<Appear at={a13.from}>
			<Row gap={20} align="center" style={{justifyContent: 'center', fontSize: 32, fontWeight: 800}}>
				<Geo kind="linear" at={a13.from} center="C" lig="O" n={[2, 2]} size={200} angle="180°" />
				<span style={{fontSize: 44}}>&gt;</span>
				<Geo kind="trigonal" at={a13.from} center="B" lig="F" size={200} angle="120°" />
				<span style={{fontSize: 44}}>&gt;</span>
				<Geo kind="tetra" at={a13.from} center="C" lig="H" size={200} angle="109°28′" />
				<span style={{marginLeft: 30}}>{chem('SO3')} &gt; {chem('SO4^2-')}</span>
			</Row>
		</Appear>
	</Board>
);

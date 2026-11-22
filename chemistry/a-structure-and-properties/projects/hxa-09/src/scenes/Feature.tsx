import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Board, Col, Panel, Row} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.feature;
const {fe1, fe2, fe2b, fe3, fe4} = t.cue;

export const Feature: React.FC = () => (
	<Board
		t={t}
		tag="考点一"
		title="共价键的特征：饱和性与方向性"
		callout={{label: '易错', at: fe4.from, text: <>s 轨道是球形：<Hl>s-s σ 键没有方向性</Hl>（如 {chem('H2')} 中的 H—H）</>}}
		overlay={
			<AnimeBeat k="hand" from={fe2b.from} to={fe2b.to}>
				饱和性 = <span style={{color: C.red}}>握手会</span>：{'\n'}手就那么几只{'\n'}握满就不能再握
			</AnimeBeat>
		}
	>
		<Row gap={24}>
			<Col>
				<Panel title="饱和性" color={C.red} at={fe1.from} size={32}>
					有几个<Hl>未成对电子</Hl>，一般就形成几个共价键
					<Appear at={fe2.from}>
						<div style={{marginTop: 10}}>{chem('H2')} ✓　{chem('H3')} ✗</div>
						<div>N 有 3 个未成对电子 → {chem('NH3')}</div>
					</Appear>
				</Panel>
			</Col>
			<Col>
				<Panel title="方向性" color={C.orange} at={fe3.from} size={32}>
					沿<Hl c={C.orange}>重叠最大</Hl>的方向成键
					<div style={{marginTop: 10}}>→ 共价分子有一定的<Hl c={C.orange}>空间结构</Hl></div>
				</Panel>
			</Col>
		</Row>
	</Board>
);

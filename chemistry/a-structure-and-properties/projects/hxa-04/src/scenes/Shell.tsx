import React from 'react';
import {Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Board, Col, Row, Rule} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.shell;
const {sh1, sh2, sh3, sh4, sh4b, sh5} = t.cue;
const n = (x: string) => <span>{x}</span>;

export const Shell: React.FC = () => (
	<Board
		t={t}
		tag="考点一"
		title="能层与能级"
		callout={{label: '易错', at: sh5.from, text: <>“2d”“3f”<Hl>不存在</Hl>：能级字母不能超出这一能层的能级数</>}}
		overlay={
			<AnimeBeat k="stairs" from={sh4b.from} to={sh4b.to}>
				能层 = <span style={{color: C.red}}>楼层</span>{'\n'}能级 = 同层的<span style={{color: C.orange}}>台阶</span>{'\n'}越往上，能量越高
			</AnimeBeat>
		}
	>
		<Row gap={30}>
			<Col width={900}>
				<Table
					head={['能层 n', '1', '2', '3', '4']}
					cols="1.4fr 1fr 1.3fr 1.7fr 2.2fr"
					at={sh1.from}
					fontSize={32}
					rowHeight={70}
					rows={[
						{cells: ['符号', 'K', 'L', 'M', 'N'], at: sh1.from},
						{cells: ['能级', '1s', '2s 2p', '3s 3p 3d', '4s 4p 4d 4f'], at: sh2.from},
						{cells: ['能级数', n('1'), n('2'), n('3'), n('4')], at: sh3.from, key: true},
					]}
					focus
				/>
			</Col>
			<Col gap={16}>
				<Rule tag="能层" color={C.red} at={sh1.from}>K L M N O P Q</Rule>
				<Rule tag="能级" color={C.orange} at={sh2.from}>s p d f</Rule>
				<Rule tag="规律一" color={C.red} at={sh3.from}>能级数 = <Hl>能层序数</Hl></Rule>
				<Rule tag="规律二" color={C.green} at={sh4.from}>每层都<Hl c={C.green}>从 s 开始</Hl></Rule>
			</Col>
		</Row>
	</Board>
);

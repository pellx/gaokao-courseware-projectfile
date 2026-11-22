import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Table} from '../components/kit';
import {Board, Col, Row, Rule} from '../components/board';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.alkphys;
const {ap1, ap2, ap3, ap4, ap5} = t.cue;
const n = (x: string) => <span>{x}</span>;

export const AlkPhys: React.FC = () => (
	<Board
		t={t}
		tag="考点四"
		title="碱金属单质的物理性质"
		callout={{label: '易错', at: ap5.from, text: <>“密度从上到下依次增大”是错的（<Hl>K 比 Na 小</Hl>）；碱金属熔沸点<Hl>降低</Hl>，卤素单质是<Hl c={C.orange}>升高</Hl></>}}
	>
		<Row gap={30}>
			<Col width={860}>
				<Table
					head={['单质', '颜色', '密度', '熔点 ℃']}
					cols="0.8fr 1.6fr 1.3fr 1fr"
					at={ap1.from}
					fontSize={30}
					rowHeight={60}
					focus
					rows={[
						{cells: ['Li', '银白色', n('0.534'), n('180.5')], at: ap1.from},
						{cells: ['Na', '银白色', n('0.97'), n('97.81')], at: ap1.from + 6},
						{cells: ['K', '银白色', <Hl>0.86</Hl>, n('63.65')], at: ap3.from, key: true},
						{cells: ['Rb', '银白色', n('1.532'), n('38.89')], at: ap1.from + 18},
						{cells: ['Cs', <Hl c={C.orange}>略带金色光泽</Hl>, n('1.879'), n('28.40')], at: ap1.from + 24},
					]}
				/>
				<Appear at={ap1.from} style={{fontSize: 24, color: C.muted, fontWeight: 600}}>
					密度单位：g/cm<sup>3</sup>（数据取自教材表格）
				</Appear>
			</Col>
			<Col gap={14}>
				<Rule tag="熔沸点" color={C.red} at={ap2.from} size={28}>Li → Cs <Hl>逐渐降低</Hl></Rule>
				<Rule tag="密度" color={C.orange} at={ap3.from} size={28}>总体增大，<Hl>K 比 Na 小</Hl>（反常）</Rule>
				<Rule tag="保存" color={C.green} at={ap4.from} size={28}>Li 封存在<Hl c={C.green}>石蜡</Hl>中；Na、K 保存在<Hl c={C.green}>煤油</Hl>中</Rule>
			</Col>
		</Row>
	</Board>
);

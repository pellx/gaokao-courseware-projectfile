import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Board, Col, Panel, Row} from '../components/board';
import {chem} from '../components/chem';
import {Geo} from './Geo';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.judge;
const {jd1, jd2, jd3, jd4, jd5} = t.cue;

export const Judge: React.FC = () => (
	<Board
		t={t}
		tag="考点五"
		title="判断分子形状的两个要点"
		callout={{label: '考法', at: jd5.from, text: <>选择题给“模型—结构”配对：<Hl>逐一算电子对数</Hl>核对</>}}
	>
		<Row gap={24}>
			<Col>
				<Panel title="① 多重键只算一对" color={C.red} at={jd1.from} size={30}>
					<div style={{display: 'flex', alignItems: 'center', gap: 10}}>
						<Geo kind="trigonal" at={jd2.from} center="C" lig="·" n={[2, 1, 1]} lp={false} size={240} />
						<div>
							HCHO：C 连 3 个原子
							<br />
							孤电子对 0 → <Hl>3 对</Hl>
							<br />
							<Hl>平面三角形</Hl>
						</div>
					</div>
				</Panel>
			</Col>
			<Col>
				<Panel title="② 先确定中心原子" color={C.orange} at={jd3.from} size={30}>
					电负性较小、成键较多的原子
					<div style={{color: C.muted}}>{chem('SO2')} 中的 S，{chem('NO3^-')} 中的 N</div>
					<Appear at={jd4.from} style={{marginTop: 10}}>
						{chem('NO3^-')}：a = 5 + 1 = 6，x = 3，b = 2
						<br />
						孤电子对 0 → <Hl c={C.orange}>平面三角形</Hl>
					</Appear>
				</Panel>
			</Col>
		</Row>
	</Board>
);

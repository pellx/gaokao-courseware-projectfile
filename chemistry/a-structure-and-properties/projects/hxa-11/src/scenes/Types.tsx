import React from 'react';
import {Appear, Hl} from '../components/ui';
import {Board, Col, Row} from '../components/board';
import {chem} from '../components/chem';
import {Geo, Kind} from './Geo';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.types;
const {ty1, ty2, ty3, ty4, ty5} = t.cue;
const TY: {h: React.ReactNode; mix: string; n: string; ang: string; shape: string; ex: string[]; kind: Kind; c: string; at: number}[] = [
	{h: 'sp', mix: '1 s + 1 p', n: '2', ang: '180°', shape: '直线形', ex: ['BeCl2', 'CO2', '乙炔'], kind: 'linear', c: C.red, at: 0},
	{h: <>sp<sup>2</sup></>, mix: '1 s + 2 p', n: '3', ang: '120°', shape: '平面三角形', ex: ['BF3', '乙烯', '苯'], kind: 'trigonal', c: C.orange, at: 1},
	{h: <>sp<sup>3</sup></>, mix: '1 s + 3 p', n: '4', ang: '109°28′', shape: '四面体形', ex: ['CH4', 'NH3', 'H2O'], kind: 'tetra', c: C.green, at: 2},
];

export const Types: React.FC = () => {
	const ats = [ty1.from, ty2.from, ty3.from];
	return (
		<Board
			t={t}
			tag="考点二"
			title={'sp、sp²、sp³ 杂化'}
			callout={{label: '易错', at: ty5.from, text: <>{chem('NH3')}、{chem('H2O')} 也是 <Hl>sp<sup>3</sup></Hl>：孤电子对占了杂化轨道，分子才是三角锥形、V 形</>}}
		>
			<Row gap={18}>
				{TY.map((y, i) => (
					<Col key={i}>
						<Appear at={ats[y.at]}>
							<div style={{background: '#fff', border: `4px solid ${y.c}`, borderRadius: 20, overflow: 'hidden'}}>
								<div style={{background: y.c, color: '#fff', fontSize: 40, fontWeight: 900, padding: '6px 20px'}}>{y.h} 杂化</div>
								<div style={{display: 'flex', alignItems: 'center', padding: '6px 14px', gap: 6}}>
									<Geo kind={y.kind} at={ats[y.at]} center="X" lig="·" lp={false} size={190} cc={y.c} />
									<div style={{fontSize: 27, fontWeight: 700, lineHeight: 1.5}}>
										<div>{y.mix} → <Hl c={y.c}>{y.n} 个</Hl></div>
										<div>夹角 <Hl c={y.c}>{y.ang}</Hl></div>
										<div>{y.shape}</div>
										<div style={{color: C.muted}}>{y.ex.map((e) => chem(e)).reduce<React.ReactNode[]>((a, b, k) => (k ? [...a, '、', b] : [b]), [])}</div>
									</div>
								</div>
							</div>
						</Appear>
					</Col>
				))}
			</Row>
			<Appear at={ty4.from} style={{fontSize: 32, fontWeight: 800, background: C.orangeSoft, borderRadius: 16, padding: '14px 22px'}}>
				sp、sp<sup>2</sup> 剩下<Hl>未杂化的 p 轨道</Hl> → 肩并肩形成 π 键：乙烯 1 个 π，乙炔 2 个 π
			</Appear>
		</Board>
	);
};

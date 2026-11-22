import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Curve, DoseCurve} from '../components/DoseCurve';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.feature;
const {ft1, ft2, ft3, ft4, ft5} = t.cue;

export const Feature: React.FC = () => {
	const curve: Curve = {label: '', color: C.green, x0: 0.05, cross: 0.75, h: 0.85, from: ft1.from, lx: 0.4, ly: 0.95};
	return (
		<Scene duration={t.duration}>
			<Header tag="考点五">低浓度促进，高浓度抑制</Header>
			<div style={{position: 'absolute', left: 60, top: 175}}>
				<DoseCurve
					curves={[curve]}
					regions={ft1.from}
					vlines={[[0.4, '最适浓度', C.orange, ft2.from]]}
					hline={[0.5, ft3.from]}
					dots={[
						[0.4, 0.85, C.orange, ft2.from],
						[0.19, 0.5, C.orange, ft3.from, 'A'],
						[0.61, 0.5, C.orange, ft3.from, 'B'],
						[0.75, 0, C.red, ft4.from, 'C', 44],
						[0.65, 0.37, C.green, ft5.from, '促进减弱', 8, 92],
					]}
				/>
			</div>
			<div style={{position: 'absolute', left: 980, right: 90, top: 200, display: 'flex', flexDirection: 'column', gap: 20, fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
				<Appear at={ft2.from}>最高点 → <Hl c={C.orange}>最适浓度</Hl></Appear>
				<Appear at={ft3.from}>A、B两点：浓度不同，<Hl c={C.orange}>促进效果相同</Hl></Appear>
				<Appear at={ft4.from}>C点：<Hl>既不促进也不抑制</Hl>；C点以后才是<Hl>抑制</Hl></Appear>
			</div>
			<Appear at={ft5.from} style={{position: 'absolute', left: 90, right: 90, top: 680}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30, padding: '12px 24px'}}>
					横轴以上都是<Hl c={C.green}>促进</Hl>：最适浓度右侧下降段只是<Hl c={C.green}>促进作用减弱</Hl>，不是抑制
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};

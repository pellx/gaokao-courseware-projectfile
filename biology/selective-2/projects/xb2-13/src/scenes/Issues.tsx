import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';
import {Problem} from './Problem';

const K = T.climate.cue;
const CARDS: [string, string, string, React.ReactNode, number][] = [
	['原因', C.red, C.redSoft, <>化石燃料大量燃烧、植被破坏 → 大气中 {chem('CO2')} 等<Hl>温室气体</Hl>增多</>, K.cl1.from],
	['危害', C.orange, C.orangeSoft, <>全球变暖：<Hl c={C.orange}>冰川融化、海平面上升</Hl>，极端天气增多，影响农业和生物分布</>, K.cl2.from],
	['对策', C.green, C.greenSoft, <>减少化石燃料燃烧，开发<Hl c={C.green}>清洁能源</Hl>；<Hl c={C.green}>植树造林</Hl>，增加 {chem('CO2')} 吸收</>, K.cl3.from],
];
export const Climate: React.FC = () => (
	<Scene duration={T.climate.duration}>
		<Header tag="考点三">全球气候变化</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190, display: 'flex', alignItems: 'center', gap: 14}}>
			{CARDS.map(([h, c, soft, body, at], i) => (
				<React.Fragment key={h}>
					{i > 0 && (
						<Appear at={at} dy={0}>
							<div style={{fontSize: 56, fontWeight: 900, color: C.muted}}>→</div>
						</Appear>
					)}
					<Appear at={at} style={{flex: 1}}>
						<div style={{border: `5px solid ${c}`, background: soft, borderRadius: 24, padding: '22px 26px', height: 400, boxSizing: 'border-box'}}>
							<div style={{fontSize: 46, fontWeight: 900, color: c}}>{h}</div>
							<div style={{fontSize: 32, fontWeight: 700, marginTop: 18, lineHeight: 1.6}}>{body}</div>
						</div>
					</Appear>
				</React.Fragment>
			))}
		</div>
		<Narration t={T.climate} />
	</Scene>
);

const O = T.ozone.cue;
export const Ozone: React.FC = () => (
	<Problem
		t={T.ozone}
		tag="考点四"
		title="臭氧层破坏与酸雨"
		intro={{at: O.oz1.from, text: <>臭氧层：吸收太阳光中的<Hl c={C.orange}>紫外线</Hl>，保护地球生物</>}}
		rows={[
			{name: '臭氧层破坏', cause: <><Hl>氟氯烃</Hl>等物质</>, harm: <>紫外线增多，<Hl c={C.orange}>皮肤癌、白内障</Hl>发病率升高</>, at: O.oz2.from},
			{name: '酸雨', cause: <>燃烧煤、石油释放的<Hl>硫和氮的氧化物</Hl></>, harm: <>水体、土壤<Hl c={C.orange}>酸化</Hl>，危害植物和水生生物</>, at: O.oz3.from},
		]}
		callout={{label: '易错', red: true, at: O.oz4.from, body: <>元凶别混：温室效应——<Hl c={C.orange}>{chem('CO2')}</Hl>；臭氧层破坏——<Hl c={C.orange}>氟氯烃</Hl>；酸雨——<Hl c={C.orange}>硫和氮的氧化物</Hl></>}}
	/>
);

const W = T.water.cue;
export const Water: React.FC = () => (
	<Problem
		t={T.water}
		tag="考点五"
		title="其他全球性生态环境问题"
		rows={[
			{name: '水资源短缺', cause: <>人口增长、用水增加，<Hl>水体污染</Hl></>, harm: <>可利用的淡水越来越少</>, at: W.wt2.from},
			{name: '土地荒漠化', cause: <><Hl>过度放牧、过度开垦、滥伐森林</Hl></>, harm: <>土地退化，沙尘暴频发</>, at: W.wt3.from},
			{name: '其他问题', cause: <>栖息地破坏、过度利用、<Hl>污染物排放</Hl></>, harm: <><Hl c={C.orange}>生物多样性丧失</Hl>；环境污染（如海洋塑料垃圾）</>, at: W.wt4.from},
		]}
		callout={{label: '解题方法', at: W.wt5.from, body: <>按“<Hl c={C.orange}>原因 → 危害 → 对策</Hl>”三步答；原因多指向<Hl>不合理的人类活动</Hl></>}}
	/>
);

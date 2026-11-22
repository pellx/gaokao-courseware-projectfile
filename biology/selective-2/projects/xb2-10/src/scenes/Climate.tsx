import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';
import {chem} from '../components/chem';

const t = T.climate;
const {cl1, cl2, cl3, cl4} = t.cue;

export const Climate: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">温室效应与碳中和</Header>
		<div style={{position: 'absolute', left: 90, top: 190}}>
			<Chain
				fontSize={30}
				gap={12}
				steps={[
					{label: '化石燃料燃烧、植被破坏', color: C.red, at: cl1.from},
					{label: chem('CO2浓度升高'), color: C.red, at: cl1.from + 30},
					{label: '温室效应加剧', color: C.orange, at: cl2.from},
					{label: '全球变暖、海平面上升', color: C.orange, at: cl2.from + 25},
				]}
			/>
		</div>
		<div style={{position: 'absolute', left: 90, right: 90, top: 320, display: 'flex', gap: 28}}>
			<Appear at={cl3.from} style={{flex: 1}}>
				<div style={{border: `5px solid ${C.green}`, borderRadius: 22, padding: '18px 26px', fontSize: 31, fontWeight: 700, lineHeight: 1.55}}>
					<Hl c={C.green}>减少排放</Hl>：减少化石燃料燃烧，开发清洁能源
				</div>
			</Appear>
			<Appear at={cl3.from + 30} style={{flex: 1}}>
				<div style={{border: `5px solid ${C.green}`, borderRadius: 22, padding: '18px 26px', fontSize: 31, fontWeight: 700, lineHeight: 1.55}}>
					<Hl c={C.green}>增加吸收</Hl>：植树造林，保护植被
				</div>
			</Appear>
		</div>
		<Appear at={cl4.from} style={{position: 'absolute', left: 90, right: 90, top: 520}}>
			<Callout label="考法" style={{fontSize: 30}}>
				2030 年前<Hl c={C.orange}>碳达峰</Hl>、2060 年前<Hl c={C.orange}>碳中和</Hl>；碳中和 = 一定时间内 CO<sub style={{fontSize: '0.6em'}}>2</sub> 排放量与吸收量<Hl>相抵</Hl>，净零排放
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

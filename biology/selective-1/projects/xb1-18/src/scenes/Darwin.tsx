import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Trials} from '../components/Trials';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.darwin;
const {dw1, dw2, dw3, dw4, dw5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

export const Darwin: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">达尔文的实验</Header>
		<Appear at={dw1.from} style={{position: 'absolute', right: 90, top: 175, width: 560, height: 400}}>
			<Photo src="images/darwin.jpg" caption="达尔文（1881年）" style={{width: '100%', height: '100%'}} pos="50% 30%" />
		</Appear>
		<div style={{position: 'absolute', left: 70, top: 160}}>
			<Trials
				scale={1}
				gap={22}
				trials={[
					{p: {light: 'left', bend: -45, label: '① 单侧光'}, at: dw2.from, result: '向光弯曲', resultAt: at(dw2.from, dw2.to, 0.3)},
					{p: {light: 'left', tip: 'none', label: '② 去掉尖端'}, at: at(dw2.from, dw2.to, 0.5), result: '不生长不弯曲', color: C.red, resultAt: at(dw2.from, dw2.to, 0.75)},
					{p: {light: 'left', tip: 'cap', label: '③ 锡箔罩尖端'}, at: dw3.from, result: '直立生长', color: C.orange, resultAt: at(dw3.from, dw3.to, 0.3)},
					{p: {light: 'left', sleeve: true, bend: -45, label: '④ 锡箔罩下部'}, at: at(dw3.from, dw3.to, 0.5), result: '向光弯曲', resultAt: at(dw3.from, dw3.to, 0.85)},
				]}
			/>
		</div>
		<Appear at={dw4.from} style={{position: 'absolute', left: 90, right: 90, top: 620, fontSize: 30, fontWeight: 800}}>
			感光部位：<Hl>尖端</Hl>；弯曲部位：<Hl>尖端下面的一段</Hl>；尖端向下传递某种“<Hl c={C.orange}>影响</Hl>”
		</Appear>
		<Appear at={dw5.from} style={{position: 'absolute', left: 90, right: 90, top: 690}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 29, padding: '12px 24px'}}>
				达尔文<Hl>没有发现生长素</Hl>，只提出“某种影响”；锡箔的作用是<Hl c={C.orange}>遮光</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Appear, Narration, Photo, Scene, usePop, useRamp} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.intro;
const {in2, in3} = t.cue;
export const INTRO_DUR = t.duration;

const TOPICS = ['促胰液素的发现', '胰岛素的发现', '加法与减法原理', '研究方法与对照', '内分泌系统组成', '主要激素的功能', '激素的化学本质', '分泌异常与疾病', '激素调节的特点'];
const NUM = '一二三四五六七八九';

export const Intro: React.FC = () => {
	const title = useRamp(5, 20);
	const photo = usePop(20);
	const tags = useRamp(in2.from, 15);
	return (
		<Scene duration={INTRO_DUR}>
			<div style={{position: 'absolute', left: 110, top: 120, opacity: title, transform: `translateY(${(1 - title) * 30}px)`}}>
				<div style={{display: 'inline-block', background: C.orange, color: '#fff', fontSize: 36, fontWeight: 700, padding: '6px 22px', borderRadius: 12}}>
					高考一轮复习 · 人教版生物选择性必修1
				</div>
				<div style={{fontSize: 112, fontWeight: 900, marginTop: 24, letterSpacing: 4}}>
					激素与<span style={{color: C.red}}>内分泌系统</span>
				</div>
				<div style={{fontSize: 44, color: C.muted, marginTop: 6, opacity: tags}}>
					实验分析 · 腺体与激素 · 作用特点
				</div>
			</div>
			<div style={{position: 'absolute', left: 110, top: 510, width: 1080, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16}}>
				{TOPICS.map((name, i) => (
					<Appear key={name} at={in3.from + i * 6} dx={-30} dy={0}>
						<div style={{display: 'flex', alignItems: 'center', gap: 12, background: C.panel, border: `3px solid ${C.line}`, borderRadius: 16, padding: '12px 16px', fontSize: 29, fontWeight: 700}}>
							<span style={{background: i % 2 ? C.orange : C.red, color: '#fff', fontSize: 24, padding: '2px 10px', borderRadius: 8}}>考点{NUM[i]}</span>
							{name}
						</div>
					</Appear>
				))}
			</div>
			<div style={{position: 'absolute', right: 100, top: 130, width: 560, height: 680, transform: `scale(${0.9 + 0.1 * photo})`, opacity: Math.min(1, photo)}}>
				<Photo src="images/rooster.jpg" caption="公鸡的鸡冠与羽毛：受雄激素影响的第二性征" style={{width: '100%', height: '100%'}} zoom={{scale: 1.05, origin: '60% 30%'}} />
			</div>
			<Narration t={t} />
		</Scene>
	);
};

import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.testis;
const {ts2, ts3, ts4, ts5, ts6} = t.cue;
export const TESTIS_DUR = t.duration;

const Principle: React.FC<{at: number; name: string; def: string; examples: string[]; color: string; soft: string}> = ({at, name, def, examples, color, soft}) => (
	<Appear at={at} style={{flex: 1}}>
		<div style={{background: soft, border: `4px solid ${color}`, borderRadius: 24, padding: '22px 30px', height: 400, boxSizing: 'border-box'}}>
			<div style={{fontSize: 48, fontWeight: 900, color}}>{name}</div>
			<div style={{fontSize: 34, marginTop: 8}}>与常态比较，{def}</div>
			<div style={{marginTop: 16, display: 'flex', flexDirection: 'column', gap: 10}}>
				{examples.map((e) => (
					<div key={e} style={{fontSize: 31, background: '#fff', borderRadius: 12, padding: '8px 16px'}}>
						<span style={{color, fontWeight: 900, marginRight: 10}}>●</span>
						{e}
					</div>
				))}
			</div>
		</div>
	</Appear>
);

export const Testis: React.FC = () => {
	const frame = useCurrentFrame();
	const p1 = interpolate(frame, [ts4.from - 15, ts4.from], [1, 0], clamp);
	return (
		<Scene duration={TESTIS_DUR}>
			<Header tag="考点三">睾丸分泌雄激素：加法原理与减法原理</Header>
			<div style={{position: 'absolute', inset: 0, opacity: p1}}>
				<Appear at={10} style={{position: 'absolute', left: 90, top: 175}}>
					<Photo src="images/rooster.jpg" caption="雄性性征：鲜红高大的鸡冠、鲜艳的羽毛、鸣啼求偶" style={{width: 820, height: 560}} />
				</Appear>
				<div style={{position: 'absolute', left: 970, right: 90, top: 180, display: 'flex', flexDirection: 'column', gap: 22}}>
					<Appear at={ts2.from} dx={30} dy={0}>
						<div style={{background: C.redSoft, border: `3px solid ${C.red}`, borderRadius: 20, padding: '18px 26px'}}>
							<div style={{fontSize: 36, fontWeight: 800}}>
								① 摘除公鸡睾丸 <span style={{background: C.red, color: '#fff', fontSize: 26, padding: '2px 12px', borderRadius: 8, marginLeft: 8}}>减法</span>
							</div>
							<div style={{fontSize: 32, marginTop: 8, color: C.red, fontWeight: 700}}>→ 雄性性征明显消失</div>
						</div>
					</Appear>
					<Appear at={ts3.from} dx={30} dy={0}>
						<div style={{background: C.greenSoft, border: `3px solid ${C.green}`, borderRadius: 20, padding: '18px 26px'}}>
							<div style={{fontSize: 36, fontWeight: 800}}>
								② 将睾丸移植回去 <span style={{background: C.green, color: '#fff', fontSize: 26, padding: '2px 12px', borderRadius: 8, marginLeft: 8}}>加法</span>
							</div>
							<div style={{fontSize: 32, marginTop: 8, color: C.green, fontWeight: 700}}>→ 雄性特征逐步恢复</div>
						</div>
					</Appear>
					<Appear at={ts3.from + Math.round((ts3.to - ts3.from) * 0.55)}>
						<div style={{fontSize: 34, lineHeight: 1.6, padding: '0 8px'}}>
							后来从睾丸中提取出<Hl>睾酮</Hl>（雄激素）
							<br />
							结论：<Hl c={C.orange}>睾丸分泌的雄激素维持雄性性征</Hl>
						</div>
					</Appear>
				</div>
			</div>

			<div style={{position: 'absolute', left: 110, right: 110, top: 175}}>
				<div style={{display: 'flex', gap: 40}}>
					<Principle at={ts4.from} name="减法原理" def="人为去除某种影响因素" examples={['摘除睾丸、切除胰腺', '切除甲状腺', '艾弗里实验：加 DNA 酶']} color={C.red} soft={C.redSoft} />
					<Principle at={ts5.from} name="加法原理" def="人为增加某种影响因素" examples={['移植睾丸', '注射胰岛提取液', '饲喂甲状腺激素']} color={C.green} soft={C.greenSoft} />
				</div>
				<Appear at={ts6.from} style={{marginTop: 30}}>
					<Callout label="考法" style={{fontSize: 34}}>
						判断实验用了哪种原理：<Hl>去掉</Hl>某因素 → 减法；<Hl c={C.green}>添加</Hl>某因素 → 加法。注意跨章节迁移！
					</Callout>
				</Appear>
			</div>
			<Narration t={t} />
		</Scene>
	);
};

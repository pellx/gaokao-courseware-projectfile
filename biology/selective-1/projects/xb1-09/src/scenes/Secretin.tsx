import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {Appear, Callout, Card, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {C, clamp} from '../theme';
import {T} from '../timeline';

const t = T.secretin;
const {se2, se3, se4, se5, se6, se7, se8, se9, se10} = t.cue;
export const SECRETIN_DUR = t.duration;

const Flow: React.FC<{items: string[]; color: string; at: number; step: number; size?: number}> = ({items, color, at, step, size = 32}) => (
	<div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 10, fontSize: size, fontWeight: 700}}>
		{items.map((it, i) => (
			<Appear key={it} at={at + i * step} dx={-15} dy={0} style={{display: 'flex', alignItems: 'center', gap: 10}}>
				{i > 0 && <span style={{color: C.muted}}>→</span>}
				<span style={{background: '#fff', border: `3px solid ${color}`, borderRadius: 12, padding: '6px 14px'}}>{it}</span>
			</Appear>
		))}
	</div>
);

const EXPS = [
	{n: '①', how: '稀盐酸 → 小肠肠腔', ok: true, res: '胰腺分泌胰液'},
	{n: '②', how: '稀盐酸 → 血液', ok: false, res: '不分泌'},
	{n: '③', how: '切除小肠神经，只留血管\n稀盐酸 → 小肠肠腔', ok: true, res: '仍然分泌胰液'},
];

export const Secretin: React.FC = () => {
	const frame = useCurrentFrame();
	const p1 = interpolate(frame, [se6.from - 15, se6.from], [1, 0], clamp);
	const p2 = interpolate(frame, [se8.from - 15, se8.from], [1, 0], clamp);
	const half3 = se3.from + Math.round((se3.to - se3.from) * 0.55);
	const expAt = [se3.from, half3, se4.from];

	return (
		<Scene duration={SECRETIN_DUR}>
			<Header tag="考点一">促胰液素的发现</Header>

			<div style={{position: 'absolute', left: 110, right: 110, top: 165, opacity: p1}}>
				<Appear at={se2.from}>
					<div style={{display: 'flex', alignItems: 'center', gap: 20}}>
						<span style={{background: C.muted, color: '#fff', fontSize: 28, fontWeight: 700, padding: '4px 14px', borderRadius: 8}}>当时的观点</span>
						<Flow items={['胃酸', '刺激小肠神经', '兴奋传到胰腺', '分泌胰液']} color={C.line} at={se2.from + 10} step={20} />
					</div>
				</Appear>
				<div style={{display: 'flex', gap: 28, marginTop: 34}}>
					{EXPS.map((e, i) => (
						<Appear key={e.n} at={expAt[i]} style={{flex: 1}}>
							<div style={{background: C.panel, border: `3px solid ${C.line}`, borderRadius: 22, padding: '20px 26px', height: 300, boxSizing: 'border-box', display: 'flex', flexDirection: 'column'}}>
								<div style={{fontSize: 36, fontWeight: 800}}>沃泰默 实验{e.n}</div>
								<div style={{fontSize: 32, marginTop: 14, lineHeight: 1.5, whiteSpace: 'pre-line', flex: 1}}>{e.how}</div>
								<Appear at={expAt[i] + 30} dy={10}>
									<div style={{fontSize: 34, fontWeight: 800, color: e.ok ? C.green : C.red}}>
										{e.ok ? '✓ ' : '✗ '}
										{e.res}
									</div>
								</Appear>
							</div>
						</Appear>
					))}
				</div>
				<Appear at={se5.from} style={{marginTop: 30}}>
					<Callout label="沃泰默的结论" color={C.muted} soft={C.panel}>
						“这是一个<Hl c={C.brown}>顽固的神经反射</Hl>”——小肠上的神经没剔除干净（固守旧观点）
					</Callout>
				</Appear>
			</div>

			<div style={{position: 'absolute', left: 110, right: 110, top: 170, opacity: p2 * interpolate(frame, [se6.from - 10, se6.from + 5], [0, 1], clamp)}}>
				<div style={{display: 'flex', gap: 40}}>
					<div style={{display: 'flex', gap: 16}}>
						<Photo src="images/bayliss.jpg" caption="贝利斯" style={{width: 250, height: 320}} zoom={{scale: 1.1, origin: '50% 30%'}} />
						<Photo src="images/starling.jpg" caption="斯他林" style={{width: 250, height: 320}} zoom={{scale: 1.15, origin: '50% 25%'}} />
					</div>
					<div style={{flex: 1}}>
						<div style={{fontSize: 36, fontWeight: 800, marginBottom: 18}}>
							假设：这是<Hl>化学调节</Hl>
						</div>
						<Flow items={['剪下小肠', '刮下黏膜', '+稀盐酸、砂子磨碎', '提取液', '注射到同一条狗的静脉']} color={C.orange} at={se6.from + 30} step={Math.round((se6.to - se6.from - 40) / 5)} />
						<Appear at={se7.from + 20} style={{marginTop: 22}}>
							<div style={{fontSize: 36, fontWeight: 800, color: C.green}}>→ 胰腺分泌胰液 ✓</div>
						</Appear>
					</div>
				</div>
				<Appear at={se7.from + 60} style={{marginTop: 36}}>
					<Card style={{display: 'flex', alignItems: 'center', gap: 24, fontSize: 36, borderColor: C.red}}>
						<span style={{fontSize: 44, fontWeight: 900, color: C.red}}>促胰液素</span>
						<span>小肠黏膜分泌 → 血液 → 胰腺，促进胰液分泌</span>
						<span style={{marginLeft: 'auto', background: C.red, color: '#fff', fontWeight: 700, padding: '4px 16px', borderRadius: 10, fontSize: 30}}>第一种被发现的激素</span>
					</Card>
				</Appear>
			</div>

			<div style={{position: 'absolute', left: 110, right: 110, top: 175, display: 'flex', flexDirection: 'column', gap: 26}}>
				<Appear at={se8.from}>
					<Callout label="考法" style={{fontSize: 34}}>
						实验①与②对照 → 胰液分泌<Hl c={C.orange}>不是盐酸直接作用于胰腺</Hl>
						<Appear at={se9.from} dy={10}>
							刮下黏膜并磨碎 → <Hl c={C.orange}>彻底排除神经调节的干扰</Hl>
						</Appear>
					</Callout>
				</Appear>
				<Appear at={se10.from}>
					<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 34}}>
						促胰液素：<Hl>小肠黏膜</Hl>分泌，作用于<Hl>胰腺</Hl>
						<br />
						胰液：消化液，经导管进入小肠（外分泌），<Hl>不是激素</Hl>
					</Callout>
				</Appear>
			</div>
			<Narration t={t} />
		</Scene>
	);
};

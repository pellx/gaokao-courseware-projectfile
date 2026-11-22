import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Chain} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.sensation;
const {se1, se2, se3, se4} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const Faded: React.FC<{at: number; children: string}> = ({at, children}) => (
	<Appear at={at} dy={0}>
		<div style={{border: `4px dashed ${C.line}`, color: '#b8afa4', borderRadius: 16, padding: '12px 22px', fontSize: 30, fontWeight: 800, textDecoration: 'line-through'}}>{children}</div>
	</Appear>
);

export const Sensation: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">感觉在大脑皮层形成</Header>
		<Appear at={se1.from} style={{position: 'absolute', left: 90, top: 180, fontSize: 36, fontWeight: 800}}>
			所有感觉（痛觉、冷觉、渴觉……）都在<Hl>大脑皮层</Hl>形成
		</Appear>
		<div style={{position: 'absolute', left: 90, top: 270}}>
			<Appear at={se2.from} style={{fontSize: 28, fontWeight: 800, color: C.muted, marginBottom: 10}}>
				产生痛觉
			</Appear>
			<div style={{display: 'flex', alignItems: 'center', gap: 16}}>
				<Chain
					fontSize={30}
					gap={10}
					steps={[
						{label: '感受器', at: se2.from},
						{label: '传入神经', at: se2.from + 15},
						{label: '脊髓', at: se2.from + 30},
						{label: '大脑皮层：痛觉', color: C.red, at: se2.from + 45},
					]}
				/>
				<Faded at={se3.from}>传出神经</Faded>
				<Faded at={se3.from + 10}>效应器</Faded>
			</div>
			<Appear at={at(se3.from, se3.to, 0.2)} style={{marginTop: 14, fontSize: 32, fontWeight: 800}}>
				反射弧不完整 → <Hl>不属于反射</Hl>
			</Appear>
		</div>
		<div style={{position: 'absolute', left: 90, top: 520}}>
			<Appear at={se4.from} style={{fontSize: 28, fontWeight: 800, color: C.muted, marginBottom: 10}}>
				缩手反射（中枢在脊髓）
			</Appear>
			<Chain
				fontSize={30}
				gap={10}
				steps={[
					{label: '感受器', at: se4.from},
					{label: '传入神经', at: se4.from + 10},
					{label: '脊髓', color: C.green, at: se4.from + 20},
					{label: '传出神经', at: se4.from + 30},
					{label: '效应器：缩手', color: C.green, at: se4.from + 40},
				]}
			/>
		</div>
		<Appear at={at(se4.from, se4.to, 0.5)} style={{position: 'absolute', left: 90, right: 90, top: 720}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				缩手的路径短，上传到大脑皮层的路径长 → <Hl c={C.green}>先缩手，后感到疼</Hl>
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

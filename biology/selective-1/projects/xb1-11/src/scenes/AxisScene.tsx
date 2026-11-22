import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Axis} from '../components/Axis';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.axis;
const {ax1, ax2, ax3, ax4, ax5} = t.cue;

export const AxisScene: React.FC = () => {
	const frame = useCurrentFrame();
	const stage = frame >= ax4.from ? 4 : frame >= ax3.from ? 3 : frame >= ax2.from ? 2 : 1;
	return (
		<Scene duration={t.duration}>
			<Header tag="考点一">下丘脑—垂体—甲状腺轴</Header>
			<Appear at={ax1.from} style={{position: 'absolute', left: 90, top: 165}}>
				<Axis stage={stage} />
			</Appear>
			<div style={{position: 'absolute', left: 980, right: 90, top: 190, display: 'flex', flexDirection: 'column', gap: 22, fontSize: 30, fontWeight: 700, lineHeight: 1.5}}>
				<Appear at={ax1.from}>
					<Hl c={C.green}>TRH</Hl>：促甲状腺激素释放激素（下丘脑）
				</Appear>
				<Appear at={ax2.from}>
					<Hl c={C.green}>TSH</Hl>：促甲状腺激素（垂体）
				</Appear>
				<Appear at={ax4.from} style={{background: C.redSoft, borderRadius: 18, padding: '14px 22px'}}>
					甲状腺激素：作用于几乎<Hl>全身细胞</Hl>
					<br />· 提高细胞代谢速率，增加产热
					<br />· 提高神经系统的兴奋性
					<br />· 促进生长发育
				</Appear>
			</div>
			<Appear at={ax5.from} style={{position: 'absolute', left: 980, right: 90, top: 640}}>
				<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 28, padding: '12px 22px'}}>
					TRH → <Hl c={C.orange}>垂体</Hl>；TSH → <Hl c={C.green}>甲状腺</Hl>；甲状腺激素 → 几乎<Hl>全身细胞</Hl>
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};

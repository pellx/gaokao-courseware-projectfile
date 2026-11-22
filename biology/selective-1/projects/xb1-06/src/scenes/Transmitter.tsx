import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene, useRamp} from '../components/ui';
import {Synapse} from '../components/Synapse';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.transmitter;
const {nt1, nt2, nt3} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const KINDS = ['乙酰胆碱', '氨基酸类（谷氨酸、甘氨酸）', '多巴胺', '去甲肾上腺素', '5-羟色胺', '一氧化氮等'];

export const Transmitter: React.FC = () => {
	const pumps = useRamp(at(nt2.from, nt2.to, 0.4), 16);
	return (
		<Scene duration={t.duration}>
			<Header tag="考点三">神经递质的种类与去向</Header>
			<div style={{position: 'absolute', left: 90, top: 180, width: 900}}>
				<Appear at={nt1.from} style={{fontSize: 34, fontWeight: 900, marginBottom: 16}}>
					常见的神经递质
				</Appear>
				<div style={{display: 'flex', flexWrap: 'wrap', gap: 16}}>
					{KINDS.map((k, i) => (
						<Appear key={k} at={at(nt1.from, nt1.to, 0.1 + i * 0.13)} dx={-20} dy={0}>
							<div style={{border: `4px solid ${C.orange}`, borderRadius: 16, padding: '10px 22px', fontSize: 32, fontWeight: 800, color: C.orange, background: '#fff'}}>{k}</div>
						</Appear>
					))}
				</div>
				<Appear at={nt2.from} style={{marginTop: 50, fontSize: 34, fontWeight: 900}}>
					发挥作用后的去向
				</Appear>
				<Appear at={nt2.from + 10} style={{marginTop: 16, fontSize: 32, lineHeight: 1.7}}>
					① 被相应的酶<Hl>降解</Hl>
					<br />② 被<Hl>回收</Hl>进突触前膜（转运体）
				</Appear>
			</div>
			<Appear at={nt2.from} style={{position: 'absolute', left: 1040, top: 175}}>
				<div style={{transform: 'scale(0.85)', transformOrigin: 'top left'}}>
					<Synapse release={1} transporter={pumps} labels={0} />
				</div>
			</Appear>
			<Appear at={nt3.from} style={{position: 'absolute', left: 90, right: 90, top: 720}}>
				<Callout label="考法" style={{fontSize: 30}}>
					递质不能及时降解或回收 → <Hl>持续作用</Hl>于后膜 → 下一个神经元持续兴奋或持续抑制
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};

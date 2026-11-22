import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.symptoms;
const {sx1, sx2, sx3, sx4, sx5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const area = (s: string, color: string) => <span style={{color, fontWeight: 900}}>{s}</span>;

export const Symptoms: React.FC = () => {
	const frame = useCurrentFrame();
	return (
		<Scene duration={t.duration}>
			<Header tag="考点六">根据症状判断受损脑区</Header>
			<div style={{position: 'absolute', left: 90, right: 90, top: 180}}>
				<Table
					head={['症状', '受损部位']}
					cols="2.2fr 1fr"
					at={sx1.from}
					fontSize={31}
					rowHeight={74}
					focus={frame >= sx5.from}
					rows={[
						{cells: ['能看懂文字、听懂别人说话，但不会讲话', area('S区', C.red)], at: sx2.from, key: true},
						{cells: ['能说话、能写字，但听不懂别人讲话', area('H区', C.brown)], at: sx3.from, key: true},
						{cells: ['走路不稳、动作不协调', area('小脑', C.orange)], at: sx4.from},
						{cells: ['呼吸、心跳出现障碍', area('脑干', C.orange)], at: at(sx4.from, sx4.to, 0.4)},
						{cells: ['体温、水盐平衡失调', area('下丘脑', C.orange)], at: at(sx4.from, sx4.to, 0.75)},
					]}
				/>
			</div>
			<Appear at={sx5.from} style={{position: 'absolute', left: 90, right: 90, top: 700}}>
				<Callout label="解题方法" style={{fontSize: 30}}>
					先找“<Hl>不能</Hl>”做的事：不能写 → <Hl c={C.orange}>W</Hl>；看不懂 → <Hl c={C.green}>V</Hl>；不能说 → <Hl>S</Hl>；听不懂 → <Hl c={C.brown}>H</Hl>
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};

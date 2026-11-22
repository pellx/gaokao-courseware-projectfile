import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.drugs;
const {dg1, dg2, dg3, dg4, dg5, dg6} = t.cue;

const c = (s: string, color: string) => <span style={{color, fontWeight: 800}}>{s}</span>;

export const Drugs: React.FC = () => {
	const frame = useCurrentFrame();
	return (
		<Scene duration={t.duration}>
			<Header tag="考点六">药物、毒素的作用机理</Header>
			<div style={{position: 'absolute', left: 90, right: 90, top: 175}}>
				<Table
					head={['作用方式', '实例', '后膜 / 肌肉的结果']}
					cols="1fr 1.3fr 1.3fr"
					at={dg1.from}
					fontSize={31}
					rowHeight={86}
					focus={frame >= dg6.from}
					rows={[
						{cells: [c('阻断受体', C.red), '箭毒与乙酰胆碱受体结合', '递质不起作用，肌肉松弛'], at: dg2.from, key: true},
						{cells: [c('抑制递质降解', C.orange), '有机磷农药抑制乙酰胆碱酯酶', '持续作用，肌肉持续收缩（震颤、痉挛）'], at: dg3.from, key: true},
						{cells: [c('抑制递质释放', C.brown), '肉毒毒素', '递质不能释放，肌肉无法收缩'], at: dg4.from, key: true},
						{cells: [c('阻止递质回收', C.green), '可卡因', '间隙中递质增多，作用增强'], at: dg5.from, key: true},
					]}
				/>
			</div>
			<Appear at={dg6.from} style={{position: 'absolute', left: 90, right: 90, top: 690}}>
				<Callout label="解题方法" style={{fontSize: 30}}>
					先找作用位点：<Hl c={C.brown}>释放</Hl>、<Hl>与受体结合</Hl>、<Hl c={C.orange}>降解和回收</Hl>；再推后膜是<Hl c={C.orange}>持续兴奋</Hl>还是<Hl>不能兴奋</Hl>
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};

import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.prevent;
const {pv2, pv3, pv4} = t.cue;

export const Prevent: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">遗传病的检测和预防</Header>
		<Cards
			top={190}
			height={330}
			fontSize={32}
			titleSize={42}
			items={[
				{title: '遗传咨询', color: C.orange, at: pv2.from, body: <>了解家族病史 → 分析<Hl c={C.orange}>传递方式</Hl> → 推算<Hl c={C.orange}>再发风险率</Hl> → 提出建议</>},
				{title: '产前诊断', color: C.red, at: pv3.from, body: <>羊水检查、B 超检查、孕妇血细胞检查、<Hl>基因检测</Hl>等</>},
			]}
		/>
		<Tip at={pv4.from} top={580} label="易错" fontSize={33}>
			唐氏综合征可通过<Hl>羊水检查做染色体分析</Hl>诊断；禁止近亲结婚主要降低<Hl>隐性遗传病</Hl>的发病率
		</Tip>
		<Narration t={t} />
	</Scene>
);

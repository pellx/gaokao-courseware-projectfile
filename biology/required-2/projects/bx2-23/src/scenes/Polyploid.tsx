import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Flow, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.polyploid;
const {pp1, pp2, pp3, pp4} = t.cue;

export const Polyploid: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">多倍体：不经地理隔离形成新物种</Header>
		<Flow
			style={{left: 90, top: 200}}
			fontSize={36}
			rowGap={60}
			arrows={[[undefined, '秋水仙素'], [undefined, '杂交', '']]}
			rows={[
				[
					{label: '二倍体西瓜', at: pp1.from, color: C.brown},
					{label: '四倍体西瓜', at: pp2.from, color: C.orange},
				],
				[
					{label: '四倍体 × 二倍体', at: pp2.from + 50, color: C.orange},
					{label: '三倍体', at: pp2.from + 80, color: C.red},
					{label: '不育 → 生殖隔离 → 四倍体是新物种', at: pp3.from, color: C.red},
				],
			]}
		/>
		<Tip at={pp4.from} top={560} label="考法" fontSize={34}>
			多倍体形成新物种速度快，<Hl>没有经过地理隔离</Hl>，但同样形成了<Hl>生殖隔离</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

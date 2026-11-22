import React from 'react';
import {Hl} from '../components/ui';
import {Big, Board, Items} from '../components/board';
import {AnimeBeat} from '../components/anime';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.molprop;
const {mp1, mp1b, mp2, mp3, mp4} = t.cue;

export const MolProp: React.FC = () => (
	<Board
		t={t}
		tag="考点三"
		title="分子晶体的性质"
		gap={24}
		callout={{label: '易错', at: mp4.from, text: <><Hl>稳定性</Hl>看分子内共价键键能；<Hl c={C.orange}>熔沸点</Hl>看分子间作用力</>}}
		overlay={
			<AnimeBeat k="melt" from={mp1b.from} to={mp1b.to}>
				分子间靠得<span style={{color: C.red}}>不牢</span>：{'\n'}一加热就“化了”
			</AnimeBeat>
		}
	>
		<Big at={mp1.from} size={40}>分子间作用力弱 → <Hl>熔沸点低、硬度小</Hl></Big>
		<Items
			size={34}
			gap={18}
			items={[
				{at: mp2.from, node: <>熔化时破坏<Hl c={C.orange}>分子间作用力</Hl>，共价键<Hl>不断</Hl></>},
				{at: mp3.from, node: <>熔沸点：有氢键反常高；无氢键时相对分子质量越大越高</>},
			]}
		/>
	</Board>
);

import React from 'react';
import {Appear, Header, Hl, Narration, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Compare} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.free;
const {fw1, fw2, fw3, fw4, fw5} = t.cue;

export const Free: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">自由水与结合水</Header>
		<Compare
			top={170}
			height={380}
			left={90}
			right={90}
			gap={200}
			fontSize={31}
			cols={[
				{
					title: '自由水（绝大部分）',
					color: C.orange,
					at: fw1.from,
					lines: [
						{children: <>以<Hl c={C.orange}>游离形式</Hl>存在，可以自由流动</>},
						{at: fw2.from, children: <>细胞内<Hl>良好的溶剂</Hl></>},
						{at: fw2.from, children: <>参与生物化学反应、提供液体环境</>},
						{at: fw2.from, children: <><Hl c={C.orange}>运送</Hl>营养物质和代谢废物</>},
					],
				},
				{
					title: '结合水（少部分）',
					color: C.brown,
					at: fw3.from,
					lines: [
						{children: <>与细胞内其他物质相结合</>},
						{children: <>失去流动性和溶解性</>},
						{children: <>是<Hl c={C.brown}>细胞结构的重要组成部分</Hl></>},
					],
				},
			]}
		/>
		<Appear at={fw4.from} dy={0} style={{position: 'absolute', left: 860, width: 200, top: 300, textAlign: 'center', fontSize: 30, fontWeight: 900, color: C.red}}>
			<div style={{fontSize: 80, lineHeight: 1}}>⇄</div>
			相互转化
		</Appear>
		<Tip at={fw5.from} top={600} label="易错">
			只有<Hl>自由水</Hl>能作溶剂、参与反应和运输；结合水是细胞结构的组成成分
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.fossil;
const {fo1, fo2, fo3, fo4} = t.cue;

export const Fossil: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">地层中的化石</Header>
		<Appear at={fo1.from} style={{position: 'absolute', left: 90, top: 170, width: 440, height: 530}}>
			<Photo src="images/anchiornis.jpg" caption="赫氏近鸟龙化石" style={{width: '100%', height: '100%'}} pos="center 30%" />
		</Appear>
		<Rows
			style={{left: 580, right: 90, top: 180}}
			fontSize={30}
			gap={18}
			items={[
				{at: fo1.from, color: C.orange, title: '概念', children: <>保存在地层中的古代生物的<Hl c={C.orange}>遗体、遗物或生活痕迹</Hl></>},
				{at: fo2.from, color: C.red, title: '地位', children: <>研究生物进化<Hl>最直接、最重要</Hl>的证据</>},
				{at: fo3.from, color: C.brown, title: '古老地层', children: <>生物简单、低等，水生多</>},
				{at: fo3.from + 70, color: C.green, title: '新近地层', children: <>生物复杂、高等，陆生多</>},
			]}
		/>
		<Tip at={fo4.from} top={740} label="考法" fontSize={32}>
			赫氏近鸟龙：骨架近似恐龙，又有羽毛印痕 → 支持<Hl>鸟类起源于恐龙</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

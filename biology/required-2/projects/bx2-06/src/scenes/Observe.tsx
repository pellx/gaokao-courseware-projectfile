import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.observe;
const {ob1, ob2, ob3, ob4, ob5} = t.cue;

export const Observe: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">观察蝗虫精母细胞减数分裂装片</Header>
		<Appear at={ob1.from} style={{position: 'absolute', left: 90, top: 170, width: 460, height: 500}}>
			<Photo src="images/locust.jpg" caption="选材：雄性蝗虫的精巢" style={{width: '100%', height: '100%'}} pos="22% 50%" />
		</Appear>
		<Rows
			style={{left: 600, right: 90, top: 175}}
			fontSize={30}
			gap={18}
			items={[
				{at: ob1.from, color: C.red, title: '选材', children: <>雄性个体的<Hl>精巢</Hl>（睾丸）</>},
				{at: ob2.from, color: C.orange, title: '原因', children: <>精巢中分裂的细胞多；卵巢中细胞少，减数分裂Ⅱ在<Hl c={C.orange}>受精时才完成</Hl></>},
				{at: ob3.from, color: C.green, title: '步骤', children: <>低倍镜下找到初级、次级精母细胞和精细胞 → 换<Hl c={C.green}>高倍镜</Hl></>},
				{at: ob4.from, color: C.red, title: '依据', children: <>染色体的<Hl>形态、位置和数目</Hl></>},
			]}
		/>
		<Tip at={ob5.from} top={720} label="易错" fontSize={32}>
			装片中的细胞已<Hl>死亡</Hl>，看不到一个细胞连续分裂的过程，只能观察不同细胞所处的不同时期
		</Tip>
		<Narration t={t} />
	</Scene>
);

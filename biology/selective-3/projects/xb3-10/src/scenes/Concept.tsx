import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.concept;
const {co1, co2, co3, co4} = t.cue;

export const Concept: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">胚胎工程的概念</Header>
		<Def at={co1.from} fontSize={30} style={{left: 90, width: 1200, top: 165}}>
			<Hl>胚胎工程</Hl>：对<Hl c={C.orange}>生殖细胞、受精卵或早期胚胎细胞</Hl>进行显微操作和处理，再将胚胎<Hl>移植到雌性动物体内</Hl>生产后代
		</Def>
		<Cards
			right={630}
			top={350}
			height={130}
			titleSize={34}
			fontSize={26}
			items={[
				{title: '体外受精', color: C.orange, at: co2.from, body: ''},
				{title: '胚胎移植', color: C.red, at: co2.from + 10, body: ''},
				{title: '胚胎分割', color: C.orange, at: co2.from + 20, body: ''},
			]}
		/>
		<Def at={co3.from} fontSize={31} color={C.green} soft={C.greenSoft} style={{left: 90, width: 1200, top: 520}}>
			理论基础：哺乳动物<Hl c={C.green}>受精</Hl>和<Hl c={C.green}>早期胚胎发育</Hl>的规律
		</Def>
		<Appear at={co1.from} style={{position: 'absolute', left: 1350, top: 165, width: 480, height: 470}}>
			<Photo src="images/embryos.jpg" caption="牛的早期胚胎" style={{width: '100%', height: '100%'}} pos="70% center" />
		</Appear>
		<Tip at={co4.from} top={705} label="易错">
			操作对象是<Hl>生殖细胞、受精卵和早期胚胎</Hl>，不是体细胞；最终都要经过<Hl>胚胎移植</Hl>获得后代
		</Tip>
		<Narration t={t} />
	</Scene>
);

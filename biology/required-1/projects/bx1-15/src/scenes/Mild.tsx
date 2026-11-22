import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Cards, Def, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.mild;
const {md1, md2, md3, md4} = t.cue;

export const Mild: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">作用条件较温和</Header>
		<Def at={md1.from} style={{left: 90, right: 90, top: 165}} fontSize={34}>
			需要适宜的温度和 pH；在<Hl c={C.orange}>最适温度、最适 pH</Hl> 下活性最高
		</Def>
		<Cards
			top={300}
			height={230}
			fontSize={33}
			titleSize={40}
			items={[
				{title: '高温、过酸、过碱', color: C.red, at: md2.from, body: <>空间结构破坏 → <Hl>永久失活</Hl></>},
				{title: '低温', color: C.green, at: md3.from, body: <>只<Hl c={C.green}>抑制</Hl>活性，空间结构稳定，温度适宜时可恢复</>},
			]}
		/>
		<Tip at={md4.from} top={580} label="考法">
			酶适宜在<Hl>低温</Hl>下保存；低温<Hl>不会</Hl>使酶变性失活
		</Tip>
		<Narration t={t} />
	</Scene>
);

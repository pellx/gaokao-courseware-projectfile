import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Cards, Def, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ban;
const {ba1, ba2, ba3, ba4} = t.cue;

export const Ban: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">我国对生物武器的态度</Header>
		<Def at={ba1.from} fontSize={32} style={{left: 90, right: 90, top: 170}}>
			1972 年，多国签署《<Hl>禁止生物武器公约</Hl>》
		</Def>
		<Cards
			top={290}
			height={130}
			titleSize={44}
			items={['不发展', '不生产', '不储存'].map((s, i) => ({title: <div style={{textAlign: 'center'}}>{s}</div>, color: C.red, body: null, at: ba2.from + i * 10}))}
		/>
		<Def at={ba3.from} fontSize={32} color={C.red} soft={C.redSoft} style={{left: 90, right: 90, top: 450}}>
			并<Hl>反对</Hl>生物武器及其技术和设备的<Hl>扩散</Hl>（任何情况下）
		</Def>
		<div style={{position: 'absolute', left: 90, right: 90, top: 570}}>
			<Table
				head={['对象', '我国的态度']}
				cols="1fr 3fr"
				at={ba4.from}
				fontSize={29}
				rowHeight={58}
				rows={[
					{cells: ['生殖性克隆人', '“四不”：不赞成、不允许、不支持、不接受'], at: ba4.from},
					{cells: ['生物武器', '“三不”：不发展、不生产、不储存 + 反对扩散'], at: ba4.from + 15},
				]}
			/>
		</div>
		<Tip at={ba4.from + 30} top={760} label="易错" fontSize={29}>
			克隆人是“<Hl>四不</Hl>”，生物武器是“<Hl>三不</Hl>”加反对扩散，两组不要记混
		</Tip>
		<Narration t={t} />
	</Scene>
);

import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.basis;
const {ba1, ba2, ba3, ba4, ba5} = t.cue;

export const Basis: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点四">胚胎移植的生理学基础</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 170}}>
			<Table
				head={['生理学基础', '为……提供了可能']}
				cols="2.2fr 1fr"
				at={ba1.from}
				fontSize={29}
				rowHeight={84}
				rows={[
					{cells: ['同种动物供、受体生殖器官的生理变化相同', <Hl c={C.orange}>胚胎移入（同期发情）</Hl>], at: ba1.from},
					{cells: ['早期胚胎处于游离状态，未与子宫建立组织联系', <Hl c={C.orange}>胚胎的收集（冲卵）</Hl>], at: ba2.from},
					{cells: [<>受体对外来胚胎<Hl>基本不发生免疫排斥反应</Hl></>, <Hl>胚胎在受体内存活</Hl>], at: ba3.from},
					{cells: ['胚胎与子宫建立联系，但遗传特性不受影响', <Hl c={C.green}>保持供体优良性状</Hl>], at: ba4.from},
				]}
			/>
		</div>
		<Tip at={ba5.from} top={630} label="解题方法">
			为什么能冲卵？<Hl c={C.orange}>游离状态</Hl>。为什么能存活？<Hl>不发生免疫排斥</Hl>。为什么同期发情？<Hl c={C.orange}>生理环境相同</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

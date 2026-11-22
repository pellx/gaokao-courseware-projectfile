import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Tree} from '../components/kit';
import {Bullets, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.types;
const {ty1, ty2, ty3, ty4, ty5} = t.cue;

export const Types: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">培养基的类型</Header>
		<div style={{position: 'absolute', left: 90, top: 190}}>
			<Tree
				width={960}
				height={460}
				colWidth={340}
				boxWidth={280}
				boxHeight={88}
				fontSize={32}
				root={{
					label: '培养基',
					color: C.red,
					at: ty1.from,
					children: [
						{
							label: '按物理状态',
							color: C.orange,
							at: ty1.from,
							children: [
								{label: '液体培养基', at: ty1.from + 10},
								{label: '固体培养基', note: '加琼脂等凝固剂', color: C.red, at: ty2.from},
							],
						},
						{
							label: '按功能',
							color: C.orange,
							at: ty4.from,
							children: [
								{label: '选择培养基', color: C.green, at: ty4.from + 10},
								{label: '鉴别培养基', color: C.green, at: ty4.from + 20},
							],
						},
					],
				}}
			/>
		</div>
		<Bullets
			style={{left: 1130, right: 90, top: 200}}
			fontSize={30}
			gap={22}
			items={[
				{at: ty2.from, color: C.red, children: <><Hl>琼脂</Hl>：一种多糖，作凝固剂，一般不被微生物利用</>},
				{at: ty3.from, children: <><Hl c={C.orange}>固体</Hl>：分离、计数、观察菌落</>},
				{at: ty3.from + 30, children: <><Hl c={C.orange}>液体</Hl>：扩大培养、工业生产</>},
				{at: ty4.from, color: C.green, children: <>选择、鉴别培养基：下期详讲</>},
			]}
		/>
		<Tip at={ty5.from} top={720} label="解题方法">
			配方中有<Hl>琼脂</Hl>就是固体培养基；只允许某一类微生物生长的是<Hl>选择培养基</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

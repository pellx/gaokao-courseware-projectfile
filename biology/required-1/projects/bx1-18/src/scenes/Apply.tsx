import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Rows, Tip} from '../components/lib';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.apply;
const {ap1, ap2, ap3, ap4} = t.cue;

export const Apply: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">细胞呼吸原理的应用</Header>
		<Rows
			style={{left: 90, right: 90, top: 170}}
			fontSize={31}
			gap={14}
			items={[
				{at: ap1.from, color: C.red, title: '包扎伤口', children: <>透气的消毒纱布 → 抑制<Hl>破伤风芽孢杆菌</Hl>等厌氧菌繁殖</>},
				{at: ap2.from, color: C.orange, title: '酿酒', children: <>先通气（酵母菌<Hl c={C.orange}>有氧呼吸、繁殖</Hl>），后密封（无氧呼吸产酒精）</>},
				{at: ap3.from, color: C.green, title: '松土', children: <>促进根的有氧呼吸，利于吸收<Hl c={C.green}>无机盐</Hl></>},
				{at: ap3.from + 60, color: C.brown, title: '有氧运动', children: <>慢跑等，避免肌细胞无氧呼吸产生大量乳酸</>},
			]}
		/>
		<Tip at={ap4.from} top={640} label="易错">
			稻田定期<Hl>排水</Hl>：防止根无氧呼吸产生<Hl>酒精</Hl>导致烂根
		</Tip>
		<Narration t={t} />
	</Scene>
);

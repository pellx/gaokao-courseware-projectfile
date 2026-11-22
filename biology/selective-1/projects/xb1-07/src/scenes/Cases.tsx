import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.cases;
const {cs1, cs2, cs3, cs4, cs5} = t.cue;

const yes = (s: string) => <span style={{color: C.green, fontWeight: 900}}>✓ {s}</span>;
const no = (s: string) => <span style={{color: C.red, fontWeight: 900}}>✗ {s}</span>;

export const Cases: React.FC = () => {
	const frame = useCurrentFrame();
	return (
		<Scene duration={t.duration}>
			<Header tag="考点四">排尿相关的病例分析</Header>
			<Appear at={cs1.from} style={{position: 'absolute', left: 90, top: 180, fontSize: 34, fontWeight: 800}}>
				关键：大脑皮层与脊髓之间的<Hl>联系</Hl>是否完好
			</Appear>
			<div style={{position: 'absolute', left: 90, right: 90, top: 260}}>
				<Table
					head={['情况', '原因', '能否排尿', '能否有意识控制']}
					cols="0.8fr 2.2fr 0.8fr 1fr"
					at={cs2.from - 10}
					fontSize={31}
					rowHeight={88}
					focus={frame >= cs5.from}
					rows={[
						{cells: ['成人', '脊髓低级中枢受大脑皮层调控', yes('能'), yes('能')], at: cs2.from},
						{cells: ['婴儿遗尿', '大脑发育尚未完善', yes('能'), no('较弱')], at: cs3.from, key: true},
						{cells: ['截瘫病人', '脊髓受伤，与大脑皮层的联系中断', yes('能'), no('不能（尿失禁）')], at: cs4.from, key: true},
					]}
				/>
			</div>
			<Appear at={cs5.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
				<Callout label="解题方法" style={{fontSize: 30}}>
					能否排尿 → 看<Hl c={C.green}>脊髓的反射弧</Hl>；能否有意识控制 → 看<Hl>大脑皮层与脊髓的联系</Hl>（惊吓时尿失禁同理）
				</Callout>
			</Appear>
			<Narration t={t} />
		</Scene>
	);
};

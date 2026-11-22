import React from 'react';
import {useCurrentFrame} from 'remotion';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {Chem} from '../components/chem';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.disorder;
const {ds2, ds3, ds4, ds5} = t.cue;
const at = (from: number, to: number, p: number) => from + Math.round((to - from) * p);

const Kind: React.FC<{k: '成分' | '理化性质'; children: React.ReactNode}> = ({k, children}) => (
	<span style={{display: 'flex', alignItems: 'center', gap: 12}}>
		<span style={{background: k === '成分' ? C.orange : C.green, color: '#fff', fontSize: 24, padding: '2px 10px', borderRadius: 8, fontWeight: 700}}>{k}</span>
		<span>{children}</span>
	</span>
);

export const Disorder: React.FC = () => {
	const frame = useCurrentFrame();
	return (
		<Scene duration={t.duration}>
			<Header tag="考点五">稳态失调与疾病</Header>
			<div style={{position: 'absolute', left: 110, right: 110, top: 165}}>
				<Table
					head={['失调的对象', '失调情况', '结果']}
					cols="1fr 1.2fr 1.4fr"
					at={ds2.from - 10}
					fontSize={32}
					rowHeight={70}
					focus={frame >= ds5.from}
					rows={[
						{cells: [<Kind key="k" k="成分">血糖</Kind>, '血糖浓度过低', <Hl key="h">低血糖症状</Hl>], at: ds2.from, key: true},
						{cells: [<Kind key="k" k="成分">代谢废物</Kind>, '尿素等不能及时排出', <Hl key="h">尿毒症</Hl>], at: at(ds2.from, ds2.to, 0.5), key: true},
						{cells: [<Kind key="k" k="理化性质">pH</Kind>, 'pH 失调', <Hl key="h">酸中毒、碱中毒</Hl>], at: ds3.from, key: true},
						{cells: [<Kind key="k" k="理化性质">温度</Kind>, '体温失调', <Hl key="h">发烧、中暑</Hl>], at: at(ds3.from, ds3.to, 0.35), key: true},
						{cells: [<Kind key="k" k="理化性质">渗透压</Kind>, '渗透压失调', <Hl key="h">细胞吸水或失水，形态和功能异常</Hl>], at: at(ds3.from, ds3.to, 0.62), key: true},
						{cells: [<Kind key="k" k="成分"><Chem>Ca^2+</Chem></Kind>, '血钙过低 / 过高', <Hl key="h">抽搐 / 肌无力</Hl>], at: ds4.from, key: true},
					]}
				/>
				<Appear at={ds5.from} style={{marginTop: 26}}>
					<Callout label="考法" style={{fontSize: 33}}>
						给出病症 → 判断是哪种<Hl c={C.orange}>成分</Hl>或哪种<Hl c={C.green}>理化性质</Hl>失调。
					</Callout>
				</Appear>
			</div>
			<Narration t={t} />
		</Scene>
	);
};

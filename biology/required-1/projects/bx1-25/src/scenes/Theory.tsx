import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {G} from '../components/kit';
import {Tip} from '../components/lib';
import {Compare} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.theory;
const {th1, th2, th3, th4} = t.cue;

export const Theory: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点三">细胞衰老的原因</Header>
		<Compare
			top={170}
			height={340}
			fontSize={30}
			cols={[
				{
					title: '自由基学说',
					color: C.red,
					at: th1.from,
					lines: [
						{children: <>代谢产生的<Hl>自由基</Hl>攻击生物分子</>},
						{at: th2.from, children: <>攻击磷脂 → 产生更多自由基</>},
						{at: th2.from + 30, children: <>攻击 DNA → 可能引起<Hl c={C.orange}>基因突变</Hl></>},
						{at: th2.from + 60, children: <>攻击蛋白质 → 活性下降</>},
					],
				},
				{
					title: '端粒学说',
					color: C.orange,
					at: th3.from,
					lines: [
						{children: <>端粒：染色体两端的 <Hl c={C.orange}>DNA—蛋白质复合体</Hl></>},
						{children: <>每分裂一次，<Hl>缩短一截</Hl></>},
						{
							children: (
								<svg width={560} height={90} viewBox="0 0 560 90">
									<G at={th3.from + 40}>
										<rect x={20} y={30} width={220} height={30} rx={15} fill={C.muted} />
										<rect x={20} y={30} width={40} height={30} rx={15} fill={C.red} />
										<rect x={200} y={30} width={40} height={30} rx={15} fill={C.red} />
										<text x={290} y={55} fontSize={34} fontWeight={900} fill={C.muted}>→</text>
										<rect x={340} y={30} width={180} height={30} rx={15} fill={C.muted} />
										<rect x={340} y={30} width={18} height={30} rx={9} fill={C.red} />
										<rect x={502} y={30} width={18} height={30} rx={9} fill={C.red} />
									</G>
								</svg>
							),
						},
					],
				},
			]}
		/>
		<Tip at={th4.from} top={560} label="解题方法">
			端粒内侧正常基因受损 → 细胞活动逐渐异常；<Hl>原核细胞没有染色体</Hl>，也没有端粒
		</Tip>
		<Narration t={t} />
	</Scene>
);

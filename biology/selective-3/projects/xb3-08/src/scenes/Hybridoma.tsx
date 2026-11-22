import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Cards, Tip} from '../components/lib3';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.hybridoma;
const {hy1, hy2, hy3, hy4} = t.cue;

const ok = (s: string) => <Hl c={C.green}>✓ {s}</Hl>;
const no = (s: string) => <Hl>✗ {s}</Hl>;

export const Hybridoma: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">杂交瘤细胞的特点</Header>
		<Cards
			right={560}
			top={180}
			height={200}
			titleSize={36}
			fontSize={31}
			items={[
				{title: 'B 淋巴细胞', color: C.orange, at: hy1.from, body: <>{ok('能产生抗体')}<br />{no('不能无限增殖')}</>},
				{title: '骨髓瘤细胞', color: C.brown, at: hy2.from, body: <>{ok('能无限增殖')}<br />{no('不能产生抗体')}</>},
			]}
		/>
		<Cards
			right={560}
			top={410}
			height={180}
			titleSize={38}
			fontSize={32}
			items={[{title: '杂交瘤细胞', color: C.red, at: hy3.from, body: <>{ok('既能迅速大量增殖')}　{ok('又能产生抗体')}</>}]}
		/>
		<Appear at={hy3.from} style={{position: 'absolute', left: 1410, top: 180, width: 420, height: 410}}>
			<Photo src="images/hybridoma.jpg" caption="培养中的杂交瘤细胞" style={{width: '100%', height: '100%'}} pos="center 70%" />
		</Appear>
		<Tip at={hy4.from} top={650} label="解题方法">
			为什么选这两种细胞？答各自的<Hl c={C.green}>优点</Hl>和<Hl>缺点</Hl>，融合后<Hl c={C.orange}>优点互补</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

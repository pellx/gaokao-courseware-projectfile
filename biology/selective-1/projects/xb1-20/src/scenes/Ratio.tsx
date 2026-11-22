import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.ratio;
const {rt1, rt2, rt3, rt4} = t.cue;

const Row: React.FC<{ratio: string; high: string; low: string}> = ({ratio, high, low}) => (
	<div style={{display: 'flex', alignItems: 'stretch', gap: 18}}>
		<div style={{flex: 1.3, border: `4px solid ${C.orange}`, borderRadius: 18, padding: '18px 24px', fontSize: 32, fontWeight: 900, color: C.orange, display: 'flex', alignItems: 'center'}}>{ratio}</div>
		<div style={{flex: 1, borderRadius: 18, padding: '18px 24px', fontSize: 32, fontWeight: 800, background: C.redSoft}}>
			比值<Hl>高</Hl> → <Hl>{high}</Hl>
		</div>
		<div style={{flex: 1, borderRadius: 18, padding: '18px 24px', fontSize: 32, fontWeight: 800, background: C.greenSoft}}>
			比值<Hl c={C.green}>低</Hl> → <Hl c={C.green}>{low}</Hl>
		</div>
	</div>
);

export const Ratio: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点八">激素的相对含量</Header>
		<Appear at={rt1.from} style={{position: 'absolute', left: 90, top: 185, fontSize: 34, fontWeight: 900}}>
			决定器官发育的，往往是不同激素的<Hl>相对含量</Hl>
		</Appear>
		<div style={{position: 'absolute', left: 90, right: 90, top: 280, display: 'flex', flexDirection: 'column', gap: 26}}>
			<Appear at={rt2.from}>
				<Row ratio="黄瓜茎端：脱落酸 / 赤霉素" high="雌花" low="雄花" />
			</Appear>
			<Appear at={rt3.from}>
				<Row ratio="组织培养：生长素 / 细胞分裂素" high="生根" low="生芽" />
			</Appear>
		</div>
		<Appear at={rt4.from} style={{position: 'absolute', left: 90, right: 90, top: 560}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31}}>
				<Hl>生长素多 → 生根</Hl>；<Hl c={C.green}>细胞分裂素多 → 生芽</Hl>，不要记反
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

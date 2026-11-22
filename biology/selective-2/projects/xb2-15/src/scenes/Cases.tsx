import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.cases;
const {cs1, cs2, cs3, cs4} = t.cue;

const CASES: [string, string, React.ReactNode, number][] = [
	['农村综合发展型', C.green, <>以<Hl c={C.green}>沼气工程</Hl>为中心，种植、养殖、加工相结合，物质多级循环利用</>, cs1.from],
	['湿地生态恢复', C.orange, <>退耕还湿；建立<Hl c={C.orange}>缓冲带</Hl>减少干扰；依靠自然演替恢复功能</>, cs2.from],
	['矿区废弃地恢复', C.brown, <>关键：<Hl>植被恢复</Hl>及<Hl>土壤微生物群落的重建</Hl></>, cs3.from],
];

export const Cases: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点七">生态工程实例</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190, display: 'flex', gap: 24}}>
			{CASES.map(([name, color, body, at]) => (
				<Appear key={name} at={at} style={{flex: 1}}>
					<div style={{border: `5px solid ${color}`, borderRadius: 24, padding: '20px 24px', height: 330, boxSizing: 'border-box', background: '#fff'}}>
						<div style={{fontSize: 38, fontWeight: 900, color}}>{name}</div>
						<div style={{fontSize: 30, fontWeight: 700, marginTop: 16, lineHeight: 1.6}}>{body}</div>
					</div>
				</Appear>
			))}
		</div>
		<Appear at={cs4.from} style={{position: 'absolute', left: 90, right: 90, top: 580}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 30}}>
				矿区恢复的关键<Hl>不是种农作物</Hl>，而是恢复<Hl>植被和土壤微生物群落</Hl>（人工制造表土、多层覆盖）
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

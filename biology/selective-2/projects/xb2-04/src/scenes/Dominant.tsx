import React from 'react';
import {Appear, Callout, Card, Header, Hl, Narration, Scene} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.dominant;
const {dm1, dm2, dm3, dm4} = t.cue;

export const Dominant: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点二">优势种</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190, display: 'flex', gap: 28}}>
			<Appear at={dm1.from} style={{flex: 1}}>
				<Card style={{height: 300, boxSizing: 'border-box', borderColor: C.orange, borderWidth: 5}}>
					<div style={{fontSize: 42, fontWeight: 900, color: C.orange}}>优势种</div>
					<div style={{fontSize: 32, fontWeight: 700, marginTop: 20, lineHeight: 1.6}}>
						① 数量<Hl c={C.orange}>很多</Hl>
						<br />② 对其他物种<Hl c={C.orange}>影响很大</Hl>
					</div>
				</Card>
			</Appear>
			<Appear at={dm2.from} style={{flex: 1.2}}>
				<Card style={{height: 300, boxSizing: 'border-box'}}>
					<div style={{fontSize: 36, fontWeight: 900, color: C.green}}>例：森林中的高大乔木</div>
					<div style={{fontSize: 30, fontWeight: 700, marginTop: 20, lineHeight: 1.6}}>决定林下的光照和湿度，影响林下植物和动物的生存</div>
				</Card>
			</Appear>
		</div>
		<Appear at={dm3.from} style={{position: 'absolute', left: 90, right: 90, top: 530, fontSize: 32, fontWeight: 800}}>
			物种组成<Hl>不是固定不变</Hl>的：随时间和环境变化，优势种可能失去优势
		</Appear>
		<Appear at={dm4.from} style={{position: 'absolute', left: 90, right: 90, top: 620}}>
			<Callout label="易错" color={C.red} soft={C.redSoft} style={{fontSize: 31}}>
				优势种要同时满足<Hl c={C.orange}>数量多</Hl>和<Hl c={C.orange}>影响大</Hl>；数量多但影响小的不是优势种
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

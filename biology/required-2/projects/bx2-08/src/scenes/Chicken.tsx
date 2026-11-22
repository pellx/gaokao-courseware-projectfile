import React from 'react';
import {Appear, Header, Hl, Narration, Photo, Scene} from '../components/ui';
import {Tip} from '../components/lib';
import {Cross} from '../components/gene';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.chicken;
const {ch1, ch2, ch3, ch4} = t.cue;

export const Chicken: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点六">伴性遗传的应用：芦花鸡辨别雌雄</Header>
		<Appear at={ch1.from} style={{position: 'absolute', left: 90, top: 170, width: 520, height: 500}}>
			<Photo src="images/barred.jpg" caption="芦花鸡（ZW 型，芦花 B 为显性）" style={{width: '100%', height: '100%'}} pos="88% 50%" />
		</Appear>
		<svg width={1100} height={520} viewBox="0 0 1100 520" style={{position: 'absolute', left: 700, top: 170}}>
			<Cross
				fontSize={44}
				labelX={0}
				rows={[
					{label: 'P', y: 80, at: ch2.from, items: [{x: 290, geno: 'Z^[b]Z^[b]', pheno: '非芦花♂', color: C.brown}, {x: 760, geno: 'Z^[B]W', pheno: '芦花♀', color: C.red}], signs: [{x: 525, text: '×'}]},
					{label: 'F1', y: 360, at: ch3.from, items: [{x: 290, geno: 'Z^[B]Z^[b]', pheno: '芦花♂', color: C.red}, {x: 760, geno: 'Z^[b]W', pheno: '非芦花♀', color: C.brown}]},
				]}
				links={[
					[[0, 0], [1, 0]],
					[[0, 1], [1, 0]],
					[[0, 0], [1, 1]],
					[[0, 1], [1, 1]],
				]}
			/>
		</svg>
		<Tip at={ch4.from} top={720} label="解题方法" fontSize={33}>
			ZW 型选<Hl>隐性雄 × 显性雌</Hl>；XY 型选<Hl>隐性雌 × 显性雄</Hl> → 子代雌雄性状不同，一看就能分辨
		</Tip>
		<Narration t={t} />
	</Scene>
);

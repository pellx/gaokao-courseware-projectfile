import React from 'react';
import {Header, Hl, Narration, Scene} from '../components/ui';
import {Def, Tip} from '../components/lib';
import {Compare} from '../components/bio';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.secrete;
const {se1, se2, se3} = t.cue;

export const Secrete: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点一">分泌蛋白</Header>
		<Def at={se1.from} style={{left: 90, right: 90, top: 165}} fontSize={36}>
			在细胞内合成后，分泌到<Hl>细胞外</Hl>起作用的蛋白质
		</Def>
		<Compare
			top={300}
			height={250}
			fontSize={33}
			cols={[
				{title: '是分泌蛋白', color: C.green, at: se2.from, lines: [{children: <><Hl c={C.green}>消化酶、抗体</Hl></>}, {children: '一部分激素，如胰岛素'}]},
				{title: '不是分泌蛋白', color: C.red, at: se3.from, lines: [{children: <><Hl>血红蛋白、呼吸酶</Hl>：在细胞内起作用</>}, {children: <><Hl>性激素</Hl>：是固醇，不是蛋白质</>}]},
			]}
		/>
		<Tip at={se3.from + 40} top={600} label="易错">
			判断是否为分泌蛋白：看它是不是<Hl>在细胞外</Hl>起作用，再看它是不是<Hl>蛋白质</Hl>
		</Tip>
		<Narration t={t} />
	</Scene>
);

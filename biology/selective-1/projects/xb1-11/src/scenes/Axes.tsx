import React from 'react';
import {Appear, Callout, Header, Hl, Narration, Scene} from '../components/ui';
import {Table} from '../components/kit';
import {C} from '../theme';
import {T} from '../timeline';

const t = T.axes;
const {ot1, ot2, ot3} = t.cue;

export const Axes: React.FC = () => (
	<Scene duration={t.duration}>
		<Header tag="考点五">其他调节轴</Header>
		<div style={{position: 'absolute', left: 90, right: 90, top: 190}}>
			<Table
				head={['调节轴', '下丘脑', '垂体', '靶腺体', '靶腺激素']}
				cols="1.3fr 0.9fr 1.3fr 0.9fr 1fr"
				at={ot1.from - 10}
				fontSize={30}
				rowHeight={90}
				rows={[
					{cells: [<Hl key="a" c={C.red}>甲状腺轴</Hl>, 'TRH', 'TSH', '甲状腺', '甲状腺激素'], at: ot1.from - 10},
					{cells: [<Hl key="b" c={C.orange}>肾上腺皮质轴</Hl>, 'CRH', 'ACTH', '肾上腺皮质', '糖皮质激素'], at: ot1.from + 20},
					{cells: [<Hl key="c" c={C.green}>性腺轴</Hl>, 'GnRH', '促性腺激素', '性腺', '性激素'], at: ot2.from},
				]}
			/>
		</div>
		<Appear at={ot3.from} style={{position: 'absolute', left: 90, right: 90, top: 640}}>
			<Callout label="考法" style={{fontSize: 30}}>
				每条轴都遵循：<Hl>分级调节</Hl> + <Hl>负反馈调节</Hl>。会分析一条，就会分析所有
			</Callout>
		</Appear>
		<Narration t={t} />
	</Scene>
);

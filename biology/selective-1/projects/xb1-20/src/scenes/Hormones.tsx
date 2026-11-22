import React from 'react';
import {Hl} from '../components/ui';
import {C} from '../theme';
import {T} from '../timeline';
import {makeHormone} from './Hormone';

export const Ga = makeHormone(T.ga, {
	tag: '考点一',
	name: '赤霉素',
	color: C.green,
	site: '幼芽、幼根和未成熟的种子',
	effects: ['促进细胞伸长 → 植株增高', '促进细胞分裂与分化', '促进种子萌发、开花和果实发育'],
	extra: (
		<>
			水稻<Hl c={C.orange}>恶苗病</Hl>：赤霉菌产生赤霉素 → 植株疯长，结实率降低
		</>
	),
	callout: {label: '易错', red: true, body: <>赤霉菌产生的赤霉素<Hl>不是植物激素</Hl>：它不是植物体内产生的</>},
});

export const Ck = makeHormone(T.ck, {
	tag: '考点二',
	name: '细胞分裂素',
	color: C.orange,
	site: '主要是根尖',
	effects: ['促进细胞分裂', '促进芽的分化、侧枝发育', '促进叶绿素合成'],
	callout: {label: '考法', body: <>延缓叶片衰老 → 蔬菜<Hl c={C.green}>保鲜</Hl>；与生长素在促进细胞分裂上<Hl c={C.orange}>协同</Hl></>},
});

export const Aba = makeHormone(T.aba, {
	tag: '考点三',
	name: '脱落酸',
	color: C.red,
	site: '根冠、萎蔫的叶片等',
	effects: ['抑制细胞分裂', '促进气孔关闭', '促进叶和果实的衰老和脱落', '维持种子休眠'],
	extra: (
		<>
			干旱 → 叶片中脱落酸增多 → <Hl>气孔关闭</Hl>，减少水分散失
		</>
	),
	callout: {label: '考法', body: <>小麦穗上发芽：干热使<Hl>脱落酸降解</Hl> → 休眠解除，遇雨萌发</>},
});

export const Eth = makeHormone(T.eth, {
	tag: '考点四',
	name: '乙烯',
	color: C.brown,
	site: '植物体各个部位（气体激素）',
	effects: ['促进果实成熟', '促进开花', '促进叶、花、果实脱落'],
	photo: ['bananas.jpg', '成熟苹果释放乙烯，催熟香蕉'],
	callout: {label: '易错', red: true, body: <>乙烯促进果实<Hl>成熟</Hl>，生长素促进果实<Hl>发育</Hl>；无子番茄用的是<Hl c={C.orange}>生长素</Hl></>},
});

export const Br = makeHormone(T.br, {
	tag: '考点五',
	name: '油菜素内酯',
	color: C.gold,
	siteLabel: '地位',
	site: '已被认定为第六类植物激素',
	effects: ['促进茎、叶细胞的扩展和分裂', '促进花粉管生长', '促进种子萌发'],
	callout: {label: '考法', body: <>以抑制作用为主的是<Hl>脱落酸</Hl>；促进脱落的有<Hl>脱落酸</Hl>和<Hl c={C.orange}>乙烯</Hl></>},
});

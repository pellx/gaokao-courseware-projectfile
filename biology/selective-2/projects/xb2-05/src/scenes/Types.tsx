import React from 'react';
import {T} from '../timeline';
import {C} from '../theme';
import {Biome, Hl} from './Biome';

const D = T.desert.cue;
export const Desert: React.FC = () => (
	<Biome
		t={T.desert}
		tag="考点二"
		title="荒漠生物群落"
		cards={[
			['环境', C.orange, <><Hl c={C.orange}>极度干旱</Hl>，降水稀少且不均匀<br />物种少，结构<Hl>非常简单</Hl></>, D.ds1.from],
			['植物', C.green, <>仙人掌属：<Hl c={C.green}>肉质茎</Hl>，叶呈<Hl c={C.green}>针状</Hl><br />骆驼刺：<Hl c={C.green}>根系发达</Hl></>, D.ds2.from],
			['动物', C.brown, <>蜥蜴、蛇：表皮有<Hl c={C.orange}>角质鳞片</Hl>，减少水分蒸发<br />排泄<Hl>固态尿酸盐</Hl></>, D.ds3.from],
		]}
		callout={{label: '易错', red: true, at: D.ds4.from, body: <>爬行动物以<Hl>固态尿酸盐</Hl>形式排泄含氮废物，不是尿素——减少水分散失</>}}
	/>
);

const G = T.grassland.cue;
export const Grassland: React.FC = () => (
	<Biome
		t={T.grassland}
		tag="考点三"
		title="草原生物群落"
		cards={[
			['环境', C.orange, <><Hl c={C.orange}>半干旱</Hl>，雨量不均匀<br />动植物种类较少，结构相对简单</>, G.gl1.from],
			['植物', C.green, <><Hl c={C.green}>耐寒旱生多年生草本</Hl>占优势<br />叶片狭窄，有<Hl c={C.green}>茸毛或蜡质层</Hl><br /><Hl>乔木非常少见</Hl></>, G.gl2.from],
			['动物', C.brown, <>大都善于<Hl c={C.orange}>挖洞或快速奔跑</Hl><br />野兔、旱獭、黄羊<br />两栖类、水生动物少见</>, G.gl3.from],
		]}
		callout={{label: '解题方法', at: G.gl4.from, body: <>草原开阔、缺少遮蔽：<Hl c={C.orange}>挖洞</Hl>便于躲避敌害，<Hl c={C.orange}>奔跑</Hl>便于逃避捕食、寻找食物</>}}
	/>
);

const F = T.forest.cue;
export const Forest: React.FC = () => (
	<Biome
		t={T.forest}
		tag="考点四"
		title="森林生物群落"
		cards={[
			['环境', C.orange, <><Hl c={C.orange}>湿润或较湿润</Hl><br />结构<Hl>非常复杂且相对稳定</Hl></>, F.fr1.from],
			['动物', C.brown, <><Hl c={C.green}>树栖和攀缘</Hl>生活的种类特别多<br />松鼠、猿猴、多种鸟类</>, F.fr2.from],
			['阴生植物', C.green, <>茎细长、叶薄<br />细胞壁薄、机械组织不发达<br />叶绿体<Hl>颗粒大、深绿色</Hl></>, F.fr3.from],
		]}
		callout={{label: '易错', red: true, at: F.fr4.from, body: <>阴生植物叶绿体<Hl>颗粒大、呈深绿色</Hl>，是适应<Hl c={C.orange}>弱光</Hl>的特征</>}}
	/>
);

const W = T.wetland.cue;
export const Wetland: React.FC = () => (
	<Biome
		t={T.wetland}
		tag="考点五"
		title="湿地和海洋中的群落"
		cards={[
			['湿地生物群落', C.green, <>既有<Hl c={C.green}>水生生物</Hl>，也有<Hl c={C.green}>陆生生物</Hl></>, W.wt1.from],
			['常见生物', C.orange, <>芦苇、香蒲等挺水植物<br />鱼类、两栖类<br />栖息、觅食的<Hl c={C.orange}>鸟类</Hl></>, W.wt2.from],
			['海洋生物群落', C.brown, <>分布受<Hl>光照</Hl>、温度、盐度影响<br />藻类主要在有光的浅水层</>, W.wt3.from],
		]}
		callout={{label: '考法', at: W.wt4.from, body: <>湿地常与<Hl c={C.orange}>间接价值</Hl>一起考：蓄洪防旱、净化水质、调节气候</>}}
	/>
);

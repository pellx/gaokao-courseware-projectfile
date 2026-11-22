import React from 'react';
import {AutoScene} from '../components/auto';

export const Cucoord: React.FC = () => <AutoScene k="cucoord" d={{"tag": "考点三", "title": "铜的配位化合物", "blocks": [{"t": "chain", "steps": [{"at": "cc1", "text": "Cu^2+ 溶液"}, {"at": "cc1", "text": "Cu(OH)2↓"}, {"at": "cc1", "text": "[Cu(NH3)4]^2+\n{深蓝色}", "c": "red"}], "arrows": ["少量氨水", "过量氨水"], "center": true, "size": 36}, {"t": "big", "at": "cc2", "text": "[Cu(H2O)4]^2+ + 4Cl^- ⇌ [CuCl4]^2-（黄色）+ 4H2O", "size": 34}, {"t": "rule", "tag": "课外", "at": "cc3", "text": "Cu^2+ + Cu + 2Cl^- = 2CuCl↓（{白色}）", "c": "brown", "size": 30}], "callout": {"label": "解题方法", "at": "cc4", "text": "颜色变化 → 想到{配离子平衡移动}"}, "beat": {"k": "pair", "at": "cc2b", "text": "依偎在一起\n配体{抱住|red}中心离子"}}} />;

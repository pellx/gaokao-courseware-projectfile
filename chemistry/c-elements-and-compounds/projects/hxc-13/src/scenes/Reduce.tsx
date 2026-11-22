import React from 'react';
import {AutoScene} from '../components/auto';

export const Reduce: React.FC = () => <AutoScene k="reduce" d={{"tag": "考点四", "title": "热还原法与热分解法", "blocks": [{"t": "rule", "tag": "高炉炼铁", "at": "re1", "text": "Fe2O3 + 3CO ═高温═ 2Fe + 3CO2", "c": "orange", "size": 32}, {"t": "big", "at": "re2", "text": "铝热反应：2Al + Fe2O3 ═高温═ 2Fe + Al2O3", "size": 40}, {"t": "text", "at": "re2", "text": "放出大量热：{焊接钢轨}、冶炼 Cr、Mn", "size": 32, "center": true}, {"t": "rule", "tag": "热分解", "at": "re3", "text": "2HgO ═△═ 2Hg + O2↑；2Ag2O ═△═ 4Ag + O2↑", "c": "green", "size": 32}], "callout": {"label": "易错", "at": "re4", "text": "Al 作{还原剂}；不能还原比 Al 活泼的金属"}}} />;

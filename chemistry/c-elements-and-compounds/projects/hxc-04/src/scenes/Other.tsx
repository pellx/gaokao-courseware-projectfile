import React from 'react';
import {AutoScene} from '../components/auto';

export const Other: React.FC = () => <AutoScene k="other" d={{"tag": "考点三", "title": "其他制法〔课外〕", "blocks": [{"t": "rule", "tag": "KMnO4", "at": "ot2", "text": "2KMnO4 + 16HCl(浓) = 2KCl + 2MnCl2 + 5Cl2↑ + 8H2O（{常温}）", "c": "red", "size": 29}, {"t": "rule", "tag": "KClO3", "at": "ot3", "text": "KClO3 + 6HCl(浓) = KCl + 3Cl2↑ + 3H2O（{归中|orange}，转移 5e^-）", "c": "orange", "size": 29}, {"t": "big", "at": "ot4", "text": "氧化性：{KMnO4 > MnO2}（常温 vs 加热）", "size": 40}], "callout": {"label": "解题方法", "at": "ot4", "text": "由{反应条件难易}比较氧化性"}}} />;

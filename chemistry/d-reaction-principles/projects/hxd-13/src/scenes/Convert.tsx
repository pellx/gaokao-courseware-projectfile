import React from 'react';
import {AutoScene} from '../components/auto';

export const Convert: React.FC = () => <AutoScene k="convert" d={{"tag": "考点七", "title": "沉淀的转化", "blocks": [{"t": "chain", "steps": [{"at": "cv1", "text": "AgCl（白）"}, {"at": "cv1", "text": "AgI（黄）"}, {"at": "cv1", "text": "{Ag2S（黑）}"}], "arrows": ["加 KI", "加 Na2S"], "center": true, "size": 38}, {"t": "big", "at": "cv2", "text": "AgCl(s) + I^-(aq) ⇌ AgI(s) + Cl^-(aq)", "size": 38}, {"t": "rule", "tag": "除水垢", "at": "cv3", "text": "CaSO4 → 用 {Na2CO3} 转化为 CaCO3 → 用酸溶解", "c": "orange", "size": 31}], "callout": {"label": "易错", "at": "cv4", "text": "浓度足够大时，也能转化为{溶解度稍大}的沉淀"}, "beat": {"k": "faces", "at": "cv3b", "text": "沉淀也会{换样子|red}\n一般向更难溶的转化"}}} />;

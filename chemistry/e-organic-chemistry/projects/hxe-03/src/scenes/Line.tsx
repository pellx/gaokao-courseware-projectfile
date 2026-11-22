import React from 'react';
import {AutoScene} from '../components/auto';

export const Line: React.FC = () => <AutoScene k="line" d={{"tag": "考点六", "title": "共线判断", "blocks": [{"t": "items", "items": [{"at": "ln1", "text": "三键两端及其相连原子：{共线}"}, {"at": "ln2", "text": "苯环{对位}碳及其相连原子：共线"}, {"at": "ln3", "text": "CH3—C≡C—CH3：{4 个碳共线}"}], "size": 34}], "callout": {"label": "易错", "at": "ln4", "text": "饱和碳链是{锯齿形}，不共线"}, "beat": {"k": "bass", "at": "ln3b", "text": "三键这一段\n{连着的原子一条线|red}"}}} />;

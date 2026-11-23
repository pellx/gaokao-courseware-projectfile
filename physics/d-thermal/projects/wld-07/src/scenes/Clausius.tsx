import React from 'react';
import {AutoScene} from '../components/auto';

export const Clausius: React.FC = () => <AutoScene k="clausius" d={{"tag": "考点二", "title": "克劳修斯表述", "blocks": [{"t": "big", "at": "c1", "text": "热量不能{自发地}从低温物体传到高温物体", "size": 42}, {"t": "rule", "tag": "电冰箱", "at": "c3", "text": "低温 → 高温，靠压缩机{消耗电能}", "c": "orange"}], "callout": {"label": "易错", "at": "c4", "text": "关键词“{自发地}”"}, "beat": {"k": "parfait", "at": "c3b", "text": "低温 → 高温\n要{消耗电能|red}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Other: React.FC = () => <AutoScene k="other" d={{"tag": "考点五", "title": "乙醇的其他反应", "blocks": [{"t": "items", "items": [{"at": "ot1", "text": "与 HBr：→ CH3CH2Br（取代）"}, {"at": "ot2", "text": "140 ℃ 分子间脱水 → 乙醚（{取代}）"}, {"at": "ot3", "text": "酸性 K2Cr2O7：{橙色 → 绿色}，生成乙酸"}], "size": 33}], "callout": {"label": "易错", "at": "ot4", "text": "分子{间}脱水是取代；分子{内}脱水是消去"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Loss: React.FC = () => <AutoScene k="loss" d={{"tag": "考点五", "title": "实际变压器的能量损失", "blocks": [{"t": "items", "items": [{"at": "e1", "text": "线圈电阻{发热}"}, {"at": "e2", "text": "铁芯中的{涡流}"}, {"at": "e2", "text": "{漏磁}"}], "size": 38}, {"t": "text", "at": "e3", "text": "铁芯用绝缘的{硅钢片}叠成，减小涡流", "size": 34}], "callout": {"label": "要点", "at": "e4", "text": "发热、{涡流}、漏磁"}}} />;

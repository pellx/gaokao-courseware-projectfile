import React from 'react';
import {AutoScene} from '../components/auto';

export const Carry: React.FC = () => <AutoScene k="carry" d={{"tag": "考点三", "title": "波传递的是什么", "blocks": [{"t": "items", "items": [{"at": "c1", "text": "传播{振动}这种运动形式"}, {"at": "c2", "text": "传递{能量}"}, {"at": "c2", "text": "传递{信息}"}], "size": 38}, {"t": "rule", "tag": "质点", "at": "c3", "text": "只在各自{平衡位置附近}振动", "c": "orange"}], "callout": {"label": "易错", "at": "c4", "text": "质点{不随波迁移}"}}} />;

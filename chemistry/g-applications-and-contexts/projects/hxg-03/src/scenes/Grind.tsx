import React from 'react';
import {AutoScene} from '../components/auto';

export const Grind: React.FC = () => <AutoScene k="grind" d={{"tag": "考点三", "title": "粉碎与研磨", "blocks": [{"t": "big", "at": "gr1", "text": "粉碎：{增大接触面积} → 加快速率 → 提高浸出率", "size": 40}, {"t": "text", "at": "gr2", "text": "同类：搅拌、气体{逆流}通入", "size": 34, "center": true}], "callout": {"label": "易错", "at": "gr4", "text": "粉碎{不改变平衡}，只影响速率"}}} />;

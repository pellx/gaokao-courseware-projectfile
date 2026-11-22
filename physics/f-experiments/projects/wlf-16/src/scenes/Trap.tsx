import React from 'react';
import {AutoScene} from '../components/auto';

export const Trap: React.FC = () => <AutoScene k="trap" d={{"tag": "考点九", "title": "易错提醒", "blocks": [{"t": "big", "at": "e1", "text": "感应电流方向 ← {原磁场方向} + {Φ 增减|orange}", "size": 40}, {"t": "items", "items": [{"at": "e2", "text": "只看磁极，或只看插入、抽出：{无法确定}"}, {"at": "e3", "text": "磁体在线圈中静止：Φ 不变，{指针不偏转}"}], "size": 32}], "callout": {"label": "易错", "at": "e4", "text": "两个因素{缺一不可}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Record: React.FC = () => <AutoScene k="record" d={{"tag": "考点四", "title": "需要记录的内容", "blocks": [{"t": "items", "items": [{"at": "r1", "text": "结点 {O} 的位置"}, {"at": "r2", "text": "两个测力计拉时：两个力的{大小}和{方向}"}, {"at": "r3", "text": "方向：沿细绳标{两个相距较远的点}"}, {"at": "r4", "text": "一个测力计拉时：力的{大小}和{方向}"}], "size": 32}], "callout": {"label": "易错", "at": "r5", "text": "力是矢量，{大小和方向都要记}"}, "beat": {"k": "trap", "at": "r4b", "text": "方向看{细绳|red}\n标两个相距较远的点"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Graph: React.FC = () => <AutoScene k="graph" d={{"tag": "考点三", "title": "振子的位移—时间图像", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "频闪照相", "at": "g1", "lines": ["相等时间间隔", "记录振子位置"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "纸带描迹", "at": "g2", "lines": ["纸带{匀速}移动", {"at": "g3", "text": "距离代表{时间}"}], "c": "red", "size": 32}]}]}, {"t": "rule", "tag": "曲线", "at": "g3", "text": "就是振子的 {x-t 图像}", "c": "brown", "size": 30}], "callout": {"label": "易错", "at": "g4", "text": "位移从{平衡位置}算起"}}} />;

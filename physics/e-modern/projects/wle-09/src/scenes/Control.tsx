import React from 'react';
import {AutoScene} from '../components/auto';

export const Control: React.FC = () => <AutoScene k="control" d={{"tag": "考点七", "title": "受控热核反应", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "优点", "at": "g1", "lines": ["燃料{丰富}", "更安全清洁"], "c": "orange", "size": 34}]}, {"blocks": [{"t": "panel", "title": "约束方式", "at": "g3", "lines": ["{磁约束}：托卡马克", "{惯性约束}"], "c": "red", "size": 34}]}]}, {"t": "text", "at": "g2", "text": "难点：{控制}", "size": 38}], "callout": {"label": "要点", "at": "g4", "text": "燃料丰富，{控制困难}"}}} />;

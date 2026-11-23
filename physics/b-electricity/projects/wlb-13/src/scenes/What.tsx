import React from 'react';
import {AutoScene} from '../components/auto';

export const What: React.FC = () => <AutoScene k="what" d={{"tag": "考点一", "title": "洛伦兹力", "blocks": [{"t": "rule", "tag": "定义", "at": "a1", "text": "运动电荷在磁场中受到的力", "c": "red", "size": 32}, {"t": "chain", "steps": [{"at": "a2", "text": "每个运动电荷受洛伦兹力", "c": "orange"}, {"at": "a3", "text": "宏观表现为安培力", "c": "red"}], "arrows": []}], "callout": {"label": "要点", "at": "a3", "text": "安培力是洛伦兹力的{宏观表现}"}, "beat": {"k": "trail", "at": "a2b", "text": "电荷{定向移动|red}\n个个受力"}}} />;

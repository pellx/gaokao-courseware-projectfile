import React from 'react';
import {AutoScene} from '../components/auto';

export const Route: React.FC = () => <AutoScene k="route" d={{"tag": "考点八", "title": "合成路线的书写", "blocks": [{"t": "chain", "steps": [{"at": "ro1", "text": "A"}, {"at": "ro1", "text": "B"}, {"at": "ro1", "text": "{目标产物}"}], "arrows": ["试剂\n条件", "试剂\n条件"], "center": true, "size": 40}, {"t": "items", "items": [{"at": "ro1", "text": "箭头上方写{试剂}，下方写{条件}"}, {"at": "ro2", "text": "物质写{结构简式}"}, {"at": "ro3", "text": "一般 3～4 步，善用题给信息"}], "size": 33}], "callout": {"label": "答题模板", "at": "ro4", "text": "先{逆推}，再{正向}书写"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Cap: React.FC = () => <AutoScene k="cap" d={{"tag": "考点一", "title": "电容器", "blocks": [{"t": "rule", "tag": "构成", "at": "c1", "text": "两个{彼此绝缘}、{相距很近}的导体", "c": "red", "size": 34}, {"t": "rule", "tag": "最简单", "at": "c2", "text": "{平行板电容器}", "c": "orange", "size": 34}], "callout": {"label": "要点", "at": "c3", "text": "两极板之间{绝缘}"}}} />;

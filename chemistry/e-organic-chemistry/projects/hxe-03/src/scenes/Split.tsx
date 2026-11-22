import React from 'react';
import {AutoScene} from '../components/auto';

export const Split: React.FC = () => <AutoScene k="split" d={{"tag": "考点七", "title": "拆成基本构型", "blocks": [{"t": "chain", "steps": [{"at": "sp1", "text": "CH4\n四面体"}, {"at": "sp1", "text": "C2H4\n平面"}, {"at": "sp1", "text": "C2H2\n直线"}, {"at": "sp1", "text": "C6H6\n平面"}, {"at": "sp2", "text": "HCHO\n平面"}], "arrows": [], "center": true, "size": 30}, {"t": "big", "at": "sp3", "text": "拼接处：{单键可旋转}，双键、三键不能", "size": 38}], "callout": {"label": "解题方法", "at": "sp4", "text": "画出平面和直线，{标出连接的单键}"}, "beat": {"k": "spiral", "at": "sp3b", "text": "别晕\n{拆开一块块看|red}"}}} />;

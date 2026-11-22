import React from 'react';
import {AutoScene} from '../components/auto';

export const Steps: React.FC = () => <AutoScene k="steps" d={{"tag": "考点一", "title": "研究有机物的一般步骤", "blocks": [{"t": "chain", "steps": [{"at": "st1", "text": "分离提纯"}, {"at": "st2", "text": "实验式"}, {"at": "st2", "text": "分子式"}, {"at": "st2", "text": "结构式"}], "arrows": [], "center": true, "size": 36}, {"t": "table", "at": "st2", "head": ["步骤", "方法"], "cols": "1fr 2fr", "rows": [{"at": "st2", "cells": ["分离提纯", "蒸馏、萃取、重结晶"]}, {"at": "st2", "cells": ["实验式", "{元素分析}"]}, {"at": "st2", "cells": ["分子式", "{质谱}：相对分子质量"]}, {"at": "st2", "cells": ["结构式", "{红外光谱}、{核磁共振氢谱}"]}], "size": 31, "rowHeight": 58}], "callout": {"label": "解题方法", "at": "st4", "text": "质谱测{分子量}，红外测{官能团}，核磁测{氢种类}"}}} />;

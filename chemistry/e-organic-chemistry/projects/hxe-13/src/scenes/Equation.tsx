import React from 'react';
import {AutoScene} from '../components/auto';

export const Equation: React.FC = () => <AutoScene k="equation" d={{"tag": "考点六", "title": "方程式的书写规范", "blocks": [{"t": "items", "items": [{"at": "eq1", "text": "用{箭头}；可逆反应用可逆号"}, {"at": "eq2", "text": "注明{条件}"}, {"at": "eq2", "text": "有机物写{结构简式}"}, {"at": "eq3", "text": "{不漏小分子}：H2O、NaX"}], "size": 35}], "callout": {"label": "答题模板", "at": "eq4", "text": "检查：{结构简式、条件、配平、小分子}"}, "beat": {"k": "party", "at": "eq3b", "text": "原料、条件、副产物\n{一样都不能少|red}"}}} />;

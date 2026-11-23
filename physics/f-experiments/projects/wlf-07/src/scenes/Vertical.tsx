import React from 'react';
import {AutoScene} from '../components/auto';

export const Vertical: React.FC = () => <AutoScene k="vertical" d={{"tag": "考点三", "title": "竖直分运动的探究", "blocks": [{"t": "chain", "steps": [{"at": "v1", "text": "小锤击打{弹性金属片}"}, {"at": "v1", "text": "A 球{平抛}，B 球{自由下落}"}, {"at": "v2", "text": "两球{同时落地}"}], "arrows": []}, {"t": "text", "at": "v3", "text": "改变高度、改变击打力度，{多次实验}，结果不变", "size": 34}, {"t": "big", "at": "v4", "text": "竖直分运动 = {自由落体运动}", "size": 44}], "callout": {"label": "要点", "at": "v4", "text": "只说明{竖直方向}，不能说明水平方向"}, "beat": {"k": "hammer", "at": "v3b", "text": "小锤一敲，两球同时出发\n{同时落地|red}"}}} />;

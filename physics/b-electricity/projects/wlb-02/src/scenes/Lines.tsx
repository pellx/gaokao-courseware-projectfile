import React from 'react';
import {AutoScene} from '../components/auto';

export const Lines: React.FC = () => <AutoScene k="lines" d={{"tag": "考点六", "title": "电场线", "blocks": [{"t": "items", "items": [{"at": "l1", "text": "{假想}的线，实际不存在"}, {"at": "l2", "text": "起于{正电荷}或无限远，止于无限远或{负电荷|orange}"}, {"at": "l3", "text": "不相交；{疏密}表示强弱；{切线}表示方向"}], "size": 31}], "callout": {"label": "易错", "at": "l4", "text": "没画电场线的地方{也有电场}"}, "beat": {"k": "a2", "at": "l3b", "text": "电场线越密\n电场{越强|red}"}}} />;

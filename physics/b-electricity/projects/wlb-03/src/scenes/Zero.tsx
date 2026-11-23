import React from 'react';
import {AutoScene} from '../components/auto';

export const Zero: React.FC = () => <AutoScene k="zero" d={{"tag": "考点八", "title": "内部合电场强度为 0", "blocks": [{"t": "big", "at": "z1", "text": "{合}电场强度 = 0", "size": 52}, {"t": "text", "at": "z2", "text": "外电场、感应电荷的电场{都存在}，相互抵消", "size": 34}], "callout": {"label": "易错", "at": "z3", "text": "不是“{没有电场}”，是合场强为 0"}}} />;

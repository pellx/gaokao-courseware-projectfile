import React from 'react';
import {AutoScene} from '../components/auto';

export const Dist: React.FC = () => <AutoScene k="dist" d={{"tag": "考点三", "title": "导体上的电荷分布", "blocks": [{"t": "items", "items": [{"at": "d1", "text": "内部{无净电荷}，电荷分布在{外表面}"}, {"at": "d2", "text": "越{尖锐}处电荷密度越大，电场越强"}], "size": 34}], "callout": {"label": "要点", "at": "d3", "text": "尖处密、{平处疏}"}, "beat": {"k": "a1", "at": "d2b", "text": "越尖的地方\n电荷{越密|red}，电场越强"}}} />;

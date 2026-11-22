import React from 'react';
import {AutoScene} from '../components/auto';

export const Vary: React.FC = () => <AutoScene k="vary" d={{"tag": "考点三", "title": "变速圆周运动", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "F_n", "at": "v2", "text": "指向圆心，改变速度{方向}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "F_t", "at": "v3", "text": "沿切线，改变速度{大小|orange}", "c": "orange", "size": 32}]}]}, {"t": "text", "at": "v1", "text": "速度大小变化时，合力{不指向圆心}", "size": 32}], "callout": {"label": "要点", "at": "v4", "text": "匀速圆周运动：合力{全部}充当向心力"}, "beat": {"k": "a1", "at": "v3b", "text": "合力沿切线的分量\n改变速度{大小|red}"}}} />;

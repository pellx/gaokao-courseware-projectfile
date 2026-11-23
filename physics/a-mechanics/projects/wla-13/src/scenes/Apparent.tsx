import React from 'react';
import {AutoScene} from '../components/auto';

export const Apparent: React.FC = () => <AutoScene k="apparent" d={{"tag": "考点三", "title": "实重与视重", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "实重", "at": "c1", "lines": ["物体受到的重力", "G = {mg}"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "视重", "at": "c2", "lines": ["对支持物的压力", "或对悬挂物的拉力", "= {测力计示数}"], "c": "orange", "size": 32}]}]}, {"t": "text", "at": "c3", "text": "静止、匀速：视重 = 实重", "size": 32}], "callout": {"label": "易错", "at": "c4", "text": "超重、失重时{重力不变}，变的是视重"}, "beat": {"k": "scale", "at": "c3b", "text": "秤的示数是{视重|orange}\n重力 mg {不变|red}"}}} />;

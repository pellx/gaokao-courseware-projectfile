import React from 'react';
import {AutoScene} from '../components/auto';

export const Exp: React.FC = () => <AutoScene k="exp" d={{"tag": "考点三", "title": "实验依据", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "两个弹簧测力计对拉", "at": "c1", "lines": ["示数{总是相等}", "{同时变化|orange}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "两个力传感器对拉", "at": "c3", "lines": ["两条图线{对称}", "时刻等大反向"], "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "c4", "text": "{时刻}大小相等"}}} />;

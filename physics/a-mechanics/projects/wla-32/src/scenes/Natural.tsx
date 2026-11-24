import React from 'react';
import {AutoScene} from '../components/auto';

export const Natural: React.FC = () => <AutoScene k="natural" d={{"tag": "考点一", "title": "固有振动与固有频率", "blocks": [{"t": "rule", "tag": "固有振动", "at": "n1", "text": "系统{不受外力}时的振动", "c": "red"}, {"t": "rule", "tag": "固有频率", "at": "n2", "text": "固有振动的{频率}", "c": "orange"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "弹簧振子", "at": "n3", "lines": ["由质量 m、劲度系数 k {决定}"], "c": "red", "size": 30}]}, {"blocks": [{"t": "panel", "title": "单摆", "at": "n3", "lines": ["由摆长 l、重力加速度 g {决定}"], "c": "orange", "size": 30}]}]}], "callout": {"label": "要点", "at": "n4", "text": "固有频率由{系统本身}决定"}}} />;

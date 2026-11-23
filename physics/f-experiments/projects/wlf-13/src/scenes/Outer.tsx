import React from 'react';
import {AutoScene} from '../components/auto';

export const Outer: React.FC = () => <AutoScene k="outer" d={{"tag": "考点四", "title": "测量电路：电流表外接法", "blocks": [{"t": "rule", "tag": "条件", "at": "o1", "text": "R_x 较小，{R_x ≪ R_V}　→　电流表{外接}", "c": "red"}, {"t": "chain", "steps": [{"at": "o2", "text": "电压表{分流}"}, {"at": "o3", "text": "电流表示数{偏大}"}, {"at": "o3", "text": "R 测量值{偏小}"}], "arrows": []}], "callout": {"label": "易错", "at": "o4", "text": "外接：电压表分流，测量值{偏小}；小电阻用外接"}}} />;

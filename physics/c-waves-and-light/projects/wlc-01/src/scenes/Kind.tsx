import React from 'react';
import {AutoScene} from '../components/auto';

export const Kind: React.FC = () => <AutoScene k="kind" d={{"tag": "考点四", "title": "横波和纵波", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "横波", "at": "k1", "lines": ["振动方向 ⊥ 传播方向", "{波峰}和{波谷}"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "纵波", "at": "k2", "lines": ["振动方向 ∥ 传播方向", "{密部}和{疏部}"], "c": "orange", "size": 34}]}]}, {"t": "text", "at": "k3", "text": "声波：纵波　　地震波：{既有横波也有纵波}", "size": 34}], "callout": {"label": "易错", "at": "k4", "text": "按{振动方向与传播方向}的关系区分"}}} />;

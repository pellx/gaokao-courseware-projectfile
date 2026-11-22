import React from 'react';
import {AutoScene} from '../components/auto';

export const Phys: React.FC = () => <AutoScene k="phys" d={{"tag": "考点一", "title": "卤代烃的物理性质与用途", "blocks": [{"t": "rule", "tag": "官能团", "at": "ph1", "text": "{碳卤键} C—X", "c": "red", "size": 33}, {"t": "items", "items": [{"at": "ph2", "text": "难溶于水，易溶于有机溶剂"}, {"at": "ph2", "text": "CH3Cl 是气体；多数密度比水{大}"}, {"at": "ph3", "text": "氟利昂：{破坏臭氧层}"}], "size": 33}], "callout": {"label": "易错", "at": "ph4", "text": "卤素是{原子}，不能直接加 AgNO3 检验"}}} />;

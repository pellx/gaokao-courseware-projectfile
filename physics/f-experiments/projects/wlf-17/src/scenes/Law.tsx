import React from 'react';
import {AutoScene} from '../components/auto';

export const Law: React.FC = () => <AutoScene k="law" d={{"tag": "考点八", "title": "实验结论", "blocks": [{"t": "big", "at": "c2", "text": "U_1/U_2 = {n_1/n_2}", "size": 72}, {"t": "rule", "tag": "理想变压器", "at": "c3", "text": "{没有能量损失}的变压器", "c": "red"}], "callout": {"label": "要点", "at": "c4", "text": "n_2 > n_1：{升压}；n_2 < n_1：降压"}}} />;

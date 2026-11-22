import React from 'react';
import {AutoScene} from '../components/auto';

export const Newalloy: React.FC = () => <AutoScene k="newalloy" d={{"tag": "考点四", "title": "新型合金", "blocks": [{"t": "rule", "tag": "储氢合金", "at": "na1", "text": "吸收 H2 形成金属氢化物，加热放出：Ti-Fe、La-Ni", "c": "red", "size": 31}, {"t": "rule", "tag": "钛合金", "at": "na2", "text": "强度高、耐腐蚀、密度小：航空航天、人造骨", "c": "orange", "size": 31}, {"t": "rule", "tag": "铝合金", "at": "na3", "text": "密度小、强度高：飞机、高铁", "c": "brown", "size": 31}, {"t": "rule", "tag": "稀土", "at": "na3", "text": "“{冶金工业的维生素|green}”", "c": "green", "size": 31}], "callout": {"label": "考法", "at": "na4", "text": "钛合金、铝合金属于{金属材料}"}}} />;

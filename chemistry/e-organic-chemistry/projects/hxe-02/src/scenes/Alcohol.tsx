import React from 'react';
import {AutoScene} from '../components/auto';

export const Alcohol: React.FC = () => <AutoScene k="alcohol" d={{"tag": "考点四", "title": "醇的命名", "blocks": [{"t": "rule", "tag": "主链与编号", "at": "al1", "text": "含{连羟基的碳}，离羟基近的一端编号", "c": "red", "size": 32}, {"t": "items", "items": [{"at": "al2", "text": "CH3CH(OH)CH3：{2-丙醇}"}, {"at": "al2", "text": "CH3CH2CH(OH)CH3：2-丁醇"}, {"at": "al3", "text": "HOCH2CH2OH：{乙二醇}；丙三醇（甘油）"}], "size": 33}], "callout": {"label": "易错", "at": "al4", "text": "编号时{羟基位次最小}"}}} />;

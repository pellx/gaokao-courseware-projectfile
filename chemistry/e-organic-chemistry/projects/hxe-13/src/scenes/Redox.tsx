import React from 'react';
import {AutoScene} from '../components/auto';

export const Redox: React.FC = () => <AutoScene k="redox" d={{"tag": "考点三", "title": "氧化反应与还原反应", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "氧化", "at": "rx1", "text": "{加氧或去氢}", "c": "red", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "还原", "at": "rx2", "text": "{加氢或去氧}", "c": "orange", "size": 34}]}]}, {"t": "items", "items": [{"at": "rx1", "text": "醇 → 醛 → 酸；银镜反应；KMnO4 氧化"}, {"at": "rx2", "text": "醛、酮 + H2 → 醇；硝基苯 → {苯胺}"}], "size": 33}], "callout": {"label": "解题方法", "at": "rx4", "text": "看{氢和氧}的增减"}}} />;

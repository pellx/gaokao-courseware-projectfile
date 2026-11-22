import React from 'react';
import {AutoScene} from '../components/auto';

export const Unstable: React.FC = () => <AutoScene k="unstable" d={{"tag": "考点一", "title": "硝酸的不稳定性", "blocks": [{"t": "big", "at": "un1", "text": "4HNO3 ═光照或△═ 4NO2↑ + O2↑ + 2H2O", "size": 42}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "保存", "at": "un2", "text": "{棕色瓶}、阴凉处、玻璃塞", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "变黄", "at": "un3", "text": "溶有 {NO2|orange}", "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "un4", "text": "浓硝酸用{玻璃塞}，不用橡胶塞"}, "beat": {"k": "kyoko", "at": "un3b", "text": "浓硝酸发黄\n= 溶了 {NO2|red}"}}} />;

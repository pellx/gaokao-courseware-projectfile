import React from 'react';
import {AutoScene} from '../components/auto';

export const Split: React.FC = () => <AutoScene k="split" d={{"tag": "考点五", "title": "电动势与内、外电压", "blocks": [{"t": "big", "at": "e3", "text": "E = {U_外} + {U_内|orange}", "size": 60}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "外电压", "at": "e1", "text": "{路端电压} U_外", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "内电压", "at": "e2", "text": "U_内 = {Ir}", "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "e4", "text": "U = {E − Ir}"}, "beat": {"k": "shades", "at": "e3b", "text": "内阻“吃掉”\n一部分{电压|red}"}}} />;

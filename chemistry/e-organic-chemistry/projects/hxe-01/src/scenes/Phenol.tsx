import React from 'react';
import {AutoScene} from '../components/auto';

export const Phenol: React.FC = () => <AutoScene k="phenol" d={{"tag": "考点五", "title": "醇与酚的区别", "blocks": [{"t": "big", "at": "ph1", "text": "—OH {直接连在苯环上} → 酚", "size": 44}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "酚", "at": "ph2", "text": "苯酚 C6H5OH", "c": "red", "size": 33}]}, {"blocks": [{"t": "rule", "tag": "醇", "at": "ph2", "text": "苯甲醇 C6H5CH2OH、{环己醇}", "c": "orange", "size": 33}]}]}], "callout": {"label": "易错", "at": "ph4", "text": "环己醇不是苯环，属于{醇}"}, "beat": {"k": "puzzle", "at": "ph2b", "text": "隔一个 CH2\n{醇酚就不同|red}"}}} />;

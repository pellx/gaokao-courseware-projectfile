import React from 'react';
import {AutoScene} from '../components/auto';

export const Ideal: React.FC = () => <AutoScene k="ideal" d={{"tag": "考点三", "title": "理想变压器", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "c1", "text": "P_入 = {P_出}", "size": 50}]}, {"blocks": [{"t": "big", "at": "c2", "text": "U_1/U_2 = {n_1/n_2|orange}", "size": 50, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "升压", "at": "c3", "text": "n_2 {>} n_1", "c": "red", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "降压", "at": "c3", "text": "n_2 {<} n_1", "c": "orange", "size": 34}]}]}], "callout": {"label": "要点", "at": "c4", "text": "匝数多的一边{电压高}"}, "beat": {"k": "height", "at": "c3b", "text": "匝数多\n电压就{高|red}"}}} />;

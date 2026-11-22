import React from 'react';
import {AutoScene} from '../components/auto';

export const Current: React.FC = () => <AutoScene k="current" d={{"tag": "考点五", "title": "外加电流法", "blocks": [{"t": "big", "at": "cu1", "text": "电解池：被保护金属接{负极}，作{阴极}", "size": 42}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "电化学", "at": "cu2", "text": "牺牲阳极、{外加电流}", "c": "red", "size": 31}]}, {"blocks": [{"t": "rule", "tag": "其他", "at": "cu3", "text": "涂层、镀层、{不锈钢|orange}", "c": "orange", "size": 31}]}]}], "callout": {"label": "易错", "at": "cu4", "text": "接{正极}成阳极，反而{加速腐蚀}"}, "beat": {"k": "nyaa", "at": "cu2b", "text": "被保护的金属\n{接负极|red}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Dissipate: React.FC = () => <AutoScene k="dissipate" d={{"tag": "考点六", "title": "能量耗散", "blocks": [{"t": "chain", "steps": [{"at": "p1", "text": "各种形式的能"}, {"at": "p1", "text": "{内能}"}, {"at": "p2", "text": "流散到环境，{难以再利用}", "c": "orange"}], "arrows": []}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "总量", "at": "p3", "text": "{不变|orange}", "c": "orange", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "品质", "at": "p3", "text": "{降低}", "c": "red", "size": 34}]}]}], "callout": {"label": "易错", "at": "p4", "text": "能量守恒，仍要{节约能源}"}, "beat": {"k": "fire", "at": "p3b", "text": "内能散入环境\n{难以再利用|red}"}}} />;

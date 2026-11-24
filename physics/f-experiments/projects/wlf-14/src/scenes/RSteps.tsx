import React from 'react';
import {AutoScene} from '../components/auto';

export const RSteps: React.FC = () => <AutoScene k="rsteps" d={{"tag": "考点七", "title": "测电阻的步骤", "blocks": [{"t": "chain", "steps": [{"at": "g1", "text": "选{倍率}"}, {"at": "g2", "text": "{欧姆调零}"}, {"at": "g2", "text": "电阻与电路{断开}"}, {"at": "g3", "text": "读数 × {倍率}"}], "arrows": []}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "偏角太小", "at": "g4", "text": "电阻大　→　换{大倍率}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "偏角太大", "at": "g4", "text": "电阻小　→　换{小倍率}", "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "g5", "text": "{换倍率必须重新欧姆调零}"}}} />;

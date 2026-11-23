import React from 'react';
import {AutoScene} from '../components/auto';

export const LineLoss: React.FC = () => <AutoScene k="lineloss" d={{"tag": "考点六", "title": "输电的基本要求与损失", "blocks": [{"t": "rule", "tag": "基本要求", "at": "f1", "text": "{可靠、保质、经济}", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "f2", "text": "功率损失\nP_损 = {I^2r}", "size": 44}]}, {"blocks": [{"t": "big", "at": "f3", "text": "电压损失\nΔU = {Ir|orange}", "size": 44, "c": "orange", "soft": "orangeSoft"}]}]}], "callout": {"label": "易错", "at": "f4", "text": "I 是{输电线中的电流}"}, "beat": {"k": "kotatsu", "at": "f3b", "text": "电流过电阻\n{发热|red}"}}} />;

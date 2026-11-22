import React from 'react';
import {AutoScene} from '../components/auto';

export const Env: React.FC = () => <AutoScene k="env" d={{"tag": "考点三", "title": "环境决定补什么", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "酸性", "at": "en1", "text": "只补 {H^+} 和 H2O", "c": "red", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "碱性", "at": "en1", "text": "只补 {OH^-|orange} 和 H2O", "c": "orange", "size": 34}]}]}, {"t": "items", "items": [{"at": "en2", "text": "Fe：+3 → +6（失 3e^-）　Cl：+1 → −1（得 2e^-）"}, {"at": "en3", "text": "电子：2Fe(OH)3 ～ 3ClO^-　电荷：左边补 {4OH^-|orange}　原子：右边补 5H2O"}], "size": 31}, {"t": "big", "at": "en3", "text": "3ClO^- + 2Fe(OH)3 + 4OH^- = 2FeO4^2- + 3Cl^- + 5H2O", "size": 38}], "callout": {"label": "易错", "at": "en4", "text": "酸性里出现 OH^-、碱性里出现 H^+ → {零分}"}}} />;

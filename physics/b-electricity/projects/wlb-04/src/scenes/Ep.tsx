import React from 'react';
import {AutoScene} from '../components/auto';

export const Ep: React.FC = () => <AutoScene k="ep" d={{"tag": "考点七", "title": "电势能与电势", "blocks": [{"t": "big", "at": "q1", "text": "E_p = {qφ}", "size": 60}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "正电荷", "at": "q2", "text": "电势高处 E_p {大}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "负电荷", "at": "q3", "text": "电势高处 E_p {小|orange}", "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "q4", "text": "先看电荷{正负}"}, "beat": {"k": "a3", "at": "q3b", "text": "电势高处\n正电荷 E_p {大|red}，负电荷 E_p {小|orange}"}}} />;

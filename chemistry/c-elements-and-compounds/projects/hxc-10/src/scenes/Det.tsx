import React from 'react';
import {AutoScene} from '../components/auto';

export const Det: React.FC = () => <AutoScene k="det" d={{"tag": "考点七", "title": "NH4^+ 的检验", "blocks": [{"t": "chain", "steps": [{"at": "de1", "text": "取样"}, {"at": "de1", "text": "加 NaOH 溶液\n{并加热}", "c": "red"}, {"at": "de1", "text": "{湿润}红色石蕊试纸\n放在试管口", "c": "red"}, {"at": "de1", "text": "试纸变色\n→ 含 NH4^+", "c": "green"}], "arrows": [], "center": true, "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "关键一", "at": "de2", "text": "要{加热}：稀溶液中 NH3 不易逸出", "c": "red", "size": 30}]}, {"blocks": [{"t": "rule", "tag": "关键二", "at": "de2", "text": "要{湿润}：NH3 溶于水才显碱性", "c": "orange", "size": 30}]}]}], "callout": {"label": "答题模板", "at": "de3", "text": "加 NaOH 溶液、{加热}，{湿润}的红色石蕊试纸放管口"}}} />;

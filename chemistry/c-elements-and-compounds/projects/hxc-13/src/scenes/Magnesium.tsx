import React from 'react';
import {AutoScene} from '../components/auto';

export const Magnesium: React.FC = () => <AutoScene k="magnesium" d={{"tag": "考点六", "title": "海水提镁", "blocks": [{"t": "chain", "steps": [{"at": "mg1", "text": "海水"}, {"at": "mg1", "text": "Mg(OH)2", "c": "orange"}, {"at": "mg2", "text": "MgCl2 溶液"}, {"at": "mg2", "text": "MgCl2·6H2O"}, {"at": "mg3", "text": "无水 MgCl2", "c": "red"}, {"at": "mg3", "text": "Mg", "c": "red"}], "arrows": ["石灰乳", "盐酸", "结晶", "{HCl 气流}△", "电解熔融"], "center": true, "size": 30, "gap": 10}, {"t": "big", "at": "mg3", "text": "在 {HCl 气流}中加热：抑制 MgCl2 水解", "size": 40}], "callout": {"label": "易错", "at": "mg4", "text": "MgCl2·6H2O 直接加热{得不到无水 MgCl2}"}, "beat": {"k": "lemon", "at": "mg3b", "text": "海水是咸的\n还溶着 {Mg^2+ 和 Br^-|red}"}}} />;

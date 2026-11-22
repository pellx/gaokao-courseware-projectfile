import React from 'react';
import {AutoScene} from '../components/auto';

export const Addition: React.FC = () => <AutoScene k="addition" d={{"tag": "考点三", "title": "苯的加成反应", "blocks": [{"t": "big", "at": "ad1", "text": "C6H6 + 3H2 → C6H12（{环己烷}，Ni、加热）", "size": 40}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "定量", "at": "ad2", "text": "1 mol 苯 ～ {3 mol H2}", "c": "red", "size": 33}]}, {"blocks": [{"t": "rule", "tag": "燃烧", "at": "ad3", "text": "火焰明亮，{浓烟}", "c": "orange", "size": 33}]}]}], "callout": {"label": "考法", "at": "ad4", "text": "定量计算：苯环按 {3 mol H2}"}}} />;

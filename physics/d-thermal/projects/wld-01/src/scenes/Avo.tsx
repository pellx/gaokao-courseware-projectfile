import React from 'react';
import {AutoScene} from '../components/auto';

export const Avo: React.FC = () => <AutoScene k="avo" d={{"tag": "考点二", "title": "阿伏加德罗常数", "blocks": [{"t": "big", "at": "a1", "text": "N_A = {6.02×10^23 mol^-1}", "size": 60}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "宏观量", "at": "a2", "lines": ["摩尔质量 M", "摩尔体积 V_mol", "物体质量、体积"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "big", "at": "a3", "text": "桥梁\n{N_A}", "size": 44}]}, {"blocks": [{"t": "panel", "title": "微观量", "at": "a2", "lines": ["分子质量 m_0", "分子体积 V_0", "分子个数 N"], "c": "red", "size": 32}]}]}], "callout": {"label": "要点", "at": "a4", "text": "N_A 的单位是 {mol^-1}"}}} />;

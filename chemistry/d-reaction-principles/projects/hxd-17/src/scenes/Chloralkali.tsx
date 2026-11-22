import React from 'react';
import {AutoScene} from '../components/auto';

export const Chloralkali: React.FC = () => <AutoScene k="chloralkali" d={{"tag": "考点一", "title": "氯碱工业", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "阳极", "at": "cl1", "lines": ["2Cl^- − 2e^- = {Cl2↑}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "阴极", "at": "cl1", "lines": ["2H2O + 2e^- = H2↑ + {2OH^-}"], "c": "orange", "size": 32}]}]}, {"t": "rule", "tag": "阳离子交换膜", "at": "cl3", "text": "只让 {Na^+} 通过 → NaOH 在阴极区；防 Cl2 与 NaOH 反应、防 H2 与 Cl2 混合", "c": "red", "size": 30}], "callout": {"label": "易错", "at": "cl4", "text": "精制：Na2CO3 加在 {BaCl2 之后}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Essence: React.FC = () => <AutoScene k="essence" d={{"tag": "考点一", "title": "盐类水解的实质", "blocks": [{"t": "big", "at": "es1", "text": "弱离子 + 水电离的 H^+ / OH^- → {弱电解质}", "size": 40}, {"t": "text", "at": "es2", "text": "CH3COO^- + H2O ⇌ CH3COOH + OH^-　→　溶液显{碱性}", "size": 34, "center": true}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "对水", "at": "es3", "text": "{促进}水的电离", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "热效应", "at": "es3", "text": "{吸热}，程度很小", "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "es4", "text": "水解很微弱：c(CH3COO^-) {远大于} c(CH3COOH)"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Weak: React.FC = () => <AutoScene k="weak" d={{"tag": "考点四", "title": "强电解质与弱电解质初识", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "强电解质（完全电离，用 =）", "at": "wk1", "lines": ["强酸：HCl、H2SO4、HNO3", "强碱：NaOH、KOH、Ba(OH)2", "绝大多数盐（含 {BaSO4}）"], "c": "red"}]}, {"blocks": [{"t": "panel", "title": "弱电解质（部分电离，用 ⇌）", "at": "wk2", "lines": ["弱酸：CH3COOH、H2CO3", "弱碱：NH3·H2O", "水"], "c": "orange"}]}]}, {"t": "big", "at": "wk3", "text": "CH3COOH ⇌ CH3COO^- + H^+　　H2CO3 ⇌ H^+ + HCO3^-（分步）", "size": 34}], "callout": {"label": "易错", "at": "wk4", "text": "强弱看{电离程度}，不看溶解度：BaSO4 是强电解质"}}} />;

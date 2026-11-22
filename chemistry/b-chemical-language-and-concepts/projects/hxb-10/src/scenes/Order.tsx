import React from 'react';
import {AutoScene} from '../components/auto';

export const Order: React.FC = () => <AutoScene k="order" d={{"tag": "考点六", "title": "反应的先后", "blocks": [{"t": "big", "at": "or1", "text": "还原性：{Fe^2+ > Br^-} → Cl2 先氧化 Fe^2+", "size": 40}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "少量 Cl2", "at": "or2", "lines": ["只氧化 Fe^2+", "2Fe^2+ + Cl2 = 2Fe^3+ + 2Cl^-"], "c": "orange", "size": 30}]}, {"blocks": [{"t": "panel", "title": "足量 Cl2", "at": "or3", "lines": ["Fe^2+ : Br^- = {1 : 2}", "2Fe^2+ + 4Br^- + 3Cl2 = 2Fe^3+ + 2Br2 + 6Cl^-"], "c": "red", "size": 30}]}]}], "callout": {"label": "易错", "at": "or4", "text": "足量时 Fe^2+ 与 Br^- 的比例必须是 {1 : 2}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Kw: React.FC = () => <AutoScene k="kw" d={{"tag": "考点一", "title": "水的离子积 K_w", "blocks": [{"t": "big", "at": "kw1", "text": "H2O ⇌ H^+ + OH^-　K_w = {c(H^+)·c(OH^-)}", "size": 42}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "25 ℃", "at": "kw2", "text": "K_w = {1×10^-14}", "c": "red", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "只与", "at": "kw3", "text": "{温度}有关，升温增大", "c": "orange", "size": 34}]}]}], "callout": {"label": "易错", "at": "kw4", "text": "K_w 适用于{任何稀水溶液}，酸中也有 OH^-"}}} />;

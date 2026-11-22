import React from 'react';
import {AutoScene} from '../components/auto';

export const Hydro: React.FC = () => <AutoScene k="hydro" d={{"tag": "考点六", "title": "Fe^3+ 的水解", "blocks": [{"t": "big", "at": "hy1", "text": "Fe^3+ + 3H2O ⇌ Fe(OH)3 + 3H^+（{酸性}）", "size": 40}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "配制", "at": "hy2", "text": "溶于{浓盐酸}再稀释：抑制水解", "c": "orange", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "蒸干灼烧", "at": "hy3", "text": "→ Fe(OH)3 → {Fe2O3}", "c": "red", "size": 32}]}]}], "callout": {"label": "易错", "at": "hy4", "text": "FeCl3 加盐酸：{抑制水解}；FeSO4 加铁粉：{防止氧化}"}}} />;

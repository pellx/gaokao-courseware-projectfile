import React from 'react';
import {AutoScene} from '../components/auto';

export const Hinder: React.FC = () => <AutoScene k="hinder" d={{"tag": "考点七", "title": "“阻碍”的含义", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "增反减同", "at": "g2", "lines": ["Φ 增加：{反向}", "Φ 减少：{同向}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "来拒去留", "at": "g3", "lines": ["靠近：{斥力}", "远离：{引力}"], "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "g4", "text": "阻碍不是阻止，只是{延缓}"}, "beat": {"k": "tsun", "at": "g3b", "text": "靠近就推开，要走又拉住\n{来拒去留|red}"}}} />;

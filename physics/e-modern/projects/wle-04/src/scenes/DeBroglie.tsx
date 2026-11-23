import React from 'react';
import {AutoScene} from '../components/auto';

export const DeBroglie: React.FC = () => <AutoScene k="debroglie" d={{"tag": "考点五", "title": "德布罗意假设", "blocks": [{"t": "rule", "tag": "假设", "at": "e1", "text": "{实物粒子}也具有波动性", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "e2", "text": "ν = {ε/h}", "size": 52}]}, {"blocks": [{"t": "big", "at": "e2", "text": "λ = {h/p}", "size": 52}]}]}, {"t": "text", "at": "e3", "text": "这种波叫{物质波}（德布罗意波）", "size": 34}], "callout": {"label": "要点", "at": "e4", "text": "λ = h/p：动量越大，波长{越短}"}}} />;

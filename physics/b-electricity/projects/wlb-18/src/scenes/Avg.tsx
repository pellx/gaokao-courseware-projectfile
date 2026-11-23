import React from 'react';
import {AutoScene} from '../components/auto';

export const Avg: React.FC = () => <AutoScene k="avg" d={{"tag": "考点五", "title": "平均值与瞬时值", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "E = nΔΦ/Δt", "at": "e1", "lines": ["Δt 内的{平均值}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "E = Blv", "at": "e2", "lines": ["v 为瞬时速度：{瞬时值}", "v 为平均速度：平均值"], "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "e4", "text": "平均用 nΔΦ/Δt，瞬时用 {Blv}"}}} />;

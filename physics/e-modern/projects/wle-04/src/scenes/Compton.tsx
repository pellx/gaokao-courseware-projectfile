import React from 'react';
import {AutoScene} from '../components/auto';

export const Compton: React.FC = () => <AutoScene k="compton" d={{"tag": "考点一", "title": "康普顿效应", "blocks": [{"t": "chain", "steps": [{"at": "a1", "text": "X 射线\n入射波长 λ_0"}, {"at": "a1", "text": "石墨\n散射"}, {"at": "a2", "text": "散射线\n{λ_0} 和 {λ > λ_0}", "c": "orange"}], "arrows": []}, {"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": true, "at": "a2", "text": "实验：出现{波长更长}的成分"}]}, {"blocks": [{"t": "mark", "ok": false, "at": "a4", "text": "经典理论：波长不变"}]}]}], "callout": {"label": "要点", "at": "a5", "text": "散射后出现{波长变长}的成分"}}} />;

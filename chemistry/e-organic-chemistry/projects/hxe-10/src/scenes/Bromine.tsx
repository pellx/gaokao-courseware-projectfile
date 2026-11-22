import React from 'react';
import {AutoScene} from '../components/auto';

export const Bromine: React.FC = () => <AutoScene k="bromine" d={{"tag": "考点七", "title": "苯酚的取代与显色", "blocks": [{"t": "big", "at": "br1", "text": "C6H5OH + 3Br2 → 2,4,6-三溴苯酚↓（{白色}）+ 3HBr", "size": 36}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "定量", "at": "br2", "text": "1 mol 苯酚 ～ {3 mol Br2}（邻、对位）", "c": "red", "size": 31}]}, {"blocks": [{"t": "rule", "tag": "显色", "at": "br3", "text": "遇 FeCl3 {显紫色}", "c": "orange", "size": 31}]}]}], "callout": {"label": "易错", "at": "br4", "text": "苯酚用{浓溴水}；苯用液溴 + FeBr3"}, "beat": {"k": "star", "at": "br3b", "text": "邻、对位\n{三个 H 都换成 Br|red}"}}} />;

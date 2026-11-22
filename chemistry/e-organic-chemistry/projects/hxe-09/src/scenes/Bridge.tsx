import React from 'react';
import {AutoScene} from '../components/auto';

export const Bridge: React.FC = () => <AutoScene k="bridge" d={{"tag": "考点六", "title": "卤代烃的桥梁作用", "blocks": [{"t": "chain", "steps": [{"at": "br1", "text": "烃"}, {"at": "br1", "text": "{卤代烃}"}, {"at": "br2", "text": "醇 / 烯烃"}], "arrows": ["取代或加成", "水解或消去"], "center": true, "size": 38}, {"t": "text", "at": "br3", "text": "CH2=CH2 → CH2BrCH2Br → {HOCH2CH2OH}", "size": 36, "center": true}], "callout": {"label": "解题方法", "at": "br4", "text": "常见路线：{消去 → 加成 → 水解}"}}} />;

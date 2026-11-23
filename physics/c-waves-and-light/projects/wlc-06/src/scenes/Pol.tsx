import React from 'react';
import {AutoScene} from '../components/auto';

export const Pol: React.FC = () => <AutoScene k="pol" d={{"tag": "考点七", "title": "光的偏振", "blocks": [{"t": "chain", "steps": [{"at": "g1", "text": "自然光：一切方向振动"}, {"at": "g2", "text": "偏振片", "c": "orange"}, {"at": "g2", "text": "偏振光：一个方向", "c": "red"}], "arrows": []}, {"t": "text", "at": "g3", "text": "两偏振片透振方向{垂直}：光不能通过", "size": 36}], "callout": {"label": "要点", "at": "g4", "text": "转动偏振片，{时亮时暗}"}, "beat": {"k": "sunglasses", "at": "g3b", "text": "偏振片只放行\n{一个方向|red}的振动"}}} />;

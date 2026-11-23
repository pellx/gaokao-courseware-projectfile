import React from 'react';
import {AutoScene} from '../components/auto';

export const Oblique: React.FC = () => <AutoScene k="oblique" d={{"tag": "考点八", "title": "斜抛运动", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "水平方向", "at": "h2", "lines": ["{匀速直线}", "v_x = v_0cosθ"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "竖直方向", "at": "h3", "lines": ["{竖直上抛}", "v_y0 = v_0sinθ，a = g"], "c": "orange", "size": 34}]}]}], "callout": {"label": "要点", "at": "h4", "text": "斜抛轨迹也是{抛物线}"}, "beat": {"k": "ball", "at": "h3b", "text": "投篮\n水平匀速 + {竖直上抛|red}"}}} />;

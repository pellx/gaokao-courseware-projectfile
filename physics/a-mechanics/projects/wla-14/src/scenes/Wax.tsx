import React from 'react';
import {AutoScene} from '../components/auto';

export const Wax: React.FC = () => <AutoScene k="wax" d={{"tag": "考点七", "title": "蜡块的运动", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "竖直", "at": "g1", "text": "匀速上升 v_y", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "水平", "at": "g2", "text": "匀速移动 v_x", "c": "orange", "size": 32}]}]}, {"t": "big", "at": "g3", "text": "y = {(v_y/v_x)x}", "size": 48}], "callout": {"label": "要点", "at": "g4", "text": "合运动是{匀速直线运动}"}}} />;

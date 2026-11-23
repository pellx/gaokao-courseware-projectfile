import React from 'react';
import {AutoScene} from '../components/auto';

export const Oblique: React.FC = () => <AutoScene k="oblique" d={{"tag": "考点七", "title": "对心碰撞与非对心碰撞", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "正碰（对心碰撞）", "at": "o1", "lines": ["速度沿{球心连线}", {"at": "o3", "text": "碰后仍在{同一直线}"}], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "斜碰（非对心碰撞）", "at": "o2", "lines": ["速度{不沿}球心连线", {"at": "o3", "text": "碰后{不在同一直线}"}], "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "o4", "text": "斜碰动量守恒按{矢量}成立"}}} />;

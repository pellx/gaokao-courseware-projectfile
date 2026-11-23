import React from 'react';
import {AutoScene} from '../components/auto';

export const Tiny: React.FC = () => <AutoScene k="tiny" d={{"tag": "考点五", "title": "微小形变的观察", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "光的反射", "at": "t2", "lines": ["桌面放两块平面镜", "压桌面，墙上{光点移动}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "细管液面", "at": "t3", "lines": ["捏装满水的玻璃瓶", "细管中{水面上升|orange}"], "c": "orange", "size": 32}]}]}, {"t": "big", "at": "t4", "text": "{放大}微小形变", "size": 44}], "callout": {"label": "要点", "at": "t4", "text": "“硬”的物体受力也会{形变}"}}} />;

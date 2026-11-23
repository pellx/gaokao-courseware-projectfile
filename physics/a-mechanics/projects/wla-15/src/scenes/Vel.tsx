import React from 'react';
import {AutoScene} from '../components/auto';

export const Vel: React.FC = () => <AutoScene k="vel" d={{"tag": "考点三", "title": "平抛运动的速度", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "c1", "text": "v_x = {v_0}", "size": 44}]}, {"blocks": [{"t": "big", "at": "c1", "text": "v_y = {gt|orange}", "size": 44, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "big", "at": "c2", "text": "v = √(v_0^2 + v_y^2)", "size": 40}, {"t": "big", "at": "c3", "text": "tanθ = {gt/v_0}", "size": 44}], "callout": {"label": "要点", "at": "c4", "text": "时间越长，速度越{偏向竖直}"}}} />;

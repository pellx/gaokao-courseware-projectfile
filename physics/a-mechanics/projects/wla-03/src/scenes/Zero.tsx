import React from 'react';
import {AutoScene} from '../components/auto';

export const Zero: React.FC = () => <AutoScene k="zero" d={{"tag": "考点八", "title": "初速度为 0 的匀加速直线运动", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "o1", "text": "v = {at}", "size": 52}]}, {"blocks": [{"t": "big", "at": "o1", "text": "x = {½at^2}", "size": 52, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "items", "items": [{"at": "o2", "text": "v ∝ t：速度与时间成{正比}"}, {"at": "o3", "text": "x ∝ t^2：1 s、2 s、3 s 内位移之比 {1 : 4 : 9}"}], "size": 34}], "callout": {"label": "要点", "at": "o4", "text": "只适用于{初速度为 0} 的匀加速"}, "beat": {"k": "depart", "at": "o3b", "text": "由静止出发\nv ∝ {t|red}　x ∝ {t^2|orange}"}}} />;

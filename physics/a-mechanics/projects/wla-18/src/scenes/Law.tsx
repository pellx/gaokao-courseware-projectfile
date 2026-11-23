import React from 'react';
import {AutoScene} from '../components/auto';

export const Law: React.FC = () => <AutoScene k="law" d={{"tag": "考点八", "title": "万有引力定律", "blocks": [{"t": "big", "at": "l2", "text": "F = {Gm_1m_2/r^2}", "size": 60}, {"t": "items", "items": [{"at": "l3", "text": "r：两{质点}间的距离"}, {"at": "l4", "text": "均匀球体：r 取{两球心}间距离"}], "size": 32}], "callout": {"label": "要点", "at": "l4", "text": "均匀球体，r 取{球心距}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Law: React.FC = () => <AutoScene k="law" d={{"tag": "考点五", "title": "自由落体运动的规律", "blocks": [{"t": "text", "at": "l1", "text": "v_0 = 0，a = g", "size": 36}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "l2", "text": "{v = gt}", "size": 46}]}, {"blocks": [{"t": "big", "at": "l2", "text": "{h = ½gt^2}", "size": 46}]}, {"blocks": [{"t": "big", "at": "l2", "text": "{v^2 = 2gh}", "size": 46}]}]}, {"t": "rule", "tag": "推论", "at": "l3", "text": "Δh = {gT^2}", "c": "orange", "size": 34}], "callout": {"label": "要点", "at": "l4", "text": "匀变速直线运动的{特例}，规律和推论都适用"}}} />;

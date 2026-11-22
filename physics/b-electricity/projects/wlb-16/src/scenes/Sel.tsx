import React from 'react';
import {AutoScene} from '../components/auto';

export const Sel: React.FC = () => <AutoScene k="sel" d={{"tag": "考点三", "title": "速度选择器", "blocks": [{"t": "rule", "tag": "构造", "at": "v1", "text": "电场与磁场{相互垂直}", "c": "red", "size": 34}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "v2", "text": "平衡：{qE = qvB}", "size": 44}]}, {"blocks": [{"t": "big", "at": "v3", "text": "v = {E/B|orange}", "size": 50, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "v3", "text": "速度不等于 E/B 的粒子发生偏转，不能沿直线通过", "size": 30}], "callout": {"label": "要点", "at": "v4", "text": "与粒子的{电性、电荷量、质量无关}"}}} />;

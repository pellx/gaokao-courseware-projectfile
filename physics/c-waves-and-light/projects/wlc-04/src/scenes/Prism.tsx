import React from 'react';
import {AutoScene} from '../components/auto';

export const Prism: React.FC = () => <AutoScene k="prism" d={{"tag": "考点五", "title": "全反射棱镜", "blocks": [{"t": "rule", "tag": "结构", "at": "e1", "text": "截面为{等腰直角三角形}", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "e2", "text": "改变 {90°}", "size": 50}]}, {"blocks": [{"t": "big", "at": "e2", "text": "改变 {180°|orange}", "size": 50, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "text", "at": "e3", "text": "几乎{没有能量损失}", "size": 34}], "callout": {"label": "要点", "at": "e4", "text": "效果{比平面镜好}"}}} />;

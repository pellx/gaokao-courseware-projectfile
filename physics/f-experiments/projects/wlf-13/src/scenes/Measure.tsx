import React from 'react';
import {AutoScene} from '../components/auto';

export const Measure: React.FC = () => <AutoScene k="measure" d={{"tag": "考点二", "title": "长度与直径的测量", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "有效长度 l", "at": "m1", "text": "{毫米刻度尺}，测 3 次取平均", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "直径 d", "at": "m2", "text": "{螺旋测微器}，不同位置测 3 次取平均", "c": "orange", "size": 32}]}]}, {"t": "text", "at": "m3", "text": "不同位置测量：金属丝各处粗细可能{不均匀}", "size": 32}], "callout": {"label": "要点", "at": "m4", "text": "螺旋测微器估读到 {0.001 mm}"}}} />;

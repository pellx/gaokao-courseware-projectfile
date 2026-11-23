import React from 'react';
import {AutoScene} from '../components/auto';

export const Error: React.FC = () => <AutoScene k="error" d={{"tag": "考点八", "title": "误差来源", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "系统误差", "at": "e1", "lines": ["电流表外接，电压表分流", {"at": "e1", "text": "ρ 测量值{偏小}"}], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "偶然误差", "at": "e3", "lines": ["长度、电表读数", "多次测量取平均、图像法"], "c": "orange", "size": 32}]}]}, {"t": "big", "at": "e2", "text": "直径以{平方}出现，对结果影响{最大}", "size": 40}], "callout": {"label": "要点", "at": "e4", "text": "外接使 ρ {偏小}；直径影响{最大}"}, "beat": {"k": "laugh", "at": "e3b", "text": "先别得意\n想想{误差往哪边偏|red}"}}} />;

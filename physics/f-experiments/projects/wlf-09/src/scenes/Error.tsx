import React from 'react';
import {AutoScene} from '../components/auto';

export const Error: React.FC = () => <AutoScene k="error" d={{"tag": "考点八", "title": "误差来源与实验结论", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "系统误差", "at": "e1", "lines": ["空气阻力", "纸带与限位孔的摩擦", {"at": "e2", "text": "ΔE_k {略小于} ΔE_p"}], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "偶然误差", "at": "e3", "lines": ["测量下落高度", "读取点迹位置", "多次测量取平均"], "c": "orange", "size": 32}]}]}, {"t": "big", "at": "e4", "text": "误差允许范围内：{ΔE_p减 = ΔE_k增}", "size": 40}], "callout": {"label": "要点", "at": "e4", "text": "在误差允许范围内，{机械能守恒}；ΔE_k 偏大说明有错误"}, "beat": {"k": "party", "at": "e3b", "text": "误差允许范围内\n{机械能守恒|red}"}}} />;

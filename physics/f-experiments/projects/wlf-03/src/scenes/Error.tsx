import React from 'react';
import {AutoScene} from '../components/auto';

export const Error: React.FC = () => <AutoScene k="error" d={{"tag": "考点八", "title": "实验结论与误差", "blocks": [{"t": "big", "at": "e2", "text": "v-t 图像为倾斜直线　→　{匀加速直线运动}", "size": 40}, {"t": "panel", "title": "误差来源", "at": "e3", "lines": ["长度测量", "平均速度代替瞬时速度", "描点作图"], "c": "orange", "size": 32}], "callout": {"label": "要点", "at": "e4", "text": "多组数据 + 图像法，{减小偶然误差}"}, "beat": {"k": "pose", "at": "e3b", "text": "倾斜直线\n{匀加速直线运动|red}"}}} />;

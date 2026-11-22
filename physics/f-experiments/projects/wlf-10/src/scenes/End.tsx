import React from 'react';
import {AutoScene} from '../components/auto';

export const End: React.FC = () => <AutoScene k="end" d={{"tag": "考点八", "title": "实验结论与误差", "blocks": [{"t": "big", "at": "e1", "text": "误差允许范围内：{碰前总动量 = 碰后总动量}", "size": 40}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "系统误差", "at": "e2", "lines": ["摩擦", "导轨不水平", "斜槽末端不水平"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "偶然误差", "at": "e3", "lines": ["速度测量", "落点位置测量", "多次实验取平均"], "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "e4", "text": "装置不水平是{系统误差}，靠调节减小"}}} />;

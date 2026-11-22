import React from 'react';
import {AutoScene} from '../components/auto';

export const Result: React.FC = () => <AutoScene k="result" d={{"tag": "考点七", "title": "实验结论", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "Φ 增大", "at": "c1", "text": "感应电流的磁场与原磁场{相反}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "Φ 减小", "at": "c2", "text": "感应电流的磁场与原磁场{相同|orange}", "c": "orange", "size": 32}]}]}, {"t": "big", "at": "c3", "text": "{增反减同}", "size": 72}], "callout": {"label": "要点", "at": "c4", "text": "说的是{感应电流的磁场}与原磁场的关系"}}} />;

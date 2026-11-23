import React from 'react';
import {AutoScene} from '../components/auto';

export const Error: React.FC = () => <AutoScene k="error" d={{"tag": "考点七", "title": "实验结论与误差", "blocks": [{"t": "big", "at": "e1", "text": "弹性限度内：{F = kx}", "size": 52}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "偶然误差", "at": "e2", "lines": ["长度测量", "描点作图", "多组数据 + 图像法"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "弹簧自重", "at": "e3", "lines": ["图线可能不过原点", {"at": "e4", "text": "{斜率不变}，k 不受影响"}], "c": "red", "size": 32}]}]}], "callout": {"label": "要点", "at": "e4", "text": "自重使图线{平移}，{不影响斜率}"}, "beat": {"k": "cat", "at": "e3b", "text": "弹性限度内\n{F = kx|red}"}}} />;

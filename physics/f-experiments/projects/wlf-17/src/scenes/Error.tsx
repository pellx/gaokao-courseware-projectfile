import React from 'react';
import {AutoScene} from '../components/auto';

export const Error: React.FC = () => <AutoScene k="error" d={{"tag": "考点七", "title": "误差来源", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "能量损失", "at": "e2", "lines": ["线圈电阻发热", "铁芯涡流", "漏磁"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "big", "at": "e3", "text": "实测 U_2 {略小于}按匝数比算出的值", "size": 36}]}]}], "callout": {"label": "要点", "at": "e4", "text": "偏差{总偏向一侧}：系统误差"}}} />;

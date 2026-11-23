import React from 'react';
import {AutoScene} from '../components/auto';

export const Method: React.FC = () => <AutoScene k="method" d={{"tag": "考点七", "title": "伽利略的科学方法", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "e1", "text": "{实验}", "size": 52}]}, {"blocks": [{"t": "big", "at": "e1", "text": "+", "size": 52, "c": "muted"}]}, {"blocks": [{"t": "big", "at": "e1", "text": "{逻辑推理|orange}", "size": 52, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "rule", "tag": "意义", "at": "e2", "text": "开创{近代物理学}的研究方法", "c": "red", "size": 34}, {"t": "chain", "steps": [{"at": "e3", "text": "思辨", "c": "orange"}, {"at": "e3", "text": "{实验和测量}", "c": "red"}], "arrows": [], "center": true, "size": 34}], "callout": {"label": "要点", "at": "e4", "text": "{实验 + 逻辑推理}"}}} />;

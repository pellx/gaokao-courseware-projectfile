import React from 'react';
import {AutoScene} from '../components/auto';

export const Method: React.FC = () => <AutoScene k="method" d={{"tag": "考点一", "title": "物理学的研究方法", "blocks": [{"t": "rule", "tag": "方法", "at": "a1", "text": "{实验} + {科学推理}", "c": "red", "size": 40}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "a2", "text": "突出{主要因素}", "size": 44}]}, {"blocks": [{"t": "big", "at": "a2", "text": "忽略{次要因素|orange}", "size": 44, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "rule", "tag": "模型", "at": "a3", "text": "{理想化物理模型}：质点、光滑平面、轻绳……", "c": "orange", "size": 34}], "callout": {"label": "要点", "at": "a4", "text": "理想化模型是{科学抽象}，现实中不存在"}}} />;

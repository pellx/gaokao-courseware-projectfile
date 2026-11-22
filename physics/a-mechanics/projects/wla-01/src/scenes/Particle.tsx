import React from 'react';
import {AutoScene} from '../components/auto';

export const Particle: React.FC = () => <AutoScene k="particle" d={{"tag": "考点二", "title": "质点", "blocks": [{"t": "rule", "tag": "定义", "at": "p1", "text": "用来代替物体的{有质量的点}", "c": "red", "size": 38}, {"t": "text", "at": "p2", "text": "只有质量，没有大小和形状 —— {理想化模型|orange}", "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "能看成质点", "at": "p3", "lines": ["大小、形状对问题的影响{可忽略}", "例：研究地球公转"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "不能看成质点", "at": "p3", "lines": ["大小、形状{不能忽略}", "例：研究地球自转"], "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "p4", "text": "能否看成质点看{研究的问题}，不看物体大小"}, "beat": {"k": "stage", "at": "p3b", "text": "只看换位置：{质点|red}\n要看手指动作：{不是质点|orange}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Uniform: React.FC = () => <AutoScene k="uniform" d={{"tag": "考点七", "title": "匀强电场", "blocks": [{"t": "rule", "tag": "定义", "at": "u1", "text": "各点 E 的{大小、方向都相同}", "c": "red", "size": 34}, {"t": "rule", "tag": "电场线", "at": "u2", "text": "{等间距平行直线}", "c": "orange", "size": 34}, {"t": "text", "at": "u3", "text": "实例：带等量异种电荷的平行金属板之间（{边缘除外}）", "size": 30}], "callout": {"label": "要点", "at": "u4", "text": "大小、方向{都相同}"}}} />;

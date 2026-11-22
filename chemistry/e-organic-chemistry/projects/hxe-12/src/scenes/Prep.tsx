import React from 'react';
import {AutoScene} from '../components/auto';

export const Prep: React.FC = () => <AutoScene k="prep" d={{"tag": "考点三", "title": "乙酸乙酯的制备", "blocks": [{"t": "rule", "tag": "顺序", "at": "pr1", "text": "乙醇 → {浓硫酸（慢加）} → 乙酸", "c": "red", "size": 32}, {"t": "rule", "tag": "饱和 Na2CO3", "at": "pr2", "text": "中和乙酸、溶解乙醇、{降低酯的溶解度}", "c": "orange", "size": 31}, {"t": "text", "at": "pr3", "text": "导管在液面{上方}防倒吸；产物在{上层}", "size": 32, "center": true}], "callout": {"label": "易错", "at": "pr4", "text": "不能用 {NaOH 溶液}收集"}, "beat": {"k": "cake", "at": "pr3b", "text": "加料顺序\n{错了就不成|red}"}}} />;

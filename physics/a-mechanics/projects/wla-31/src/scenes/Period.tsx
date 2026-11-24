import React from 'react';
import {AutoScene} from '../components/auto';

export const Period: React.FC = () => <AutoScene k="period" d={{"tag": "考点六", "title": "单摆的周期公式", "blocks": [{"t": "big", "at": "p1", "text": "{T = 2π√(l/g)}", "size": 64}, {"t": "rule", "tag": "摆长 l", "at": "p2", "text": "悬点到{球心}的距离", "c": "orange"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "有关", "at": "p3", "lines": ["摆长 l", "重力加速度 g"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "无关", "at": "p4", "lines": ["振幅（小摆角）", "摆球质量"], "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "p4", "text": "周期与{振幅、质量}无关"}, "beat": {"k": "four", "at": "p3b", "text": "谁坐上去都一样\n周期与{质量|red}无关"}}} />;

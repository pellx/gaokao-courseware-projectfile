import React from 'react';
import {AutoScene} from '../components/auto';

export const Struct: React.FC = () => <AutoScene k="struct" d={{"tag": "考点三", "title": "晶体的微观结构", "blocks": [{"t": "rule", "tag": "排列", "at": "t1", "text": "微粒在空间按{一定规则}整齐排列", "c": "red"}, {"t": "rule", "tag": "运动", "at": "t2", "text": "在平衡位置附近{振动}", "c": "orange"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "t3", "text": "金刚石：{坚硬}", "size": 40}]}, {"blocks": [{"t": "big", "at": "t3", "text": "石墨：{柔软|orange}", "size": 40, "c": "orange", "soft": "orangeSoft"}]}]}], "callout": {"label": "要点", "at": "t4", "text": "各向异性 ← 不同方向{排列不同}"}, "beat": {"k": "swap", "at": "t3b", "text": "同样的“材料”\n排列不同，{性质不同|red}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Brown: React.FC = () => <AutoScene k="brown" d={{"tag": "考点五", "title": "布朗运动", "blocks": [{"t": "rule", "tag": "布朗运动", "at": "b1", "text": "{悬浮微粒}永不停息的无规则运动", "c": "red"}, {"t": "rule", "tag": "原因", "at": "b2", "text": "液体分子撞击{不平衡}", "c": "orange"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "b3", "text": "微粒{越小}越明显", "size": 38}]}, {"blocks": [{"t": "big", "at": "b3", "text": "温度{越高|orange}越明显", "size": 38, "c": "orange", "soft": "orangeSoft"}]}]}], "callout": {"label": "要点", "at": "b4", "text": "布朗运动是{微粒}的运动，间接反映分子运动"}, "beat": {"k": "run", "at": "b3b", "text": "布朗运动\n方向、快慢{毫无规律|red}"}}} />;

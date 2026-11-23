import React from 'react';
import {AutoScene} from '../components/auto';

export const Osc: React.FC = () => <AutoScene k="osc" d={{"tag": "考点一", "title": "振荡电流与振荡电路", "blocks": [{"t": "rule", "tag": "振荡电流", "at": "a1", "text": "{大小和方向}都周期性迅速变化", "c": "red"}, {"t": "big", "at": "a3", "text": "线圈 L + 电容器 C = {LC 电路}", "size": 48}], "callout": {"label": "要点", "at": "a4", "text": "大小、方向{都在变}"}}} />;

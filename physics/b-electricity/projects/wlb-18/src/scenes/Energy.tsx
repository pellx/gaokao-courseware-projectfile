import React from 'react';
import {AutoScene} from '../components/auto';

export const Energy: React.FC = () => <AutoScene k="energy" d={{"tag": "考点七", "title": "动生电动势中的能量转化", "blocks": [{"t": "chain", "steps": [{"at": "g1", "text": "导体中有电流", "c": "orange"}, {"at": "g2", "text": "安培力阻碍运动", "c": "red"}, {"at": "g3", "text": "外力克服安培力做功", "c": "orange"}, {"at": "g3", "text": "机械能 → 电能", "c": "red"}], "arrows": []}], "callout": {"label": "要点", "at": "g4", "text": "这是{发电机}的能量转化"}, "beat": {"k": "bike", "at": "g3b", "text": "越蹬越沉\n力气{变成电能|red}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Recoil: React.FC = () => <AutoScene k="recoil" d={{"tag": "考点一", "title": "反冲现象", "blocks": [{"t": "rule", "tag": "反冲", "at": "r1", "text": "物体在{内力}作用下分成两部分", "c": "red"}, {"t": "big", "at": "r2", "text": "一部分向前 ↔ 另一部分{向后}", "size": 46}, {"t": "text", "at": "r3", "text": "气球放气：气体向后喷，气球向前飞", "size": 32}], "callout": {"label": "要点", "at": "r4", "text": "两部分运动方向{相反}"}, "beat": {"k": "eel", "at": "r3b", "text": "尾部向下喷气\n身体{向上|red}蹿出"}}} />;

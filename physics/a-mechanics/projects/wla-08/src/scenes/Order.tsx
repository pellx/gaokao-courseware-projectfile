import React from 'react';
import {AutoScene} from '../components/auto';

export const Order: React.FC = () => <AutoScene k="order" d={{"tag": "考点七", "title": "受力分析的顺序", "blocks": [{"t": "rule", "tag": "第一步", "at": "g2", "text": "明确{研究对象}，隔离出来", "c": "red", "size": 34}, {"t": "chain", "steps": [{"at": "g3", "text": "{重力}"}, {"at": "g3", "text": "接触处的{弹力}"}, {"at": "g3", "text": "接触处的{摩擦力}"}, {"at": "g3", "text": "其他力"}], "arrows": []}, {"t": "text", "at": "g1", "text": "画出{受力示意图}", "size": 32}], "callout": {"label": "要点", "at": "g4", "text": "绕一周找{接触处}，不漏力"}, "beat": {"k": "shoulder", "at": "g3b", "text": "研究对象：{肩上的女孩|red}\n重力 → 接触处的弹力"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Aim: React.FC = () => <AutoScene k="aim" d={{"tag": "考点一", "title": "实验目的", "blocks": [{"t": "rule", "tag": "目的", "at": "a1", "text": "探究弹力大小与{伸长量}的定量关系", "c": "red"}, {"t": "rule", "tag": "测量", "at": "a2", "text": "测出弹簧的{劲度系数 k}", "c": "orange"}, {"t": "text", "at": "a3", "text": "k 由弹簧本身决定：弹簧越{“硬”}，k 越大", "size": 32}], "callout": {"label": "要点", "at": "a4", "text": "研究弹力与{形变量}的关系"}}} />;

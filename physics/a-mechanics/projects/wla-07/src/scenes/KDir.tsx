import React from 'react';
import {AutoScene} from '../components/auto';

export const KDir: React.FC = () => <AutoScene k="kdir" d={{"tag": "考点三", "title": "滑动摩擦力的方向", "blocks": [{"t": "rule", "tag": "方向", "at": "c1", "text": "沿着{接触面}", "c": "red", "size": 36}, {"t": "big", "at": "c2", "text": "与{相对运动}方向相反", "size": 52}, {"t": "text", "at": "c3", "text": "“相对”指相对于{接触物}，不一定是地面", "size": 32}], "callout": {"label": "易错", "at": "c4", "text": "与{相对运动}方向相反"}, "beat": {"k": "slide", "at": "c2b", "text": "相对地面{向前滑|orange}\n滑动摩擦力{向后|red}"}}} />;

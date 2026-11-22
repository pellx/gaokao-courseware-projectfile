import React from 'react';
import {AutoScene} from '../components/auto';

export const Limit: React.FC = () => <AutoScene k="limit" d={{"tag": "考点七", "title": "回旋加速器的局限", "blocks": [{"t": "chain", "steps": [{"at": "l1", "text": "能量很高"}, {"at": "l1", "text": "相对论效应"}, {"at": "l2", "text": "周期变化"}, {"at": "l3", "text": "能量受限"}], "arrows": [], "size": 32}], "callout": {"label": "要点", "at": "l3", "text": "周期改变 → 不再同步 → 能量{受限}"}, "beat": {"k": "big", "at": "l2b", "text": "质量变大，周期变长\n{不再同步|red}"}}} />;

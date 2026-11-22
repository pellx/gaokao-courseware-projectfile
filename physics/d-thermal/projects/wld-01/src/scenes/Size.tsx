import React from 'react';
import {AutoScene} from '../components/auto';

export const Size: React.FC = () => <AutoScene k="size" d={{"tag": "考点一", "title": "物体由大量分子组成", "blocks": [{"t": "rule", "tag": "分子", "at": "s1", "text": "热运动中遵从相同规律的微粒：{分子、原子、离子}", "c": "red"}, {"t": "big", "at": "s2", "text": "分子直径数量级：{10^-10 m}", "size": 56}, {"t": "text", "at": "s3", "text": "一滴水约含 {10^21|orange} 个水分子", "size": 32}], "callout": {"label": "要点", "at": "s4", "text": "10^-10 m 是{数量级}，不是准确值"}}} />;

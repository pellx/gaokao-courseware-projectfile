import React from 'react';
import {AutoScene} from '../components/auto';

export const Quantum: React.FC = () => <AutoScene k="quantum" d={{"tag": "考点八", "title": "量子力学的建立", "blocks": [{"t": "rule", "tag": "量子力学", "at": "h2", "text": "描述{微观粒子}运动规律的理论", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "推动学科", "at": "h3", "lines": ["原子物理、原子核物理", "粒子物理、固体物理"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "带来技术", "at": "h4", "lines": ["激光、半导体", "核能等"], "c": "red", "size": 32}]}]}], "callout": {"label": "要点", "at": "h5", "text": "量子力学描述{微观}世界"}}} />;

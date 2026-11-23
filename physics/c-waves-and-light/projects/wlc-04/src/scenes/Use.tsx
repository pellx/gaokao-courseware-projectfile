import React from 'react';
import {AutoScene} from '../components/auto';

export const Use: React.FC = () => <AutoScene k="use" d={{"tag": "考点七", "title": "光纤的应用", "blocks": [{"t": "panel", "title": "光纤通信", "at": "g1", "lines": ["容量大", "衰减小", "抗干扰能力强"], "c": "red", "size": 34}, {"t": "rule", "tag": "医学", "at": "g2", "text": "{内窥镜}观察人体内部器官", "c": "orange"}], "callout": {"label": "要点", "at": "g4", "text": "原理都是{全反射}"}}} />;

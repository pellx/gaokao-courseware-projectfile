import React from 'react';
import {AutoScene} from '../components/auto';

export const Osc: React.FC = () => <AutoScene k="osc" d={{"tag": "考点二", "title": "弹簧振子", "blocks": [{"t": "rule", "tag": "弹簧振子", "at": "o1", "text": "小球 + 弹簧组成的{系统}", "c": "red"}, {"t": "items", "items": [{"at": "o2", "text": "小球看成{质点}"}, {"at": "o2", "text": "忽略{弹簧质量}"}, {"at": "o2", "text": "忽略{摩擦和空气阻力}"}], "size": 34}], "callout": {"label": "要点", "at": "o4", "text": "弹簧振子是{理想化模型}"}}} />;

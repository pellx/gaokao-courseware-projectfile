import React from 'react';
import {AutoScene} from '../components/auto';

export const Gear: React.FC = () => <AutoScene k="gear" d={{"tag": "考点七", "title": "功率一定时 F 与 v 成反比", "blocks": [{"t": "big", "at": "g1", "text": "P 一定：F ∝ {1/v}", "size": 56}, {"t": "items", "items": [{"at": "g2", "text": "上坡：{换低速挡}，增大牵引力"}, {"at": "g3", "text": "平路：阻力小，{速度高}"}], "size": 32}], "callout": {"label": "要点", "at": "g4", "text": "力大则速度{小}"}, "beat": {"k": "slope", "at": "g3b", "text": "力大\n速度{小|red}"}}} />;

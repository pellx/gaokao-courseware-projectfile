import React from 'react';
import {AutoScene} from '../components/auto';

export const Track: React.FC = () => <AutoScene k="track" d={{"tag": "考点三", "title": "合力与轨迹的关系", "blocks": [{"t": "rule", "tag": "位置", "at": "c1", "text": "轨迹夹在{速度方向}与{合力方向}之间", "c": "red"}, {"t": "rule", "tag": "指向", "at": "c2", "text": "合力指向轨迹弯曲的{内侧（凹侧）}", "c": "orange"}], "callout": {"label": "要点", "at": "c4", "text": "合力指向{凹侧}"}}} />;

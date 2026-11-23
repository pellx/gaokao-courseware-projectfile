import React from 'react';
import {AutoScene} from '../components/auto';

export const Neptune: React.FC = () => <AutoScene k="neptune" d={{"tag": "考点七", "title": "发现未知天体", "blocks": [{"t": "chain", "steps": [{"at": "g1", "text": "天王星轨道{偏差}"}, {"at": "g2", "text": "引力理论{计算}"}, {"at": "g3", "text": "观测发现{海王星}"}], "arrows": []}], "callout": {"label": "要点", "at": "g4", "text": "“{笔尖下}发现的行星”"}, "beat": {"k": "pencil", "at": "g3b", "text": "先计算\n再{观测发现|red}"}}} />;

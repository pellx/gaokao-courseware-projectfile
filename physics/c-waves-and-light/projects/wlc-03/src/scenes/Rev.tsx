import React from 'react';
import {AutoScene} from '../components/auto';

export const Rev: React.FC = () => <AutoScene k="rev" d={{"tag": "考点五", "title": "光路可逆", "blocks": [{"t": "rule", "tag": "光路可逆", "at": "e1", "text": "折射现象中光路{可逆}", "c": "red"}, {"t": "big", "at": "e3", "text": "介质 → 空气：折射角 {>} 入射角", "size": 46}], "callout": {"label": "要点", "at": "e4", "text": "空气中的角{总是较大}"}, "beat": {"k": "glasses", "at": "e3b", "text": "原路返回\n光路{可逆|red}"}}} />;

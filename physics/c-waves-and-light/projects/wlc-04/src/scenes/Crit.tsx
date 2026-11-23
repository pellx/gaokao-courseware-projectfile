import React from 'react';
import {AutoScene} from '../components/auto';

export const Crit: React.FC = () => <AutoScene k="crit" d={{"tag": "考点三", "title": "临界角", "blocks": [{"t": "rule", "tag": "临界角 C", "at": "c1", "text": "折射角为 {90°} 时的入射角", "c": "red"}, {"t": "big", "at": "c2", "text": "sinC = {1/n}", "size": 64}, {"t": "text", "at": "c3", "text": "n 越大，C {越小}", "size": 36}], "callout": {"label": "要点", "at": "c4", "text": "介质 → {真空或空气}"}}} />;

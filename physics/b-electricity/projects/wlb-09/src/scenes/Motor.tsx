import React from 'react';
import {AutoScene} from '../components/auto';

export const Motor: React.FC = () => <AutoScene k="motor" d={{"tag": "考点六", "title": "电动机的能量转化", "blocks": [{"t": "chain", "steps": [{"at": "f1", "text": "P_入 = UI", "c": "red"}, {"at": "f2", "text": "P_热 = I^2r", "c": "orange"}, {"at": "f3", "text": "P_出 = UI − I^2r", "c": "green"}], "arrows": []}, {"t": "big", "at": "f3", "text": "η = {P_出/P_入}", "size": 52}], "callout": {"label": "要点", "at": "f4", "text": "P_入 = P_出 + P_热"}}} />;

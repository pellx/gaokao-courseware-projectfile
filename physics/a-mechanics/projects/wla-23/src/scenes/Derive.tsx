import React from 'react';
import {AutoScene} from '../components/auto';

export const Derive: React.FC = () => <AutoScene k="derive" d={{"tag": "考点一", "title": "动能表达式的得出", "blocks": [{"t": "chain", "steps": [{"at": "a2x", "text": "W = Fl"}, {"at": "a2x", "text": "F = ma"}, {"at": "a2x", "text": "v_2^2 − v_1^2 = 2al"}], "arrows": []}, {"t": "big", "at": "a3x", "text": "W = {½mv_2^2 − ½mv_1^2}", "size": 54}], "callout": {"label": "要点", "at": "a4x", "text": "½mv^2 就是{动能}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Moon: React.FC = () => <AutoScene k="moon" d={{"tag": "考点七", "title": "月—地检验", "blocks": [{"t": "big", "at": "g2", "text": "a_月 ≈ {g/60^2}", "size": 52}, {"t": "text", "at": "g3", "text": "计算值与观测{相符}", "size": 34}], "callout": {"label": "要点", "at": "g4", "text": "地上与天上的引力遵从{同一规律}"}, "beat": {"k": "scope", "at": "g3b", "text": "计算与观测\n{相符|red}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Defect: React.FC = () => <AutoScene k="defect" d={{"tag": "考点七", "title": "质量亏损", "blocks": [{"t": "big", "at": "g1", "text": "原子核质量 {<} 核子质量之和", "size": 48}, {"t": "text", "at": "g2", "text": "氘核质量 < 质子质量 + 中子质量", "size": 36}, {"t": "rule", "tag": "质量亏损", "at": "g3", "text": "两者的{差值} Δm", "c": "orange"}], "callout": {"label": "要点", "at": "g4", "text": "有质量亏损，就{放出能量}"}}} />;

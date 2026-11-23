import React from 'react';
import {AutoScene} from '../components/auto';

export const Isobar: React.FC = () => <AutoScene k="isobar" d={{"tag": "考点八", "title": "等压变化的微观解释", "blocks": [{"t": "chain", "steps": [{"at": "x1", "text": "T 升高"}, {"at": "x1", "text": "平均动能{增大}"}, {"at": "x2", "text": "V 增大、数密度{减小}", "c": "orange"}, {"at": "x2", "text": "压强{不变}"}], "arrows": []}, {"t": "text", "at": "x2b", "text": "等压：V 随 T {成正比|orange}地增大", "size": 34}], "callout": {"label": "要点", "at": "x3", "text": "两个效果{相互抵消}"}}} />;

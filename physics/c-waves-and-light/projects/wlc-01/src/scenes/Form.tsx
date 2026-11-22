import React from 'react';
import {AutoScene} from '../components/auto';

export const Form: React.FC = () => <AutoScene k="form" d={{"tag": "考点一", "title": "波的形成", "blocks": [{"t": "chain", "steps": [{"at": "f1", "text": "波源振动"}, {"at": "f2", "text": "带动相邻质点"}, {"at": "f2", "text": "依次带动下去"}, {"at": "f3", "text": "由近及远传播", "c": "orange"}], "arrows": []}, {"t": "text", "at": "f3", "text": "后面的质点比前面的质点{晚}开始振动", "size": 34}], "callout": {"label": "要点", "at": "f4", "text": "各质点{起振方向}都与波源起振方向相同"}}} />;

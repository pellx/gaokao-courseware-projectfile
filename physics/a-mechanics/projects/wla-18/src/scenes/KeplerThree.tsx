import React from 'react';
import {AutoScene} from '../components/auto';

export const KeplerThree: React.FC = () => <AutoScene k="k3" d={{"tag": "考点四", "title": "开普勒第三定律", "blocks": [{"t": "rule", "tag": "周期定律", "at": "c2", "text": "半长轴三次方与周期二次方之比{相等}", "c": "red"}, {"t": "big", "at": "c3", "text": "{a^3/T^2 = k}", "size": 60}], "callout": {"label": "要点", "at": "c4", "text": "k 只由{中心天体}决定"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Approx: React.FC = () => <AutoScene k="approx" d={{"tag": "考点五", "title": "行星运动的近似处理", "blocks": [{"t": "chain", "steps": [{"at": "d1", "text": "轨道接近圆"}, {"at": "d2", "text": "看作{匀速圆周运动}"}, {"at": "d3", "text": "a 取{半径 r}"}], "arrows": []}, {"t": "big", "at": "d3", "text": "r^3/T^2 = {k}", "size": 50}], "callout": {"label": "要点", "at": "d4", "text": "近似为圆：线速度大小{不变}"}}} />;

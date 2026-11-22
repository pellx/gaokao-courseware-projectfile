import React from 'react';
import {AutoScene} from '../components/auto';

export const Sync: React.FC = () => <AutoScene k="sync" d={{"tag": "考点五", "title": "同步条件", "blocks": [{"t": "big", "at": "y1", "text": "T = {2πm/qB}", "size": 56}, {"t": "rule", "tag": "同步", "at": "y2", "text": "交变电压周期 = 粒子回旋周期", "c": "orange", "size": 34}, {"t": "text", "at": "y1", "text": "周期与速度、半径无关", "size": 32}], "callout": {"label": "要点", "at": "y3", "text": "回旋周期与{速度无关}，每半周用时不变"}, "beat": {"k": "think", "at": "y2b", "text": "速度大，半径也大\n每半圈{用时不变|red}"}}} />;

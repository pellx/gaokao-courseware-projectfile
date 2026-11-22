import React from 'react';
import {AutoScene} from '../components/auto';

export const Photon: React.FC = () => <AutoScene k="photon" d={{"tag": "考点七", "title": "光是电磁波，光子", "blocks": [{"t": "rule", "tag": "光是电磁波", "at": "g1", "text": "麦克斯韦预言，赫兹证实", "c": "orange"}, {"t": "rule", "tag": "光子", "at": "g2", "text": "光由一个个不可分割的{能量子}组成", "c": "red"}, {"t": "big", "at": "g3", "text": "ε = hν = {hc/λ}", "size": 56}], "callout": {"label": "易错", "at": "g4", "text": "光子能量只由{频率}决定"}}} />;

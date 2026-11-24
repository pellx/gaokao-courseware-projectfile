import React from 'react';
import {AutoScene} from '../components/auto';

export const Temp: React.FC = () => <AutoScene k="temp" d={{"tag": "考点五", "title": "保证气体温度不变", "blocks": [{"t": "items", "items": [{"at": "w1", "text": "推、拉柱塞要{缓慢}"}, {"at": "w2", "text": "{不用手握}封有气体的部分"}, {"at": "w3", "text": "示数{稳定}后再读数"}], "size": 36}], "callout": {"label": "要点", "at": "w4", "text": "缓慢推拉、不手握、{稳定再读}"}, "beat": {"k": "kotatsu", "at": "w3b", "text": "一捂就暖和\n手握注射器，温度{升高|red}"}}} />;

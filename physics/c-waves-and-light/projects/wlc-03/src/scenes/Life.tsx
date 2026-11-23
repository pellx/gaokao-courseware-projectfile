import React from 'react';
import {AutoScene} from '../components/auto';

export const Life: React.FC = () => <AutoScene k="life" d={{"tag": "考点九", "title": "生活中的折射现象", "blocks": [{"t": "items", "items": [{"at": "i1", "text": "看水中物体：比实际{浅}"}, {"at": "i3", "text": "水中筷子：看起来{向上弯折}"}], "size": 40}, {"t": "text", "at": "i2", "text": "光射出水面时{远离法线}偏折", "size": 34}], "callout": {"label": "易错", "at": "i4", "text": "看到的是{虚像}，位置偏高"}, "beat": {"k": "goldfish", "at": "i3b", "text": "看到的鱼\n比实际{浅|red}"}}} />;

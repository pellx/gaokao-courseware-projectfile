import React from 'react';
import {AutoScene} from '../components/auto';

export const Acetylene: React.FC = () => <AutoScene k="acetylene" d={{"tag": "考点六", "title": "乙炔的制法与性质", "blocks": [{"t": "big", "at": "ac1", "text": "CaC2 + 2H2O → Ca(OH)2 + {C2H2↑}", "size": 42}, {"t": "items", "items": [{"at": "ac1", "text": "用{饱和食盐水}代替水，减缓速率"}, {"at": "ac2", "text": "{CuSO4 溶液}除去 H2S"}, {"at": "ac3", "text": "燃烧：火焰明亮，{浓烈黑烟}"}], "size": 33}], "callout": {"label": "易错", "at": "ac4", "text": "不能用启普发生器：放热、{糊状物堵塞}"}, "beat": {"k": "smile", "at": "ac3b", "text": "饱和食盐水\n{反应不太猛|red}"}}} />;

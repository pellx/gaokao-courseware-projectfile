import React from 'react';
import {AutoScene} from '../components/auto';

export const MUse: React.FC = () => <AutoScene k="muse" d={{"tag": "考点八", "title": "螺旋测微器的使用", "blocks": [{"t": "chain", "steps": [{"at": "u1", "text": "{粗调旋钮}靠近物体"}, {"at": "u2", "text": "改用{微调旋钮}"}, {"at": "u2", "text": "听到{“喀喀”}声停"}, {"at": "u3", "text": "{止动旋钮}固定后读数"}], "arrows": []}], "callout": {"label": "要点", "at": "u4", "text": "微调旋钮{控制压力}，防止损坏仪器、影响读数"}, "beat": {"k": "pat", "at": "u3b", "text": "{轻轻地|red}靠近\n改用微调旋钮"}}} />;

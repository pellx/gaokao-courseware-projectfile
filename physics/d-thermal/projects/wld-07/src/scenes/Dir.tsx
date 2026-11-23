import React from 'react';
import {AutoScene} from '../components/auto';

export const Dir: React.FC = () => <AutoScene k="dir" d={{"tag": "考点一", "title": "宏观过程的方向性", "blocks": [{"t": "items", "items": [{"at": "d1", "text": "传热：高温 → 低温，{不能自发反向}"}, {"at": "d2", "text": "摩擦生热：机械能 → 内能，{不能自发反向}"}, {"at": "d3", "text": "气体向真空膨胀、扩散：{不能自发复原}"}], "size": 34}], "callout": {"label": "要点", "at": "d4", "text": "与热现象有关的宏观过程都{不可逆}"}}} />;

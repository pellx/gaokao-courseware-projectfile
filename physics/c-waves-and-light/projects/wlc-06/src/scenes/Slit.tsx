import React from 'react';
import {AutoScene} from '../components/auto';

export const Slit: React.FC = () => <AutoScene k="slit" d={{"tag": "考点二", "title": "单缝衍射图样", "blocks": [{"t": "rule", "tag": "图样", "at": "b1", "text": "中央亮条纹{最宽最亮}，两侧窄而暗", "c": "red"}, {"t": "items", "items": [{"at": "b2", "text": "缝越窄 → 中央条纹{越宽}"}, {"at": "b2", "text": "波长越长 → 中央条纹{越宽}"}, {"at": "b3", "text": "白光：{彩色}条纹"}], "size": 36}], "callout": {"label": "易错", "at": "b4", "text": "缝越窄，条纹越宽，亮度{越暗}"}}} />;

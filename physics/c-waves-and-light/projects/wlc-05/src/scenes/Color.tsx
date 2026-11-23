import React from 'react';
import {AutoScene} from '../components/auto';

export const Color: React.FC = () => <AutoScene k="color" d={{"tag": "考点六", "title": "光的颜色与波长", "blocks": [{"t": "big", "at": "f2", "text": "红 → 紫：波长{逐渐变短}", "size": 48}, {"t": "text", "at": "f3", "text": "波长越长，条纹间距{越大}：红光最宽", "size": 36}], "callout": {"label": "易错", "at": "f4", "text": "颜色由{频率}决定"}, "beat": {"k": "height", "at": "f3b", "text": "波长越长\n条纹{越宽|red}"}}} />;

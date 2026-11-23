import React from 'react';
import {AutoScene} from '../components/auto';

export const Equator: React.FC = () => <AutoScene k="equator" d={{"tag": "考点八", "title": "赤道上的物体与卫星", "blocks": [{"t": "rule", "tag": "赤道物体", "at": "h1", "text": "引力{不全部}提供向心力，{不是卫星}", "c": "red"}, {"t": "text", "at": "h3", "text": "与静止卫星{角速度相同}", "size": 34}], "callout": {"label": "易错", "at": "h4", "text": "速度{远小于} 7.9 km/s"}}} />;

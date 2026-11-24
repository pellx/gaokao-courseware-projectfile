import React from 'react';
import {AutoScene} from '../components/auto';

export const Adjust: React.FC = () => <AutoScene k="adjust" d={{"tag": "考点四", "title": "调节要求", "blocks": [{"t": "rule", "tag": "共轴", "at": "j1", "text": "各元件中心在遮光筒的{轴线}上", "c": "red"}, {"t": "rule", "tag": "平行", "at": "j2", "text": "单缝与双缝{互相平行}", "c": "orange"}, {"t": "text", "at": "j3", "text": "屏上才有{清晰}的干涉条纹", "size": 34}], "callout": {"label": "易错", "at": "j4", "text": "缝不平行，条纹{模糊}"}}} />;

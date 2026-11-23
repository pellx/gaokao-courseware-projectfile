import React from 'react';
import {AutoScene} from '../components/auto';

export const KeplerOne: React.FC = () => <AutoScene k="k1" d={{"tag": "考点二", "title": "开普勒第一定律", "blocks": [{"t": "rule", "tag": "轨道定律", "at": "a2x", "text": "轨道是{椭圆}，太阳在{一个焦点}上", "c": "red"}, {"t": "text", "at": "a3x", "text": "各行星椭圆大小、扁的程度不同", "size": 32}], "callout": {"label": "易错", "at": "a4x", "text": "太阳在{焦点}，不在中心"}}} />;

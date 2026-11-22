import React from 'react';
import {AutoScene} from '../components/auto';

export const Off: React.FC = () => <AutoScene k="off" d={{"tag": "考点八", "title": "离心运动", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "F = 0", "at": "o1", "text": "沿{切线}飞出", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "F < mω^2r", "at": "o2", "text": "逐渐{远离圆心}", "c": "orange", "size": 32}]}]}, {"t": "items", "items": [{"at": "o3", "text": "应用：洗衣机{脱水筒}"}, {"at": "o3", "text": "防止：转弯{限速}"}], "size": 30}], "callout": {"label": "易错", "at": "o4", "text": "没有“离心力”，是{向心力不足}"}, "beat": {"k": "a3", "at": "o3b", "text": "向心力不足\n沿{切线|red}飞出"}}} />;

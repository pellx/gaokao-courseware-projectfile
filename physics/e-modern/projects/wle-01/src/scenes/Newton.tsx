import React from 'react';
import {AutoScene} from '../components/auto';

export const Newton: React.FC = () => <AutoScene k="newton" d={{"tag": "考点一", "title": "牛顿力学时空观", "blocks": [{"t": "rule", "tag": "绝对时空", "at": "a1", "text": "时间和空间独立于物体及其运动，是{绝对的}", "c": "red"}, {"t": "text", "at": "a2", "text": "不同参考系中：时间间隔相同，物体长度相同", "size": 32}, {"t": "big", "at": "a3", "text": "速度叠加：{v_地 = v + u|orange}", "size": 44, "c": "orange", "soft": "orangeSoft"}], "callout": {"label": "要点", "at": "a4", "text": "时间、空间与物质的运动{无关}"}, "beat": {"k": "walk", "at": "a3b", "text": "经典观点\n速度{直接相加|red}"}}} />;

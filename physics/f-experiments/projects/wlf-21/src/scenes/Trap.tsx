import React from 'react';
import {AutoScene} from '../components/auto';

export const Trap: React.FC = () => <AutoScene k="trap" d={{"tag": "考点九", "title": "易错提醒", "blocks": [{"t": "mark", "ok": true, "at": "x1", "text": "V = 一滴溶液中{纯油酸}的体积"}, {"t": "mark", "ok": false, "at": "x2", "text": "V = 一滴{溶液}的体积"}, {"t": "rule", "tag": "误用后果", "at": "x3", "text": "算出的 d {偏大很多}", "c": "red"}], "callout": {"label": "易错", "at": "x4", "text": "V 要乘{浓度}"}}} />;

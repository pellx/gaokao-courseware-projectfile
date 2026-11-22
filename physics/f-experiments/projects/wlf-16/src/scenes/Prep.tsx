import React from 'react';
import {AutoScene} from '../components/auto';

export const Prep: React.FC = () => <AutoScene k="prep" d={{"tag": "考点四", "title": "实验前的准备", "blocks": [{"t": "items", "items": [{"at": "p1", "text": "① 查明：电流从{哪个接线柱流入}，指针向哪侧偏"}, {"at": "p2", "text": "② 弄清：线圈导线的{绕向}"}], "size": 36}, {"t": "text", "at": "p3", "text": "两条都清楚 → 才能由偏转推出电流方向和感应电流的磁场", "size": 30}], "callout": {"label": "易错", "at": "p4", "text": "缺任一条，{无法推出电流方向}"}}} />;

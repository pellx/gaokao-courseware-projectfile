import React from 'react';
import {AutoScene} from '../components/auto';

export const Speed: React.FC = () => <AutoScene k="speed" d={{"tag": "考点五", "title": "瞬时速度的求法", "blocks": [{"t": "big", "at": "v2", "text": "v_n = {(h_n+1 − h_n−1) / 2T}", "size": 52}, {"t": "text", "at": "v1", "text": "用第 n 点{前后相邻两段}的平均速度代替该点的瞬时速度", "size": 32}, {"t": "text", "at": "v3", "text": "依据：匀变速直线运动中，{中间时刻速度 = 平均速度|orange}", "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": false, "at": "v4", "text": "v = gt", "size": 36}]}, {"blocks": [{"t": "mark", "ok": false, "at": "v4", "text": "v = √(2gh)", "size": 36}]}]}], "callout": {"label": "易错", "at": "v4", "text": "用 gt 或 √(2gh) 求速度，等于{默认机械能守恒}"}}} />;

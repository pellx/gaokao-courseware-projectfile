import React from 'react';
import {AutoScene} from '../components/auto';

export const KeplerTwo: React.FC = () => <AutoScene k="k2" d={{"tag": "考点三", "title": "开普勒第二定律", "blocks": [{"t": "rule", "tag": "面积定律", "at": "b2", "text": "相等时间内扫过的面积{相等}", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "b3", "text": "近日点：{速率大}", "size": 40}]}, {"blocks": [{"t": "big", "at": "b3", "text": "远日点：{速率小|orange}", "size": 40, "c": "orange", "soft": "orangeSoft"}]}]}], "callout": {"label": "易错", "at": "b4", "text": "只对{同一行星}成立"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Refr: React.FC = () => <AutoScene k="refr" d={{"tag": "考点二", "title": "波的折射", "blocks": [{"t": "rule", "tag": "折射", "at": "b1", "text": "进入另一种介质，{传播方向改变}", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "b2", "text": "频率 f：{不变}", "size": 46}]}, {"blocks": [{"t": "big", "at": "b3", "text": "v、λ：{改变|orange}", "size": 46, "c": "orange", "soft": "orangeSoft"}]}]}], "callout": {"label": "易错", "at": "b4", "text": "反射 λ 不变；折射 λ {改变}；频率都不变"}}} />;

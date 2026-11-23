import React from 'react';
import {AutoScene} from '../components/auto';

export const Law: React.FC = () => <AutoScene k="law" d={{"tag": "考点六", "title": "电阻定律", "blocks": [{"t": "big", "at": "l1", "text": "R = {ρl/S}", "size": 60}, {"t": "items", "items": [{"at": "l2", "text": "l 越长，R {越大}；S 越大，R {越小|orange}"}, {"at": "l3", "text": "探究方法：{控制变量法}"}], "size": 32}], "callout": {"label": "要点", "at": "l4", "text": "ρl/S：{决定式}；U/I：{定义式}"}}} />;

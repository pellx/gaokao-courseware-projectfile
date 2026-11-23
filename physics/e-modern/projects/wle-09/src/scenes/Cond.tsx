import React from 'react';
import {AutoScene} from '../components/auto';

export const Cond: React.FC = () => <AutoScene k="cond" d={{"tag": "考点六", "title": "聚变的条件", "blocks": [{"t": "chain", "steps": [{"at": "f1", "text": "克服{库仑斥力}"}, {"at": "f2", "text": "需要{极高温度}", "c": "orange"}, {"at": "f3", "text": "热核反应", "c": "red"}], "arrows": []}, {"t": "text", "at": "f3", "text": "太阳内部：{热核反应}", "size": 38}], "callout": {"label": "要点", "at": "f4", "text": "高温为了{克服库仑斥力}"}}} />;

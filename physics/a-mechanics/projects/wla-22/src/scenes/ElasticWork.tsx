import React from 'react';
import {AutoScene} from '../components/auto';

export const ElasticWork: React.FC = () => <AutoScene k="ew" d={{"tag": "考点八", "title": "弹力做功与弹性势能变化", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "正功", "at": "h1", "text": "弹性势能{减少}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "负功", "at": "h2", "text": "弹性势能{增加}", "c": "orange", "size": 32}]}]}, {"t": "text", "at": "h3", "text": "变力做功：{F-x 图线下面积}", "size": 34}], "callout": {"label": "要点", "at": "h4", "text": "弹力的功 = 弹性势能的{减少量}"}}} />;

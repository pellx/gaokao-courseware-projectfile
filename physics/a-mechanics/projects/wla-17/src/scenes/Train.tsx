import React from 'react';
import {AutoScene} from '../components/auto';

export const Train: React.FC = () => <AutoScene k="train" d={{"tag": "考点五", "title": "火车转弯", "blocks": [{"t": "rule", "tag": "结构", "at": "t1", "text": "外轨{略高于}内轨", "c": "red"}, {"t": "text", "at": "t2", "text": "规定速度：{重力与支持力的合力}提供向心力", "size": 32}, {"t": "big", "at": "t3", "text": "v_0 = {√(gr tanθ)}", "size": 56}], "callout": {"label": "要点", "at": "t4", "text": "v > v_0 挤压{外轨}；v < v_0 挤压{内轨}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Two: React.FC = () => <AutoScene k="two" d={{"tag": "考点一", "title": "做功的两个要素", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "要素一", "at": "a1x", "text": "作用在物体上的{力}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "要素二", "at": "a2x", "text": "在力的方向上的{位移}", "c": "orange", "size": 32}]}]}, {"t": "text", "at": "a3x", "text": "推墙推不动：{不做功}", "size": 34}], "callout": {"label": "要点", "at": "a4x", "text": "力 + {沿力方向的位移}"}, "beat": {"k": "boxes", "at": "a3b", "text": "没有位移\n{不做功|red}"}}} />;

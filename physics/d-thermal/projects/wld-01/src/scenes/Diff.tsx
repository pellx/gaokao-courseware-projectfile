import React from 'react';
import {AutoScene} from '../components/auto';

export const Diff: React.FC = () => <AutoScene k="diff" d={{"tag": "考点四", "title": "扩散现象", "blocks": [{"t": "rule", "tag": "扩散", "at": "d1", "text": "不同物质能够{彼此进入对方}", "c": "red"}, {"t": "items", "items": [{"at": "d2", "text": "气体：闻到花香"}, {"at": "d2", "text": "液体：墨水在清水中散开"}, {"at": "d2", "text": "固体：压紧的铅块与金块互相渗入"}], "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "big", "at": "d3", "text": "分子{无规则运动}的直接结果", "size": 36}]}, {"blocks": [{"t": "big", "at": "d4", "text": "温度越高，扩散{越快|orange}", "size": 36, "c": "orange", "soft": "orangeSoft"}]}]}], "callout": {"label": "要点", "at": "d5", "text": "扩散由{分子自身运动}造成"}}} />;

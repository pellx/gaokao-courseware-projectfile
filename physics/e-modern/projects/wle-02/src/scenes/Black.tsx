import React from 'react';
import {AutoScene} from '../components/auto';

export const Black: React.FC = () => <AutoScene k="black" d={{"tag": "考点二", "title": "黑体", "blocks": [{"t": "rule", "tag": "定义", "at": "b1", "text": "完全吸收各种波长的电磁波，{不反射}", "c": "red"}, {"t": "text", "at": "b2", "text": "理想化模型：带小孔的空腔，小孔近似为黑体", "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "一般物体", "at": "b3", "lines": ["与温度有关", "还与材料、表面状况有关"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "黑体", "at": "b3", "lines": ["辐射{只与温度有关}"], "c": "red", "size": 32}]}]}], "callout": {"label": "易错", "at": "b4", "text": "黑体{不一定是黑的}，自身也在辐射"}}} />;

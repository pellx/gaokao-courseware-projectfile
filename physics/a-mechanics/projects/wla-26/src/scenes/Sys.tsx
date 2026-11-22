import React from 'react';
import {AutoScene} from '../components/auto';

export const Sys: React.FC = () => <AutoScene k="sys" d={{"tag": "考点一", "title": "系统、内力和外力", "blocks": [{"t": "rule", "tag": "系统", "at": "s1", "text": "相互作用的几个物体", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "内力", "at": "s2", "text": "系统{内部}物体间的力", "c": "orange", "size": 30}]}, {"blocks": [{"t": "rule", "tag": "外力", "at": "s3", "text": "系统{以外}物体施加的力", "c": "orange", "size": 30}]}]}], "callout": {"label": "易错", "at": "s4", "text": "内力外力取决于{系统的选取}"}, "beat": {"k": "sys", "at": "s3b", "text": "四人 = 一个{系统|red}\n扎带的拉力：{内力|red}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const NotForce: React.FC = () => <AutoScene k="notforce" d={{"tag": "考点八", "title": "惯性不是力", "blocks": [{"t": "rule", "tag": "固有属性", "at": "h1", "text": "一切物体在任何情况下都有惯性", "c": "red"}, {"t": "text", "at": "h2", "text": "与速度、是否受力、是否运动{都无关}", "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "mark", "ok": true, "at": "h3", "text": "“由于惯性”“具有惯性”"}]}, {"blocks": [{"t": "mark", "ok": false, "at": "h3", "text": "“受到惯性作用”"}]}]}], "callout": {"label": "易错", "at": "h4", "text": "惯性{不是力}；速度大惯性{不更大}"}, "beat": {"k": "train", "at": "h2b", "text": "前面突然停下\n后面{保持原来运动|red}"}}} />;

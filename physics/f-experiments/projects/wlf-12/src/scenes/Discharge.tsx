import React from 'react';
import {AutoScene} from '../components/auto';

export const Discharge: React.FC = () => <AutoScene k="discharge" d={{"tag": "考点四", "title": "放电过程", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "电流", "at": "d2", "text": "方向与充电{相反}，由大{逐渐减小到 0}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "电压", "at": "d3", "text": "逐渐{减小到 0}", "c": "orange", "size": 32}]}]}, {"t": "big", "at": "d4", "text": "电场能　→　{其他形式的能}", "size": 44}], "callout": {"label": "易错", "at": "d4", "text": "放电电流方向与充电{相反}"}, "beat": {"k": "sparkler", "at": "d3b", "text": "一开始最旺\n然后{越来越弱|red}"}}} />;

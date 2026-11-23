import React from 'react';
import {AutoScene} from '../components/auto';

export const Charge: React.FC = () => <AutoScene k="charge" d={{"tag": "考点三", "title": "充电过程", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "电流", "at": "q2", "text": "由大{逐渐减小到 0}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "电压", "at": "q3", "text": "逐渐升高，最后{等于电源电压}", "c": "orange", "size": 32}]}]}, {"t": "big", "at": "q4", "text": "电源的能量　→　{电场能}", "size": 44}], "callout": {"label": "要点", "at": "q4", "text": "充满时：电流为 {0}，电压等于{电源电压}"}, "beat": {"k": "robot", "at": "q3b", "text": "慢慢充满\n越接近充满，电流{越小|red}"}}} />;

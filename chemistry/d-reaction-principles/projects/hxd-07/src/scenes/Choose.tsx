import React from 'react';
import {AutoScene} from '../components/auto';

export const Choose: React.FC = () => <AutoScene k="choose" d={{"tag": "考点六", "title": "条件选择的思路", "blocks": [{"t": "chain", "steps": [{"at": "ch1", "text": "{速率|orange}"}, {"at": "ch1", "text": "{平衡}"}, {"at": "ch1", "text": "{设备、成本、催化剂|green}"}], "arrows": [], "center": true, "size": 40}, {"t": "items", "items": [{"at": "ch2", "text": "温度：过低速率慢；过高平衡逆移、{催化剂活性下降}"}, {"at": "ch3", "text": "压强：再增大转化率提高不明显，{设备成本更高|orange}"}], "size": 32}], "callout": {"label": "答题模板", "at": "ch4", "text": "“催化剂活性最高，速率较快；{兼顾速率和产率}”"}, "beat": {"k": "fist", "at": "ch3b", "text": "速率、平衡、成本\n{三方面都要说|red}"}}} />;

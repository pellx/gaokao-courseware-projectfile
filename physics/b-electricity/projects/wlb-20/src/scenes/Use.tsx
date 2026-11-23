import React from 'react';
import {AutoScene} from '../components/auto';

export const Use: React.FC = () => <AutoScene k="use" d={{"tag": "考点八", "title": "有效值的使用", "blocks": [{"t": "items", "items": [{"at": "h1", "text": "铭牌上的额定值：{有效值}"}, {"at": "h2", "text": "交流电表的示数：{有效值}"}, {"at": "h2", "text": "220 V：{有效值}"}], "size": 34}, {"t": "rule", "tag": "耐压值", "at": "h3", "text": "要高于交流电压的{峰值}", "c": "orange", "size": 32}], "callout": {"label": "易错", "at": "h4", "text": "耐压值对应{峰值}"}}} />;

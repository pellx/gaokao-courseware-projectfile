import React from 'react';
import {AutoScene} from '../components/auto';

export const Tools: React.FC = () => <AutoScene k="tools" d={{"tag": "考点三", "title": "配制所需仪器", "blocks": [{"t": "panel", "title": "容量瓶", "at": "to1", "lines": ["规格：100、250、500、1000 mL", "标有：{温度、容积、刻度线}", {"at": "to2", "text": "使用前：{检查是否漏水}"}, {"at": "to2", "text": "不能：溶解、稀释、反应、加热、长期存放"}], "c": "red", "size": 32}, {"t": "rule", "tag": "其他仪器", "at": "to3", "text": "托盘天平（或量筒）、烧杯、{玻璃棒}、{胶头滴管}", "c": "orange", "size": 32}], "callout": {"label": "易错", "at": "to4", "text": "答仪器要写规格：“{500 mL 容量瓶}”"}}} />;

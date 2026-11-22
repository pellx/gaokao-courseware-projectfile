import React from 'react';
import {AutoScene} from '../components/auto';

export const Connect: React.FC = () => <AutoScene k="connect" d={{"tag": "考点八", "title": "装置连接顺序", "blocks": [{"t": "chain", "steps": [{"at": "cn1", "text": "发生"}, {"at": "cn1", "text": "除杂"}, {"at": "cn1", "text": "干燥"}, {"at": "cn1", "text": "收集 / 性质"}, {"at": "cn1", "text": "{尾气处理}"}], "arrows": [], "center": true, "size": 34}, {"t": "items", "items": [{"at": "cn2", "text": "量气：{冷却至室温、调平液面}再读数"}, {"at": "cn3", "text": "检验产物：{先检验水}"}], "size": 33}], "callout": {"label": "答题模板", "at": "cn4", "text": "“{除去某杂质}”“{防倒吸}”“{防止空气进入}”"}}} />;

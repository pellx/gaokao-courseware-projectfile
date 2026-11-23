import React from 'react';
import {AutoScene} from '../components/auto';

export const Explore: React.FC = () => <AutoScene k="explore" d={{"tag": "考点七", "title": "载人航天与太空探索", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "世界", "at": "g1", "lines": ["1957 第一颗人造卫星", {"at": "g2", "text": "1961 加加林进入太空"}, {"at": "g2", "text": "1969 阿波罗 11 号登月"}], "c": "red", "size": 30}]}, {"blocks": [{"t": "panel", "title": "中国", "at": "g3", "lines": ["东方红一号", "神舟、嫦娥、天问一号", "北斗、{中国空间站}"], "c": "orange", "size": 30}]}]}], "callout": {"label": "要点", "at": "g4", "text": "天问一号：{火星}探测"}, "beat": {"k": "scope", "at": "g3b", "text": "我国的{太空探索|red}"}}} />;

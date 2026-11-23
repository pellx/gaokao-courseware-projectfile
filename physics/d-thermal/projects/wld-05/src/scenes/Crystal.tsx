import React from 'react';
import {AutoScene} from '../components/auto';

export const Crystal: React.FC = () => <AutoScene k="crystal" d={{"tag": "考点一", "title": "晶体和非晶体", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "晶体", "at": "c2", "lines": ["有{确定的熔点}", "石英、云母、明矾", "食盐、味精、蔗糖", "各种金属"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "非晶体", "at": "c3", "lines": ["{没有}确定的熔点", "玻璃、蜂蜡、松香", "沥青、橡胶", "加热先变软"], "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "c4", "text": "看{熔点}，不看外形"}}} />;

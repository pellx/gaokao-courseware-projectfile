import React from 'react';
import {AutoScene} from '../components/auto';

export const Reflect: React.FC = () => <AutoScene k="reflect" d={{"tag": "考点七", "title": "反思与改进", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "常见不足", "at": "rf2", "lines": ["{未排除干扰}", "{没有对照}", "变量不唯一", "用量不当"], "c": "red", "size": 31}]}, {"blocks": [{"t": "panel", "title": "改进方法", "at": "rf3", "lines": ["增加{对照实验}", "隔绝空气：通 N2、油封", "换用只差一个离子的试剂"], "c": "orange", "size": 31}]}]}], "callout": {"label": "答题模板", "at": "rf4", "text": "“不足：{未排除……干扰}；改进：增加……对照”"}}} />;

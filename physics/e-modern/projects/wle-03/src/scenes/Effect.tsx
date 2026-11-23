import React from 'react';
import {AutoScene} from '../components/auto';

export const Effect: React.FC = () => <AutoScene k="effect" d={{"tag": "考点一", "title": "光电效应", "blocks": [{"t": "rule", "tag": "光电效应", "at": "a1", "text": "光照射金属表面，使{电子}从表面逸出", "c": "red"}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "光电子", "at": "a2", "lines": ["从金属表面逸出的{电子}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "光电流", "at": "a2", "lines": ["光电子定向移动形成的电流"], "c": "orange", "size": 32}]}]}, {"t": "text", "at": "a3", "text": "最早由赫兹发现：紫外线照射电极，更容易放电", "size": 30}], "callout": {"label": "易错", "at": "a4", "text": "光电子就是{电子}，不是光子"}}} />;

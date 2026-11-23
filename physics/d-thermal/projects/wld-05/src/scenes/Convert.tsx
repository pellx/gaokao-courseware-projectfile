import React from 'react';
import {AutoScene} from '../components/auto';

export const Convert: React.FC = () => <AutoScene k="convert" d={{"tag": "考点四", "title": "晶体与非晶体的转化", "blocks": [{"t": "chain", "steps": [{"at": "v2", "text": "石英晶体"}, {"at": "v2", "text": "熔化后凝固"}, {"at": "v2", "text": "石英玻璃（{非晶体}）", "c": "orange"}], "arrows": []}, {"t": "big", "at": "v1", "text": "一定条件下可以{相互转化}", "size": 46}, {"t": "text", "at": "v2b", "text": "有些非晶体也能{转化为晶体|orange}", "size": 34}], "callout": {"label": "要点", "at": "v3", "text": "晶体与非晶体{不是绝对的}"}}} />;

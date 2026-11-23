import React from 'react';
import {AutoScene} from '../components/auto';

export const Chain: React.FC = () => <AutoScene k="chain" d={{"tag": "考点二", "title": "链式反应", "blocks": [{"t": "chain", "steps": [{"at": "b1", "text": "1 个中子"}, {"at": "b1", "text": "铀核裂变"}, {"at": "b2", "text": "放出几个中子", "c": "orange"}, {"at": "b2", "text": "更多铀核裂变", "c": "red"}], "arrows": []}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "临界体积", "at": "b3", "text": "能发生链式反应的{最小体积}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "临界质量", "at": "b3", "text": "相应的{质量}", "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "b4", "text": "小于{临界体积}，不能持续"}, "beat": {"k": "multiply", "at": "b2b", "text": "中子越来越多\n{链式反应|red}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Result: React.FC = () => <AutoScene k="result" d={{"tag": "考点九", "title": "实验结论", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "m 一定", "at": "r1", "text": "a 与 F {成正比}", "c": "red", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "F 一定", "at": "r2", "text": "a 与 m {成反比}", "c": "orange", "size": 34}]}]}, {"t": "big", "at": "r3", "text": "{a ∝ F / m}", "size": 56}], "callout": {"label": "要点", "at": "r4", "text": "a 与 m 成反比，即 a 与 {1/m 成正比}"}, "beat": {"k": "race", "at": "r3b", "text": "{a ∝ F / m|red}\n力大、质量小，起步快"}}} />;

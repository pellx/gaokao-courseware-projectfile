import React from 'react';
import {AutoScene} from '../components/auto';

export const Ratio: React.FC = () => <AutoScene k="ratio" d={{"tag": "考点九", "title": "a_n 与 r 的关系", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "v 一定", "at": "i2", "lines": ["a_n = v^2/r", "a_n 与 r {成反比}"], "c": "orange", "size": 34}]}, {"blocks": [{"t": "panel", "title": "ω 一定", "at": "i3", "lines": ["a_n = ω^2r", "a_n 与 r {成正比}"], "c": "red", "size": 34}]}]}], "callout": {"label": "易错", "at": "i4", "text": "先看{哪个量一定}"}}} />;

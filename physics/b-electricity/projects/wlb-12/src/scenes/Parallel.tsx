import React from 'react';
import {AutoScene} from '../components/auto';

export const Parallel: React.FC = () => <AutoScene k="parallel" d={{"tag": "考点四", "title": "平行通电导线间的作用", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "big", "at": "d2", "text": "同向电流：{相吸}", "size": 46}]}, {"blocks": [{"t": "big", "at": "d2", "text": "反向电流：{相斥|orange}", "size": 46, "c": "orange", "soft": "orangeSoft"}]}]}, {"t": "chain", "steps": [{"at": "d3", "text": "导线 1 的电流", "c": "orange"}, {"at": "d3", "text": "磁场", "c": "red"}, {"at": "d3", "text": "导线 2 受安培力", "c": "orange"}], "arrows": []}], "callout": {"label": "要点", "at": "d4", "text": "同向{相吸}，反向相斥"}, "beat": {"k": "guitar", "at": "d2b", "text": "同向电流\n{相互吸引|red}"}}} />;

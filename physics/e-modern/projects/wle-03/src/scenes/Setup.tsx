import React from 'react';
import {AutoScene} from '../components/auto';

export const Setup: React.FC = () => <AutoScene k="setup" d={{"tag": "考点二", "title": "研究装置", "blocks": [{"t": "chain", "steps": [{"at": "b1", "text": "光照阴极 K\n发射光电子"}, {"at": "b1", "text": "飞向阳极 A"}, {"at": "b4", "text": "电流表\n测光电流", "c": "orange"}], "arrows": []}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "正向电压", "at": "b2", "lines": ["A 电势高于 K", "光电子被{加速}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "反向电压", "at": "b3", "lines": ["A 电势低于 K", "光电子被{减速}"], "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "b5", "text": "正向电压{加速}，反向电压{减速}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Split: React.FC = () => <AutoScene k="split" d={{"tag": "考点四", "title": "偏转的分解", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "沿 v_0 方向", "at": "d2", "lines": ["匀速直线运动", "t = {l/v_0}"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "沿电场方向", "at": "d3", "lines": ["初速度为 0 的匀加速", "a = {qU/md}"], "c": "red", "size": 32}]}]}], "callout": {"label": "要点", "at": "d4", "text": "E = U/d，a = {qU/md}"}}} />;

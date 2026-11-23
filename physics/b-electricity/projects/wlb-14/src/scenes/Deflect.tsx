import React from 'react';
import {AutoScene} from '../components/auto';

export const Deflect: React.FC = () => <AutoScene k="deflect" d={{"tag": "考点三", "title": "带电粒子的偏转", "blocks": [{"t": "rule", "tag": "条件", "at": "c1", "text": "v_0 {垂直于}电场方向射入匀强电场", "c": "red", "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "平抛运动", "at": "c3", "lines": ["受{重力}", "恒力，与 v_0 垂直"], "c": "orange", "size": 32}]}, {"blocks": [{"t": "panel", "title": "电场中偏转", "at": "c3", "lines": ["受{静电力}", "恒力，与 v_0 垂直"], "c": "red", "size": 32}]}]}], "callout": {"label": "要点", "at": "c4", "text": "{类平抛运动}，轨迹是抛物线"}}} />;

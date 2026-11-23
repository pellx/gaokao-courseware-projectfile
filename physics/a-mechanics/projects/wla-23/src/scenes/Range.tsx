import React from 'react';
import {AutoScene} from '../components/auto';

export const Range: React.FC = () => <AutoScene k="range" d={{"tag": "考点六", "title": "适用范围", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "推导", "at": "f1", "text": "恒力、直线运动", "c": "orange", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "适用", "at": "f2", "text": "{变力}、{曲线运动}也适用", "c": "red", "size": 32}]}]}], "callout": {"label": "要点", "at": "f4", "text": "适用范围{更广}"}}} />;

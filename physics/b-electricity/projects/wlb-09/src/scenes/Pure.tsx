import React from 'react';
import {AutoScene} from '../components/auto';

export const Pure: React.FC = () => <AutoScene k="pure" d={{"tag": "考点四", "title": "纯电阻电路", "blocks": [{"t": "rule", "tag": "特点", "at": "d1", "text": "电能{全部}转化为内能", "c": "red", "size": 34}, {"t": "big", "at": "d2", "text": "W = {Q}", "size": 56}, {"t": "big", "at": "d3", "text": "P = UI = {I^2R} = {U^2/R|orange}", "size": 50}], "callout": {"label": "要点", "at": "d4", "text": "纯电阻：电功率 = {热功率}"}}} />;

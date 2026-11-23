import React from 'react';
import {AutoScene} from '../components/auto';

export const Emf: React.FC = () => <AutoScene k="emf" d={{"tag": "考点一", "title": "感应电动势", "blocks": [{"t": "rule", "tag": "电源", "at": "a2", "text": "产生感应电动势的导体相当于{电源}", "c": "red", "size": 32}, {"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "电路闭合", "at": "a3", "lines": ["有感应电动势", "{有}感应电流"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "电路断开", "at": "a3", "lines": ["有感应电动势", "{没有}感应电流"], "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "a4", "text": "有无电流看电路{是否闭合}"}}} />;

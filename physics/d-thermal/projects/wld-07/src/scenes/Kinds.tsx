import React from 'react';
import {AutoScene} from '../components/auto';

export const Kinds: React.FC = () => <AutoScene k="kinds" d={{"tag": "考点七", "title": "能源的分类", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "不可再生能源", "at": "n2", "lines": ["煤", "石油", "天然气"], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "可再生能源", "at": "n3", "lines": ["水能", "风能", "太阳能"], "c": "orange", "size": 34}]}]}], "callout": {"label": "要点", "at": "n4", "text": "看能否{短期内得到补充}"}}} />;

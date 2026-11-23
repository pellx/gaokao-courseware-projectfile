import React from 'react';
import {AutoScene} from '../components/auto';

export const Env: React.FC = () => <AutoScene k="env" d={{"tag": "考点九", "title": "能源与环境", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "危害", "at": "v1", "lines": ["{大气污染}", "酸雨", {"at": "v2", "text": "{温室效应}"}], "c": "red", "size": 34}]}, {"blocks": [{"t": "panel", "title": "对策", "at": "v3", "lines": ["开发{新能源}", "提高利用效率", "可持续发展"], "c": "orange", "size": 34}]}]}], "callout": {"label": "要点", "at": "v4", "text": "节约能源、保护环境"}}} />;

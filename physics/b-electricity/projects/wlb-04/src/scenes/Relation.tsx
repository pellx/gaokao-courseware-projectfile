import React from 'react';
import {AutoScene} from '../components/auto';

export const Relation: React.FC = () => <AutoScene k="relation" d={{"tag": "考点八", "title": "电场强度与电势", "blocks": [{"t": "items", "items": [{"at": "x2", "text": "E 大，φ {不一定高}"}, {"at": "x2", "text": "E = 0，φ {不一定为 0}"}], "size": 36}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "E", "at": "x3", "text": "看电场线{疏密}", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "φ", "at": "x3", "text": "看电场线{方向|orange}", "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "x3", "text": "E 与 φ {没有必然联系}"}}} />;

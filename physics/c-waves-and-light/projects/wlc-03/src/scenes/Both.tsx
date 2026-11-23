import React from 'react';
import {AutoScene} from '../components/auto';

export const Both: React.FC = () => <AutoScene k="both" d={{"tag": "考点一", "title": "光的反射和折射", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "反射", "at": "a2", "text": "返回{原介质}", "c": "red", "size": 38}]}, {"blocks": [{"t": "rule", "tag": "折射", "at": "a3", "text": "进入{另一种介质}", "c": "orange", "size": 38}]}]}], "callout": {"label": "要点", "at": "a4", "text": "分界面上反射和折射{同时发生}"}}} />;

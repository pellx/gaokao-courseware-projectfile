import React from 'react';
import {AutoScene} from '../components/auto';

export const Relation: React.FC = () => <AutoScene k="relation" d={{"tag": "考点四", "title": "关系式法", "blocks": [{"t": "chain", "steps": [{"at": "re2", "text": "ClO^-"}, {"at": "re2", "text": "I2"}, {"at": "re2", "text": "2S2O3^2-"}], "arrows": ["", ""], "center": true, "size": 40}, {"t": "big", "at": "re2", "text": "ClO^- ～ {2S2O3^2-}", "size": 44}, {"t": "text", "at": "re3", "text": "捷径：{得失电子守恒}", "size": 34, "center": true}], "callout": {"label": "解题方法", "at": "re4", "text": "每步比例{首尾相连}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Speed: React.FC = () => <AutoScene k="speed" d={{"tag": "考点七", "title": "影响火箭速度的因素", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "喷气速度", "at": "p1", "text": "燃气相对火箭的速度", "c": "red", "size": 30}]}, {"blocks": [{"t": "rule", "tag": "质量比", "at": "p2", "text": "{起飞质量 / 燃尽质量}", "c": "orange", "size": 30}]}]}, {"t": "big", "at": "p3", "text": "两者{越大}，火箭速度越大", "size": 46}], "callout": {"label": "要点", "at": "p4", "text": "{喷气速度}和{质量比}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const PointE: React.FC = () => <AutoScene k="pointE" d={{"tag": "考点四", "title": "点电荷的电场", "blocks": [{"t": "big", "at": "p1", "text": "E = {kQ/r^2}", "size": 60}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "正电荷", "at": "p3", "text": "方向{背离}电荷", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "负电荷", "at": "p3", "text": "方向{指向|orange}电荷", "c": "orange", "size": 32}]}]}], "callout": {"label": "要点", "at": "p4", "text": "F/q：{定义式}；kQ/r^2：{点电荷}"}}} />;

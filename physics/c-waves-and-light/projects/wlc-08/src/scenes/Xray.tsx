import React from 'react';
import {AutoScene} from '../components/auto';

export const Xray: React.FC = () => <AutoScene k="xray" d={{"tag": "考点九", "title": "X 射线与 γ 射线", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "X 射线", "at": "i1", "lines": ["{穿透力强}", "医学透视、安检"], "c": "orange", "size": 36}]}, {"blocks": [{"t": "panel", "title": "γ 射线", "at": "i2", "lines": ["{能量很高}", {"at": "i3", "text": "治疗肿瘤、工业探伤"}], "c": "red", "size": 36}]}]}], "callout": {"label": "要点", "at": "i4", "text": "γ 射线{穿透力最强}"}}} />;

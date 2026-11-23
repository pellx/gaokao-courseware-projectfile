import React from 'react';
import {AutoScene} from '../components/auto';

export const MPrin: React.FC = () => <AutoScene k="mprin" d={{"tag": "考点六", "title": "螺旋测微器的原理", "blocks": [{"t": "chain", "steps": [{"at": "m1", "text": "螺距 {0.5 mm}"}, {"at": "m2", "text": "可动刻度 {50 等份}"}, {"at": "m3", "text": "每格 {0.01 mm}"}], "arrows": []}, {"t": "big", "at": "m3", "text": "0.5 mm ÷ 50 = {0.01 mm}", "size": 48}], "callout": {"label": "要点", "at": "m4", "text": "微小移动{放大}成可动刻度的格数"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Pat: React.FC = () => <AutoScene k="pat" d={{"tag": "考点五", "title": "干涉图样的特点", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "单色光", "at": "e1", "lines": ["{等间距}", "明暗相间"], "c": "red", "size": 36}]}, {"blocks": [{"t": "panel", "title": "白光", "at": "e2", "lines": ["{彩色}条纹", {"at": "e3", "text": "中央为{白色亮条纹}"}], "c": "orange", "size": 36}]}]}], "callout": {"label": "要点", "at": "e4", "text": "波长不同 → 间距不同 → {彩色}"}}} />;

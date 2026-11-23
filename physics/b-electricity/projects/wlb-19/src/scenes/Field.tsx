import React from 'react';
import {AutoScene} from '../components/auto';

export const Field: React.FC = () => <AutoScene k="field" d={{"tag": "考点一", "title": "感生电场与感生电动势", "blocks": [{"t": "chain", "steps": [{"at": "a1", "text": "变化的磁场", "c": "orange"}, {"at": "a1", "text": "感生电场", "c": "red"}, {"at": "a2", "text": "自由电荷定向移动", "c": "orange"}], "arrows": []}, {"t": "rule", "tag": "非静电力", "at": "a3", "text": "感生电场对自由电荷的{作用力}", "c": "red", "size": 32}, {"t": "rule", "tag": "应用", "at": "a4", "text": "{电子感应加速器}", "c": "orange", "size": 32}], "callout": {"label": "要点", "at": "a5", "text": "感生电场由{变化的磁场}激发"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Ir: React.FC = () => <AutoScene k="ir" d={{"tag": "考点六", "title": "红外光谱", "blocks": [{"t": "big", "at": "ir2", "text": "红外光谱：测{化学键、官能团}", "size": 46}, {"t": "text", "at": "ir3", "text": "C2H6O：有 O—H → {乙醇}；只有 C—O—C → 甲醚", "size": 33, "center": true}], "callout": {"label": "易错", "at": "ir4", "text": "红外测不出{氢的种类和个数}"}, "beat": {"k": "coat", "at": "ir3b", "text": "红外光谱\n看{化学键|red}"}}} />;

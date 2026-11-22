import React from 'react';
import {AutoScene} from '../components/auto';

export const Strength: React.FC = () => <AutoScene k="strength" d={{"tag": "考点三", "title": "电场强度", "blocks": [{"t": "big", "at": "s1", "text": "E = {F/q}　单位 {N/C|orange}", "size": 56}, {"t": "items", "items": [{"at": "s2", "text": "由{电场本身}决定，与试探电荷无关"}, {"at": "s3", "text": "方向：{正电荷}受力的方向"}], "size": 32}], "callout": {"label": "易错", "at": "s4", "text": "负电荷受力与 E {反向}；移走试探电荷 E 不变"}}} />;

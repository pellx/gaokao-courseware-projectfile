import React from 'react';
import {AutoScene} from '../components/auto';

export const Ammonia: React.FC = () => <AutoScene k="ammonia" d={{"tag": "考点二", "title": "NH3 的实验室制法", "blocks": [{"t": "big", "at": "am1", "text": "2NH4Cl + Ca(OH)2 →(△) CaCl2 + 2NH3↑ + 2H2O", "size": 38}, {"t": "items", "items": [{"at": "am2", "text": "干燥：{碱石灰}"}, {"at": "am2", "text": "收集：{向下排空气法}，管口塞棉花"}, {"at": "am3", "text": "检验：湿润红色石蕊试纸{变蓝}"}], "size": 34}], "callout": {"label": "易错", "at": "am4", "text": "只加热 NH4Cl 不行：在管口{重新化合}"}, "beat": {"k": "yellow", "at": "am3b", "text": "NH3 只认\n{碱石灰|red}"}}} />;

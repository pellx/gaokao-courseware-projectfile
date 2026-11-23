import React from 'react';
import {AutoScene} from '../components/auto';

export const Lc: React.FC = () => <AutoScene k="lc" d={{"tag": "考点九", "title": "电感器和电容器对交流的作用", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "电感器：感抗", "at": "i1", "lines": ["{通直流、阻交流}", "L 越大、f 越高，感抗{越大}"], "c": "red", "size": 30}]}, {"blocks": [{"t": "panel", "title": "电容器：容抗", "at": "i3", "lines": ["{隔直流、通交流}", "C 越大、f 越高，容抗{越小}"], "c": "orange", "size": 30}]}]}], "callout": {"label": "要点", "at": "i5", "text": "f 越高：感抗{越大}，容抗{越小}"}, "beat": {"k": "gate", "at": "i4b", "text": "有的放行，有的挡回\n电感、电容像{守门员|red}"}}} />;

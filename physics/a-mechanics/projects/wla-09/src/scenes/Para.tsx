import React from 'react';
import {AutoScene} from '../components/auto';

export const Para: React.FC = () => <AutoScene k="para" d={{"tag": "考点三", "title": "平行四边形定则", "blocks": [{"t": "chain", "steps": [{"at": "c1", "text": "两个分力 F_1、F_2"}, {"at": "c2", "text": "以 F_1、F_2 为{邻边}作平行四边形"}, {"at": "c3", "text": "{对角线}表示合力 F"}], "arrows": []}, {"t": "text", "at": "c4", "text": "多个力：先两两合成，再依次与下一个力合成", "size": 30}], "callout": {"label": "易错", "at": "c5", "text": "合力是从{作用点出发}、夹在两邻边之间的对角线"}}} />;

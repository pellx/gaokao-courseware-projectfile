import React from 'react';
import {AutoScene} from '../components/auto';

export const Glucose: React.FC = () => <AutoScene k="glucose" d={{"tag": "考点二", "title": "葡萄糖与果糖", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "葡萄糖", "at": "gl1", "text": "{多羟基醛}：还原糖", "c": "red", "size": 32}]}, {"blocks": [{"t": "rule", "tag": "果糖", "at": "gl2", "text": "{多羟基酮|orange}：同分异构体", "c": "orange", "size": 32}]}]}, {"t": "items", "items": [{"at": "gl1", "text": "银镜反应；新制 Cu(OH)2 → {砖红色}"}, {"at": "gl3", "text": "酒化酶：C6H12O6 → 2C2H5OH + 2CO2"}], "size": 33}], "callout": {"label": "考法", "at": "gl4", "text": "检验葡萄糖：{新制 Cu(OH)2} 加热"}, "beat": {"k": "maid", "at": "gl3b", "text": "葡萄糖有{醛基|red}\n是还原糖"}}} />;

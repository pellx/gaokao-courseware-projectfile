import React from 'react';
import {AutoScene} from '../components/auto';

export const KMag: React.FC = () => <AutoScene k="kmag" d={{"tag": "考点四", "title": "滑动摩擦力的大小", "blocks": [{"t": "big", "at": "d1", "text": "F_f = {μF_N}", "size": 64}, {"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "F_N", "at": "d2", "text": "{压力}，不一定等于重力", "c": "red", "size": 30}]}, {"blocks": [{"t": "rule", "tag": "μ", "at": "d3", "text": "动摩擦因数，{没有单位}", "c": "orange", "size": 30}]}]}, {"t": "text", "at": "d3", "text": "μ 与接触面的{材料}和{粗糙程度}有关", "size": 30}, {"t": "text", "at": "d4", "text": "与接触面积、速度大小{无关}", "size": 30}], "callout": {"label": "易错", "at": "d5", "text": "F_N 是{压力}，不一定等于 mg"}}} />;

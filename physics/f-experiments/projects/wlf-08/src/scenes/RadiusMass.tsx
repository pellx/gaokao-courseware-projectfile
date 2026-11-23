import React from 'react';
import {AutoScene} from '../components/auto';

export const RadiusMass: React.FC = () => <AutoScene k="rm" d={{"tag": "考点四", "title": "改变半径与质量", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "改变 r", "at": "m2", "text": "小球放在{不同挡板处}", "c": "red", "size": 34}]}, {"blocks": [{"t": "rule", "tag": "改变 m", "at": "m3", "text": "换用{质量不同}的小球", "c": "orange", "size": 34}]}]}, {"t": "text", "at": "m3", "text": "例：钢球和铝球，{大小相同、质量不同}", "size": 32}], "callout": {"label": "要点", "at": "m4", "text": "转动半径：{球心到转轴}的距离"}}} />;

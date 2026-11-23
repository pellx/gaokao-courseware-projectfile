import React from 'react';
import {AutoScene} from '../components/auto';

export const IU: React.FC = () => <AutoScene k="iu" d={{"tag": "考点八", "title": "伏安特性曲线", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "rule", "tag": "线性元件", "at": "v2", "text": "I-U 图线是{过原点的直线}", "c": "red", "size": 30}]}, {"blocks": [{"t": "rule", "tag": "非线性元件", "at": "v3", "text": "小灯泡、二极管：{不是直线|orange}", "c": "orange", "size": 30}]}]}, {"t": "text", "at": "v4", "text": "常见元器件：电阻器、电容器、电感器、二极管、开关", "size": 30}], "callout": {"label": "易错", "at": "v5", "text": "I-U 图斜率 = {1/R}"}}} />;

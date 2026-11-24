import React from 'react';
import {AutoScene} from '../components/auto';

export const Zero: React.FC = () => <AutoScene k="zero" d={{"tag": "考点四", "title": "欧姆调零与中值电阻", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "欧姆调零", "at": "d1", "lines": ["红、黑表笔{短接}", {"at": "d2", "text": "指针指电阻{零刻度}（满偏）"}, {"at": "d2", "text": "I_g = E / R内"}], "c": "red", "size": 36}]}, {"blocks": [{"t": "panel", "title": "中值电阻", "at": "d3", "lines": ["指针在{刻度盘中央}", "I = I_g / 2", {"at": "d3", "text": "{R_x = R内}"}], "c": "orange", "size": 36}]}]}], "callout": {"label": "要点", "at": "d4", "text": "中央刻度：{R_x = R内}（中值电阻）"}}} />;

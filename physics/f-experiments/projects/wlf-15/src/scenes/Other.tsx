import React from 'react';
import {AutoScene} from '../components/auto';

export const Other: React.FC = () => <AutoScene k="other" d={{"tag": "考点七", "title": "其他方案", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "电流表 + 电阻箱", "at": "g1", "lines": ["{E = I(R + r)}", {"at": "g4", "text": "1/I = R/E + r/E"}], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "电压表 + 电阻箱", "at": "g2", "lines": ["{E = U + Ur/R}", {"at": "g4", "text": "1/U = 1/E + (r/E)·(1/R)"}], "c": "orange", "size": 32}]}]}, {"t": "text", "at": "g3", "text": "改变电阻箱阻值，测{多组数据}", "size": 34, "center": true}], "callout": {"label": "要点", "at": "g4", "text": "变形成{线性关系}再作图"}}} />;

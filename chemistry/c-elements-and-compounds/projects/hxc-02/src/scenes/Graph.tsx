import React from 'react';
import {AutoScene} from '../components/auto';

export const Graph: React.FC = () => <AutoScene k="graph" d={{"tag": "考点七", "title": "滴加盐酸的图像〔课外〕", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "第一段：无气体", "at": "gr2", "lines": ["CO3^2- + H^+ = HCO3^-"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "第二段：放出 CO2", "at": "gr2", "lines": ["HCO3^- + H^+ = CO2↑ + H2O"], "c": "orange", "size": 32}]}]}, {"t": "big", "at": "gr3", "text": "只有 Na2CO3：两段{相等}；第二段更长 → 还有 NaHCO3", "size": 36}], "callout": {"label": "解题方法", "at": "gr4", "text": "看{两段长度}：第一段 = CO3^2-，第二段 − 第一段 = 原有 HCO3^-"}}} />;

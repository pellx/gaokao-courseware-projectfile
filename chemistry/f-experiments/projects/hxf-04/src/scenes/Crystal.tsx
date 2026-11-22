import React from 'react';
import {AutoScene} from '../components/auto';

export const Crystal: React.FC = () => <AutoScene k="crystal" d={{"tag": "考点三", "title": "蒸发结晶与冷却结晶", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "蒸发结晶", "at": "cr1", "lines": ["溶解度随温度{变化不大}", "NaCl", "出现较多固体时停火"], "c": "red", "size": 31}]}, {"blocks": [{"t": "panel", "title": "冷却结晶", "at": "cr2", "lines": ["溶解度随温度变化大", "{含结晶水}、受热易分解", "KNO3、CuSO4·5H2O"], "c": "orange", "size": 31}]}]}, {"t": "big", "at": "cr3", "text": "{蒸发浓缩、冷却结晶}、过滤、洗涤、干燥", "size": 36}], "callout": {"label": "易错", "at": "cr4", "text": "NaCl 含 KNO3：{蒸发结晶、趁热过滤}"}, "beat": {"k": "strum", "at": "cr3b", "text": "含结晶水的\n{不能蒸干|red}"}}} />;

import React from 'react';
import {AutoScene} from '../components/auto';

export const Otwo: React.FC = () => <AutoScene k="o2" d={{"tag": "考点二", "title": "钠与氧气：条件不同，产物不同", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "常温", "at": "o21", "lines": ["表面变暗", "4Na + O2 = 2{Na2O}", "Na2O：{白色}"], "c": "red", "size": 32}]}, {"blocks": [{"t": "panel", "title": "加热", "at": "o22", "lines": ["熔成小球，{黄色火焰|orange}", "2Na + O2 ═△═ {Na2O2|orange}", "Na2O2：{淡黄色|orange}"], "c": "orange", "size": 32}]}]}], "callout": {"label": "易错", "at": "o24", "text": "等质量钠生成 Na2O 或 Na2O2，{转移电子数相同}"}}} />;

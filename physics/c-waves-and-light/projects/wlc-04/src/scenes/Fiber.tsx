import React from 'react';
import {AutoScene} from '../components/auto';

export const Fiber: React.FC = () => <AutoScene k="fiber" d={{"tag": "考点六", "title": "光导纤维的原理", "blocks": [{"t": "row", "cols": [{"blocks": [{"t": "panel", "title": "内芯", "at": "f1", "lines": ["折射率{较大}"], "c": "red", "size": 38}]}, {"blocks": [{"t": "panel", "title": "外套", "at": "f1", "lines": ["折射率较小"], "c": "orange", "size": 38}]}]}, {"t": "text", "at": "f3", "text": "在界面上{不断全反射}，从一端传到另一端", "size": 34}], "callout": {"label": "易错", "at": "f4", "text": "n(内芯) {>} n(外套)"}, "beat": {"k": "phone", "at": "f3b", "text": "一根细线\n把信号{送到另一端|red}"}}} />;
